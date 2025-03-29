import React, { useState } from "react";
// import video from '../../../assets/1.mp4'
// import video2 from '../../../assets/1.mp4'


const Home = () => {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [budget, setBudget] = useState(25000);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ destination, startDate, endDate, budget });
  };

  return (
    <div className="position-relative w-100 vh-100 overflow-hidden">
      {/* Background Video */}
      <video className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover" autoPlay loop muted>
        <source src={'video2'} type="video/mp4" />
      </video>

      {/* Overlay Container */}
      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
        <form onSubmit={handleSubmit} className="bg-white bg-opacity-75 p-4 rounded shadow text-center w-75 mw-400">
          <h2 className="mb-3">Plan Your Trip</h2>

          {/* Destination Input */}
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Enter Destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />

          {/* Date Inputs */}
          <div className="d-flex gap-2 mb-2">
            <input
              type="date"
              className="form-control"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
            <input
              type="date"
              className="form-control"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>

          {/* Budget Slider */}
          <div className="mb-3">
            <label className="form-label">Budget: ₹{budget}</label>
            <input
              type="range"
              className="form-range"
              min="5000"
              max="50000"
              step="1000"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
