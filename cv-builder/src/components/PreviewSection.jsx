import React from "react";
import "../styles/PreviewSection.css";

const LivePreviewNew = ({ formData }) => {
  const { personalInfo, education, experience } = formData;

  return (
    <div className="preview-section-container">
      <div className="personal-info-content-preview">
        <div className="preview-content">
          <div className="personal-info-name-container">
            <p>
              <strong></strong> {personalInfo.name || "< Name >"}
            </p>
          </div>
          <div className="personal-info-contact-information-container">
            <div className="contact-information-item">
              <p>
                <strong>Email:</strong> {personalInfo.email || "Your Email"}
              </p>
            </div>
            <div className="contact-information-item">
              <p>
                <strong>Phone:</strong> {personalInfo.phone || "Your number"}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="education-content-preview">
        <h2>Education Information</h2>
        <div className="preview-content">
          <p>
            <strong>School Name:</strong>{" "}
            {education.schoolName || "School Name"}
          </p>
          <p>
            <strong>Courses:</strong> {education.course || "Course"}
          </p>
          <p>
            <strong>Grades:</strong> {education.schoolName || ""}
          </p>
        </div>
      </div>
      <div className="experience-content-preview">
        <h2>Experience</h2>
        <div className="experience-content"></div>
        <p>
          <strong>{experience.jobTitle || "<Job Tile>"}</strong>
        </p>
        <p>
          <strong>{experience.employer || "<Employer>"}</strong>
        </p>
        <p>
          <strong>{experience.dates || "<Dates>"}</strong>
        </p>
          <div className="mas">
            <strong>{experience.jobInfo || "<Job Info>"}</strong>
          </div>
      </div>
    </div>
  );
};

export default LivePreviewNew;
