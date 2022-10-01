import React, { useState } from 'react';

const VisitorEntryView = ({ toggleAddVisitor }) => {
  const [locationId, setLocationId] = useState("");
  const [userId, setUserId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // submitUser();
    alert(`You have submitted: ${locationId} and ${userId}`);
    // If success, else dont toggle
    toggleAddVisitor(() => false);
  }

  return (
    <div
      className='container'
      style={{
        display: 'block',
        textAlign: 'center',
        backgroundColor: 'green',
        maxWidth: '1000px',
        height: '400px',
        margin: 'auto',
        transform: 'translateY(50%)'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '300px',
          marginTop: 'auto',
          marginBottom: 'auto'
        }}
      >
        <label style={{ display: 'block' }}>
          Enter Location ID:
          <input
            type='text'
            value={locationId}
            onChange={(e) => setLocationId(() => e.target.value)}
          />
        </label>
        <label style={{ display: 'block', marginTop: '0.8em' }}>
          Enter my ID:
          <input
            type='text'
            value={userId}
            onChange={(e) => setUserId(() => e.target.value)}
          />
        </label>
        <button
          disabled={locationId.length === 0 || userId.length === 0}
          style={{
            width: '200px',
            fontSize: 20,
            marginTop: '0.8em',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}
          onClick={handleSubmit}
        >
          Enter
        </button>
      </div>

    </div>
  )
}

export default VisitorEntryView;