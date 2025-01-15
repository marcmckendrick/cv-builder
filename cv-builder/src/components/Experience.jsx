import React from "react";
import "../styles/Experience.css"

const Experience = ({ data, onChange }) => {
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <div className="experience-container">
      <h2>Experience</h2>
      <form>
        Job Title:
        <input
          type="text"
          name="jobTitle"
          value={data.jobTtile}
          onChange={handleOnChange}
          placeholder="jobTitle"
        />
      </form>
      <form>
        Employer:
        <input
          type="text"
          name="employer"
          value={data.employer}
          onChange={handleOnChange}
          placeholder="employer"
        />
      </form>
      <form>
        Dates:
        <input
          type="text"
          name="dates"
          value={data.dates}
          onChange={handleOnChange}
          placeholder="--/--/----"
        />
      </form>
      <form>
        Info:
        <textarea 
        type="text"
        name="jobInfo"
        value={data.jobInfo}
        onChange={handleOnChange}/>
      </form>
    </div>
  );
};

export default Experience;
