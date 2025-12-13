import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../styles/Appointmentform.css";

function Appointmentform() {
  const location = useLocation();
  const { doctor, department } = location.state || {};

  // Fixed time slots
  const timeSlots = [
  "09:00 AM","09:10 AM","09:20 AM","09:30 AM","09:40 AM","09:50 AM",
  "10:00 AM","10:10 AM","10:20 AM","10:30 AM","10:40 AM","10:50 AM",
  "11:00 AM","11:10 AM","11:20 AM","11:30 AM","11:40 AM","11:50 AM",
  "12:00 PM",
  "01:00 PM","01:10 PM","01:20 PM","01:30 PM","01:40 PM","01:50 PM",
  "02:00 PM","02:10 PM","02:20 PM","02:30 PM","02:40 PM","02:50 PM",
  "03:00 PM","03:10 PM","03:20 PM","03:30 PM","03:40 PM","03:50 PM",
  "04:00 PM","04:10 PM","04:20 PM","04:30 PM","04:40 PM","04:50 PM",
  "05:00 PM",
];


  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    phone: "",
    age: "",
    patient: "",
    bloodGroup: "",
    time: "",
    purpose: "",
    doctor: doctor || "",
    department: department || ""
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      doctor: doctor || "",
      department: department || ""
    }));
  }, [doctor, department]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data:", formData);
    alert("Appointment submitted successfully!");
  };

  return (
    <div className="form-container">
      <h2>Doctor Appointment Booking</h2>

      {/* Prefilled doctor + department */}
      <div className="form-group">
        <input type="text" placeholder="Doctor Name" value={formData.doctor} readOnly />
        <input type="text" placeholder="Department" value={formData.department} readOnly />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Patient Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="fatherName"
            placeholder="Father Name"
            value={formData.fatherName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="motherName"
            placeholder="Mother Name"
            value={formData.motherName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="patient"
            placeholder="Patient ID"
            value={formData.patient}
            onChange={handleChange}
            required
          />

          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            required
          >
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </div>

        {/* Time Slots */}
        <div className="form-group">
          <select
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          >
            <option value="">Select Appointment Time</option>
            {timeSlots.map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <textarea
            name="purpose"
            placeholder="Purpose of Appointment"
            value={formData.purpose}
            onChange={handleChange}
            rows={3}
            required
          />
        </div>

        <button type="submit" className="book-btn">
          Book Appointment
        </button>
      </form>
    </div>
  );
}

export default Appointmentform;
