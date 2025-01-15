import React from "react";

const Skills = ({ data, onChange }) => {
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <div className="skills-container">
      <div className="skills-container-header">
        <h1>Skills</h1>
      </div>
    </div>
  );
};

export default Skills;
