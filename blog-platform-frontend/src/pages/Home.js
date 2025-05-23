// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://localhost:5000/api/posts');
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h2 className="mb-4">Latest Posts</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {posts.map(post => (
          <Col key={post.id}>
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">by {post.username} on {new Date(post.created_at).toLocaleDateString()}</Card.Subtitle>
                <Card.Text>{post.content.slice(0, 150)}...</Card.Text>
                <Link to={`/post/${post.id}`} className="btn btn-primary">Read More</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
