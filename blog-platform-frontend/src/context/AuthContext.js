// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    const username = localStorage.getItem('username');
    if (token && id && username) {
      setUser({ token, id: parseInt(id), username });
    }
  }, []);

  const login = (token, id, username) => {
    localStorage.setItem('token', token);
    localStorage.setItem('id', id);
    localStorage.setItem('username', username);
    setUser({ token, id: parseInt(id), username });
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
