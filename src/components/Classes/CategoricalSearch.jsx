import React, { useState, useEffect, useRef } from 'react';
import { categorical } from '../../constants';

const CategoricalSearch = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track dropdown open/close
  const dropdownRef = useRef(null); // Reference to the dropdown element

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Function to toggle dropdown open/close
  };

  const handleClickOutside = (event) => {
    // Event handler to handle clicks outside the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false); // Close the dropdown if clicked outside
    }
  };

  const handleButtonClick = () => {
    setIsOpen((prevState) => !prevState); // Toggle dropdown open/close on button click
  };

  useEffect(() => {
    // Effect to add and remove click event listener on mount/unmount
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        className={`inline-flex justify-center w-full rounded-md px-4 py-2 font-poppins font-normal transition ease-in-out duration-100 ${
          isOpen ? 'focus:text-dark' : 'text-accent'
        }`}
        id="dropdown-menu-button"
        onClick={handleButtonClick}
      >
        Kategori
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
        <div className="origin-top absolute left-1/2 transform -translate-x-1/2 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-menu-button">
            {categorical.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="block px-4 py-2 text-sm font-poppins text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoricalSearch;
