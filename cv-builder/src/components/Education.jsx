import React, { useState } from "react";
import "../styles/Education.css"

const Education = () => {
    const[formData, setFormData] = useState({
        schoolName: "",
        schoolAddress: "",
        subject: "",
        grade: ""
    });

    const HandleOnChange= (e) =>{
        const { name, value } = e.target;
        setFormData({ ...formData, [name] : value})
    }

    return (
        <div className="education-container">
            <div className="education-form-section">
                <h2>Education</h2>
                <form>
                    School Name:
                    <input
                        type="text"
                        name="schoolName"
                        value={formData.schoolName}
                        onChange={HandleOnChange}
                        placeholder="School Name"
                    />
                </form>
            </div>
            <LivePreview formData={formData}/>
        </div>
    );
};

const LivePreview = ({ formData }) => {
    return (
        <div className="education-preview-section">
            <h2>Education Preview</h2>
            <div className="education-preview-content">
                <p><strong>School:</strong> {formData.schoolName || "School Name"}</p>
            </div>
        </div>
    )
  }

export default Education;