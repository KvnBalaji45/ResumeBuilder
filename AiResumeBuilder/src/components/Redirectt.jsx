import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './Homepage';
import Register from './Register';
import Login from './Login';
import ResumeForm from './ResumeForm';
import Homepage from './Homepage';

export default function Redirectt() {
  const navigate = useNavigate();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resume" element={<ResumeForm />} />
      </Routes>
    </div>
  );
}
