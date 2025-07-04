import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ranges = [
  "200-500",
  "500-750",
  "750-1000",
  "1000-1500",
  "1500-above"
];

const PriceLabel = () => {
  const [selectedRange, setSelectedRange] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleLabelClick = (range) => {
    setSelectedRange(range);
   
    setShowInput(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Range: ${selectedRange}, Input: ${inputValue}`);
    
  };

  return (
    <div className="container mt-4">
      <Link to="/" className="btn btn-primary mb-3 text-white text-decoration-none">
        Home
      </Link>

      <form onSubmit={handleSubmit}>
        <dl>
          {ranges.map((range, idx) => (
            <label
              key={idx}
              className="m-2 d-block"
              onClick={() => handleLabelClick(range)}
              style={{ cursor: 'pointer' }}
            >
              {range}
            </label>
          ))}
        </dl>

        
          <div className='nav'>
            <input
              type="text"
              className="form-control my-2 w-50"
              placeholder={`${selectedRange}`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="btn btn-success" type="submit">
              Go
            </button>
          </div>
    
      </form>
    </div>
  );
};

export default PriceLabel;
