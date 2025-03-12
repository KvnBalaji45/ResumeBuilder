import React, { useState } from 'react';
import './ResumeForm.css';

export default function ResumeForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    experience: '',
    education: '',
    skills: '',
    summary: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDownload = async () => {
    const jsPDF = (await import('jspdf')).default;
    await import('jspdf-autotable');

    const doc = new jsPDF();

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.text('Resume', 105, 20, null, null, 'center');

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);

    doc.text(`Name     : ${formData.name}`, 20, 40);
    doc.text(`Email    : ${formData.email}`, 20, 50);
    doc.text(`Phone    : ${formData.phone}`, 20, 60);
    doc.text(`Address  : ${formData.address}`, 20, 70);

    doc.setFont('helvetica', 'bold');
    doc.text('Work Experience', 20, 90);
    doc.setFont('helvetica', 'normal');
    doc.text(formData.experience, 20, 100, { maxWidth: 170 });

    doc.setFont('helvetica', 'bold');
    doc.text('Education', 20, 120);
    doc.setFont('helvetica', 'normal');
    doc.text(formData.education, 20, 130, { maxWidth: 170 });

    doc.setFont('helvetica', 'bold');
    doc.text('Skills', 20, 150);
    doc.setFont('helvetica', 'normal');
    doc.text(formData.skills, 20, 160, { maxWidth: 170 });

    doc.setFont('helvetica', 'bold');
    doc.text('Professional Summary', 20, 180);
    doc.setFont('helvetica', 'normal');
    doc.text(formData.summary, 20, 190, { maxWidth: 170 });

    doc.save(`${formData.name}_Resume.pdf`);
  };

  return (
    <div className="resume-container">
      <h2>Create Your Resume</h2>
      <input 
        type="text" 
        name="name" 
        placeholder="Name" 
        value={formData.name} 
        onChange={handleChange} 
      />
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        value={formData.email} 
        onChange={handleChange} 
      />
      <input 
        type="text" 
        name="phone" 
        placeholder="Phone" 
        value={formData.phone} 
        onChange={handleChange} 
      />
      <input 
        type="text" 
        name="address" 
        placeholder="Address" 
        value={formData.address} 
        onChange={handleChange} 
      />
      <textarea 
        name="experience" 
        placeholder="Work Experience" 
        value={formData.experience} 
        onChange={handleChange}
      ></textarea>
      <textarea 
        name="education" 
        placeholder="Education" 
        value={formData.education} 
        onChange={handleChange}
      ></textarea>
      <textarea 
        name="skills" 
        placeholder="Skills (comma separated)" 
        value={formData.skills} 
        onChange={handleChange}
      ></textarea>
      <textarea 
        name="summary" 
        placeholder="Professional Summary" 
        value={formData.summary} 
        onChange={handleChange}
      ></textarea>

      <button onClick={handleDownload}>Generate Resume</button>
    </div>
  );
}