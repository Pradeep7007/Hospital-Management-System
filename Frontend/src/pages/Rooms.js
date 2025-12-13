import React, { useState } from 'react';
import room from '../components/Room.js'; 

function Rooms() {
  const [filter, setFilter] = useState('All'); // Filter by room type

  // Filter room based on selected type
  const filteredroom = filter === 'All' ? room : room.filter(room => room.roomType === filter);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 className='text-center'>Hospital Rooms Deatils</h1>

      {/* Filter Buttons */}
      <div style={{ marginBottom: '20px' }}>
        {['All', 'General Ward', 'Semi-Private', 'Private', 'ICU'].map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            style={{
              marginRight: '10px',
              padding: '8px 12px',
              backgroundColor: filter === type ? '#007bff' : '#f0f0f0',
              color: filter === type ? '#fff' : '#000',
              border: 'none',
              marginTop:'10px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {type}
          </button>
        ))}
      </div>

      <table style={{
        width: '100%',
        borderCollapse: 'separate',
        borderSpacing: 0,
        borderRadius: '10px',
        overflow: 'hidden'}}className="rounded-4">

        <thead>
          <tr style={{ backgroundColor: '#5d0b79ff', color: '#fff' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Type</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Room No</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Floor</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>In-Charge Nurse</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Nurse Phone</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Available</th>
          </tr>
        </thead>
        <tbody>
          {filteredroom.map(room => (
            <tr key={room.roomNo} style={{ backgroundColor: room.available ? '#EFECE3' : '#4A70A9' ,color: room.available?'black':'white'}}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{room.roomType}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{room.roomNo}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{room.floorNo}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{room.inChargeNurse}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{room.nursePhone}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {room.available ? 'Available' : 'Not Available'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Rooms;
