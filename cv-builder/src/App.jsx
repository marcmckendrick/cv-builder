import React, { useState } from "react";
import PersonalInfo from "./components/PersonalInfo";
import Education from "./components/Education";
import PreviewSection from "./components/PreviewSection";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    personalInfo: {
      name: "",
      email: "",
    },
  });

  const handleSectionChange = (section, updatedData) => {
    setFormData((prevState) => ({
      ...prevState,
      [section]: updatedData,
    }));
  };

  return (
    <div className="App">
      <h1>CV Builder</h1>
      <div className="form-editing-section">
        <PersonalInfo
          data={formData.personalInfo}
          onChange={(updatedData) =>
            handleSectionChange("personalInfo", updatedData)
          }
        />
      </div>
      <PreviewSection formData={formData} />
    </div>
  );
}

export default App;
