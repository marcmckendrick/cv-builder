import React, { useState } from "react";
import "../styles/PersonalInfo.css";

const PersonalInfo = ({ data, onChange }) => {
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
  };

  return (
    <div className="personal-info-container">
      <div className="personal-info-form-section">
        <div className="personal-info-name">
          <form>
            Name:
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleOnChange}
              placeholder="Name"
            />
          </form>
        </div>

        <form>
          Email:
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={handleOnChange}
            placeholder="Email"
          />
        </form>
        <form>
          Phone:
          <input
            type="text"
            name="phone"
            value={data.phone}
            onChange={handleOnChange}
            placeholder="PhoneNum"
          />
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
