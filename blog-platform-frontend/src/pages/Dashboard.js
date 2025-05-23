// src/pages/Dashboard.js
import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!user) return; 

    const fetchMyPosts = async () => {
      try{
      const res = await axios.get('http://localhost:5000/api/posts', {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      const myPosts = res.data.filter(p => p.author_id === user.id);
      setPosts(myPosts);
    }catch(err){
      console.error("Failed to fetch posts: ", err);
    }
    };
    fetchMyPosts();
  }, [user]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure?')) {
      await axios.delete(`http://localhost:5000/api/posts/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      setPosts(posts.filter(p => p.id !== id));
    }
  };

  return (
    <div>
      <h2 className="mb-4">My Posts</h2>
      {posts.map(post => (
        <Card className="mb-3" key={post.id}>
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.content.slice(0, 150)}...</Card.Text>
            <Link to={`/edit/${post.id}`} className="btn btn-warning me-2">Edit</Link>
            <Button variant="danger" onClick={() => handleDelete(post.id)}>Delete</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Dashboard;
