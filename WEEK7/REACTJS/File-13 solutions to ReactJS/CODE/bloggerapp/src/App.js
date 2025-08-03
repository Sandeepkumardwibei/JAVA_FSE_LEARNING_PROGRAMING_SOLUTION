import React from 'react';
import CourseDetails from './Component/CourseDetails';
import BookDetails from './Component/BookDetails';
import BlogDetails from './Component/BlogDetails';
import './App.css';

function App() {
  return (
    <div className="container">
      <CourseDetails />
      <BookDetails />
      <BlogDetails />
    </div>
  );
}

export default App;
