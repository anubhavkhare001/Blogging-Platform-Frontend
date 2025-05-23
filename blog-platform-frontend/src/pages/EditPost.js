// src/pages/EditPost.js
import React, { useState, useEffect, useContext } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const EditPost = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setTitle(res.data.title);
        setContent(res.data.content);
      } catch {
        setError('Failed to load post');
      }
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/posts/${id}`, { title, content }, {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      navigate('/dashboard');
    } catch {
      setError('Failed to update post');
    }
  };

  return (
    <Card>
      <Card.Body>
        <h3 className="mb-4">Edit Post</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Content</Form.Label>
            <CKEditor
              editor={ClassicEditor}
              data={content}
              onChange={(event, editor) => {
                setContent(editor.getData());
              }}
            />
          </Form.Group>

          <Button variant="primary" type="submit">Update</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default EditPost;
