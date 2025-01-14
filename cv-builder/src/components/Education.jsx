import React, { useState } from "react";
import "../styles/Education.css";

const Education = ({ data, onChange }) => {
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };
  return (
    <div className="education-container">
      <div className="education-form-section">
        <form>
          School Name:
          <input
            type="text"
            name="schoolName"
            value={data.schoolName}
            onChange={handleOnChange}
            placeholder="School Name"
          />
        </form>
        <form>
          Courses:
          <input
            type="text"
            name="schoolName"
            value={data.schoolCourses}
            onChange={handleOnChange}
            placeholder="E.g. GCSE's"
          />
        </form>
        <form>
          Grades:
          <input
            type="text"
            name="schoolName"
            value={data.schoolGrades}
            onChange={handleOnChange}
            placeholder="E.g. A*, B, C, D"
          />
        </form>
      </div>
    </div>
  );
};

export default Education;
