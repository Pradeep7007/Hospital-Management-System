import React from "react";
import { useNavigate } from "react-router-dom";
import { hospitalData } from "../components/Types";
import "../styles/Appointment.css";

function Appointment() {
  const navigate = useNavigate();

  const handleBook = (doctor, department) => {
    navigate("/form", {
      state: {
        doctor,
        department
      }
    });
  };

  return (
    <div className="appoint-container">
      {hospitalData.map((item, index) => (
        <div className="appoint-card" key={index}>
          <h3>{item.department}</h3>
          <p>{item.doctor}</p>
          <button onClick={() => handleBook(item.doctor, item.department)}>
            {item.button}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Appointment;
