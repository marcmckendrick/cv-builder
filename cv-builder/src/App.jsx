import React, { useEffect, useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import PreviewSection from "./components/PreviewSection";
import "./App.css";
import Experience from "./components/Experience";

function App() {
  const [formData, setFormData] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
    },
    education: {
      schoolName: "",
      schoolCourses: "",
      schoolGrades: "",
    },
    experience: {
      jobTitle: "",
      employer: "",
    },
  });

  const handleSectionChange = (section, updatedData) => {
    setFormData((prevState) => ({
      ...prevState,
      [section]: updatedData,
    }));
  };

  const [isPersonalInfoCardVisible, setPersonalInfoCardVisability] = useState(true);
  const [isEducationCardVisible, setEducationCardVisability] = useState(false);

  

  return (
    <div className="App">
      <h1>CV Builder</h1>
      <div className="main-content">
        <div className="form-editing-section">
          <div className="personal-info">
            <div className="personal-info-header">
              <h2 onClick={() => setPersonalInfoCardVisability(!isPersonalInfoCardVisible)}>
                Personal Info {isPersonalInfoCardVisible ? "(^)" : "()"}
              </h2>
            </div>
            <div className="personal-info-content">
              {isPersonalInfoCardVisible && (
                <PersonalInfo
                  data={formData.personalInfo}
                  onChange={(updatedData) =>
                    handleSectionChange("personalInfo", updatedData)
                  }
                />
              )}
            </div>
          </div>

          <div className="education-container">
            <div className="education-container-header">
              <h2 onClick={() => setEducationCardVisability(!isEducationCardVisible)}>
                Education {isEducationCardVisible ? "" : ""}</h2>
            </div>
            {isEducationCardVisible && (
            <Education
              data={formData.education}
              onChange={(updatedData) =>
                handleSectionChange("education", updatedData)
              }
            />
          )}
          </div>

          <Experience
            data={formData.experience}
            onChange={(updatedData) =>
              handleSectionChange("experience", updatedData)
            }
          />
        </div>
        <div className="preview-section">
            <PreviewSection formData={formData} />
          </div>
      </div>
    </div>
  );
}

export default App;
