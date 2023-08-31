import React, { useState, useEffect, useRef } from 'react';
import { sorting } from '../../constants';

const Sorting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSorting, setSelectedSorting] = useState(sorting[0]);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleButtonClick = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleSortingClick = sortingOption => {
    setSelectedSorting(sortingOption);
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        className="inline-flex justify-center w-full rounded-md px-4 py-2 font-poppins text-sm text-accent"
        id="dropdown-menu-button"
        onClick={handleButtonClick}
      >
        Urut: <span className="font-medium ms-1">{selectedSorting.title}</span>
        <svg
          className={`-mr-1 ml-2 h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10.293 14.95a1 1 0 01-1.414 0l-4.95-4.95a1 1 0 011.414-1.414L10 12.586l4.243-4.243a1 1 0 111.414 1.414l-4.95 4.95a1 1 0 01-1.414 0z"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="origin-top absolute left-1/2 transform -translate-x-1/2 transform mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-menu-button">
            {sorting.map(sortingOption => (
              <a
                key={sortingOption.id}
                href={`#${sortingOption.id}`}
                className={`block px-4 py-2 text-sm font-poppins ${sortingOption === selectedSorting ? 'font-medium' : ''} text-gray-700 hover:bg-gray-100 hover:text-gray-900`}
                role="menuitem"
                onClick={() => handleSortingClick(sortingOption)}
              >
                {sortingOption.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sorting;
