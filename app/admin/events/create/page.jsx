"use client";
import React, { useState } from 'react';
const EventCreatePage = () => {
  const [eventName, setEventName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [posterImage, setPosterImage] = useState('');

  const handleEventNameChange = (e) => {
    setEventName(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handlePosterImageChange = (e) => {
    setPosterImage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <main>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label style={{ marginBottom: '10px' }}>
          Event Name:
          <input type="text" value={eventName} onChange={handleEventNameChange} style={{ marginLeft: '10px' }} />
        </label>
        <label style={{ marginBottom: '10px' }}>
          Event Start Date:
          <input type="date" value={startDate} onChange={handleStartDateChange} style={{ marginLeft: '10px' }} />
        </label>
        <label style={{ marginBottom: '10px' }}>
          Event End Date:
          <input type="date" value={endDate} onChange={handleEndDateChange} style={{ marginLeft: '10px' }} />
        </label>
        <label style={{ marginBottom: '10px' }}>
          Event Poster Image:
          <input type="file" accept="image/*" onChange={handlePosterImageChange} style={{ marginLeft: '10px' }} />
        </label>
        <button type="submit" style={{ marginTop: '10px' }}>Create Event</button>
      </form>
    </main>
  );
};

export default EventCreatePage;