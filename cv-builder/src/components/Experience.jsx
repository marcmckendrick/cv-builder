import React from "react";

const Experience = ({ data }) => {
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <div className="experience-container">
        <h2>Experience</h2>
      <form>
        <input
          type="text"
          name="jobTitle"
          value={data.jobTtile}
          onChange={handleOnChange}
          placeholder="jobTitle"
        />
      </form>
      <form>
        <input
          type="text"
          name="employer"
          value={data.employer}
          onChange={handleOnChange}
          placeholder="employer"
        />
      </form>
    </div>
  );
};

export default Experience;
