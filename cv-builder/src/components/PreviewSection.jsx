import React from "react";
import "../styles/PreviewSection.css"

const LivePreviewNew = ({ formData }) => {

    const { personalInfo } = formData;

    return (
            <div className="preview-section">
                <h2>Personal Info Preview</h2>
                    <div className="preview-content">
                    <p><strong>Name:</strong> {personalInfo.name || "Your Name"}</p>
                    <p><strong>Email:</strong> {personalInfo.email || "Your Email"}</p>

            </div>
            </div>        
    )

}

export default LivePreviewNew;

