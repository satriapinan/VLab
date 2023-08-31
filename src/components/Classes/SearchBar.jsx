import React from 'react';
import { search } from '../../assets';

const SearchBar = () => {
  return (
    <div className="flex-grow relative">
      <label htmlFor="searchInput" className="sr-only">
        Cari
      </label>
      <input
        id="searchInput"
        className="bg-base text-gray-800 text-poppins rounded py-2 px-4 pe-10 focus:outline-none focus:shadow-outline w-full"
        type="text"
        placeholder="Apa yang ingin kamu pelajari?"
      />
      <button className="absolute right-0 top-0 mt-2 mr-3" type="submit">
        <img src={search} alt="Search" />
      </button>
    </div>
  );
};

export default SearchBar;
