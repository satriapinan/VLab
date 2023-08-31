import React from 'react';
import { logo_white } from '../assets';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  function handleClick(event) {
    const buttonClicked = event.target.name;
    if (buttonClicked === 'masuk') {
      navigate('/login');
    } else if (buttonClicked === 'daftar') {
      navigate('/register');
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-secondary">
      <img src={logo_white} alt="Vlab Logo" className="w-40 h-auto mb-2" />
      <div className="flex gap-1">
        <button
          type="button"
          name="masuk"
          onClick={handleClick}
          className="border-2 border-white text-white px-4 py-1 rounded-lg font-poppins
          hover:bg-white hover:text-secondary transition-colors duration-100"
        >
          Masuk
        </button>
        <button
          type="button"
          name="daftar"
          onClick={handleClick}
          className="border-2 border-white text-white px-4 py-1 rounded-lg font-poppins
          hover:bg-white hover:text-secondary transition-colors duration-100"
        >
          Daftar
        </button>
      </div>
    </div>
  );
}

export default WelcomePage;
