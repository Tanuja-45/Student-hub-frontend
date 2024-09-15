import React, { useState } from 'react';
import './Register.css';

function StudentRegistration() {
  const [formData, setFormData] = useState({
    studentID: '',
    fullName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    department: '',
    year: '',
    semester: '',
    enrolledCourses: '',
    alternativeEmail: '',
    alternativePhone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission logic here
  };

  return (
    <div className="registration-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <h1>Student Registration</h1>
        <fieldset>
          <legend>Student Information</legend>
          <label>
            Student ID:
            <input type="text" name="studentID" value={formData.studentID} onChange={handleChange} required />
          </label>
          <label>
            Full Name:
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </label>
          <label>
            Date of Birth:
            <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
          </label>
          <label>
            Gender:
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label>
            Email Address:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Phone Number:
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </label>
          <label>
            Address:
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          </label>
        </fieldset>

        <fieldset>
          <legend>Academic Details</legend>
          <label>
            Department:
            <input type="text" name="department" value={formData.department} onChange={handleChange} required />
          </label>
          <label>
            Year of Study:
            <input type="text" name="year" value={formData.year} onChange={handleChange} required />
          </label>
          <label>
            Semester:
            <input type="text" name="semester" value={formData.semester} onChange={handleChange} required />
          </label>
          <label>
            Enrolled Courses:
            <textarea name="enrolledCourses" value={formData.enrolledCourses} onChange={handleChange} required />
          </label>
        </fieldset>

        <fieldset>
          <legend>Contact Information</legend>
          <label>
            Alternative Email Address:
            <input type="email" name="alternativeEmail" value={formData.alternativeEmail} onChange={handleChange} />
          </label>
          <label>
            Alternative Phone Number:
            <input type="tel" name="alternativePhone" value={formData.alternativePhone} onChange={handleChange} />
          </label>
        </fieldset>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default StudentRegistration;
