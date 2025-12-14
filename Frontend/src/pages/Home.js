import React from 'react'
import one from '../assests/one.webp'
import two from '../assests/two.jpg'
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom'
import {Navigate,Features} from '../components/Navigate';

function Home() {

    const navigate = useNavigate()

  return (
    <div className="p-4">

      <div className="row align-items-center bg-primary text-white p-4 rounded-3">

        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <h1>Transforming Healthcare Management</h1>
          <p className="fs-5">
            Deliver better care and manage hospital operations effortlessly
            with our smart management system.
          </p>
          <button className='explore-btn'>Explore Features</button>
          <button className='explore-btn ms-2'>Appointments</button>
        </div>

        <div className="col-12 col-md-6 text-center">
          <img
            src={one}
            alt="doctor"
            className="img-fluid rounded-3"
            style={{ maxHeight: '300px' }}
          />
        </div>

      </div>

      <div className="row p-4" >
        <h1 className='p-4 fw-bold text-center'>Management Modules</h1>
      {Navigate.map(item => (
        <div className="col-12 col-md-4 mb-4" key={item.id}>
          <div className="card h-100 shadow-sm border border-white">
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.content}</p>

              <button
                className="btn btn-primary"
                onClick={() => navigate(item.link)}
              >
                {item.button}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

      <div className="row align-items-center bg-light text-white p-4 rounded-3">

        <div className="col-12 col-md-6 text-center">
          <img
            src={two}
            alt="doctor"
            className="img-fluid rounded-3"
            style={{ maxHeight: '300px' }}
          />
        </div>

        <div className="col-12 col-md-6 mb-3 mb-md-0">
          <h1 className='text-dark'>Modernize Your Hospital Operations</h1>
          <p className="fs-5 text-secondary">
            Our hospital management system provides cutting-edge features to streamline your workflows, improve patient satisfaction, and drive better outcomes.
          </p>
          <button className='explore-btn'>Explore Features</button>
          <button className='explore-btn ms-2'>Appointments</button>
        </div>

      </div>


    <div className="row">
        <h2 className='p-4 text-center fw-bold'>Why Choose Our Hospital Management System?</h2>
      {Features.map(item => (
        <div className="col-12 col-md-6 col-lg-4 mb-4" key={item.id}>
          <div className="h-100 p-4 cho-color">
            <h5 className='fw-bold'>{item.title}</h5>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>

      <hr/>
      <p className='text-center'>© 2025 Hospital Management. All rights reserved.</p>
    </div>
  )
}

export default Home
