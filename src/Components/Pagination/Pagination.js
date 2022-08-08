import React from 'react';
import './Pages.css'

const Pagination = ({ totalPages, handleClick }) => {
  const pages = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className='page-container'>
      {pages.map((num) => (
        <button className='page-btn' key={num} onClick={() => handleClick(num)}>
          {num}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
