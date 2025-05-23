// src/pages/NewPost.js
import React, { useState, useContext } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const NewPost = () => {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/posts', { title, content }, {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to create post');
    }
  };

  return (
    <Card>
      <Card.Body>
        <h3 className="mb-4">New Post</h3>
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

          <Button variant="success" type="submit">Publish</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default NewPost;
