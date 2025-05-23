// src/pages/PostDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Card } from 'react-bootstrap';


const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
      setPost(res.data);
    };
    fetchPost();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Subtitle className="mb-3 text-muted">by {post.username} on {new Date(post.created_at).toLocaleDateString()}</Card.Subtitle>
        <Card.Text dangerouslySetInnerHTML={{ __html: post.content }} />
        <Link to="/" className="btn btn-secondary mt-3">Back</Link>
      </Card.Body>
    </Card>
  );
};

export default PostDetail;
