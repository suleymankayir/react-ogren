// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from "react";
import Header from "./Header";
import { courses } from "./Info";
import Course from "./Course";
import './css/Course.css'

function App() {
  return (
    <div>
      <Header />
      <div className="course-main">
      {
        courses?.map((course)=>(
          <Course key={course.id} course={course} />
        ))
      }
      </div>
    </div>
  );
}

export default App;
