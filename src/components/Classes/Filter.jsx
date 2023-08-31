import React, { useState } from 'react';
import Sorting from './Sorting';

const FilterButton = ({ filter, active, onClick }) => {
  const handleClick = () => {
    onClick(filter);
  };

  let buttonStyle = 'border-[1px] text-accent font-poppins font-normal';

  if (active) {
    if (filter === 'Semua') {
      buttonStyle += ' border-secondary text-secondary transition ease-in-out duration-100';
    } else if (filter === 'Berlangsung') {
      buttonStyle += ' border-orange text-orange transition ease-in-out duration-100';
    } else if (filter === 'Selesai') {
      buttonStyle += ' border-green text-green transition ease-in-out duration-100';
    }
  } else {
    buttonStyle += ' border-base';
  }

  let circleStyle = '';
  if (filter === 'Berlangsung') {
    circleStyle = 'w-6 h-6 bg-orange rounded-full flex items-center justify-center text-white text-xs';
  } else if (filter === 'Selesai') {
    circleStyle = 'w-6 h-6 bg-green rounded-full flex items-center justify-center text-white text-xs';
  }

  return (
    <button
      className={`px-4 py-2 rounded-full flex gap-1 items-center ${buttonStyle}`}
      onClick={handleClick}
    >
      <span>{filter}</span>
      {filter === 'Berlangsung' && <span className={circleStyle}>1</span>}
      {filter === 'Selesai' && <span className={circleStyle}>2</span>}
    </button>
  );
};

const Filter = () => {
  const [activeFilter, setActiveFilter] = useState('Semua');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="flex flex-row justify-between text-sm">
      <div className="flex">
        <FilterButton
          filter="Semua"
          active={activeFilter === 'Semua'}
          onClick={handleFilterClick}
        />
        <FilterButton
          filter="Berlangsung"
          active={activeFilter === 'Berlangsung'}
          onClick={handleFilterClick}
        />
        <FilterButton
          filter="Selesai"
          active={activeFilter === 'Selesai'}
          onClick={handleFilterClick}
        />
      </div>
      <div>
        <Sorting />
      </div>
    </div>
  );
};

export default Filter;
