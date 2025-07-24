import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Students from './pages/Students';
import AddStudent from './pages/AddStudent';
import StudentDetails from './pages/StudentDetails';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Students />} />
      <Route path="/student/:id" element={<StudentDetails />} />
      <Route path="/add-student" element={<AddStudent />} />
    </Routes>
  );
}
