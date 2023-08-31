import React from 'react';
import { useNavigate } from 'react-router-dom';
import { tagLine } from '../assets';
import styles from "../style";

const LoginPage = () => {
  const navigate = useNavigate();

  function handleClick(event) {
    navigate('/myclass');
  }

  return (
    <div className="flex">
      <div className={`w-1/2 bg-secondary h-screen ${styles.flexCenter} ${styles.paddingX}`}>
        <img src={tagLine} alt='Tag Line' className='w-3/5 mr-28'/>
      </div>
      <div className="w-1/2 bg-primary h-screen font-poppins flex flex-col justify-center">
        <div className="pb-16 ps-16">
          <h2 className="text-[2.5rem] font-semibold text-dark">Masuk</h2>
          <p className="text-accent">Selamat Datang! Harap masuk ke akun Anda</p>
        </div>
        <div className={`${styles.flexCenter} flex-col`}>
          <form onSubmit={handleClick} className="flex flex-col w-4/5">
            <label htmlFor="email" className="mb-1 text-sm text-accent text">
              Alamat Surel
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="rounded-lg mb-4 p-2 border focus:border-light focus:outline-none focus:ring-0"
              required
            />
            <label htmlFor="password" className="mb-1 text-sm text-accent">
              Kata Sandi
            </label>
            <input
              type="password"
              id="password"
              placeholder="ExamplePassword_123"
              className="rounded-lg mb-8 p-2 border focus:border-light focus:outline-none focus:ring-0"
              required
            />
            <div className="flex items-center justify-between mb-4">
              <label htmlFor="remember" className="text-sm">
                <input type="checkbox" id="remember" className="mr-1 accent-secondary" />
                Ingat saya
              </label>
              <a href="/" className="text-sm">Lupa kata sandi?</a>
            </div>
            <button type="submit" className="bg-secondary text-white rounded-lg py-4 text-xl font-medium">
              Masuk!
            </button>
          </form>
        </div>
        <p className={`${styles.paddingX} text-sm mt-4 text-accent`}>
          Pengguna baru? <a href="/register" className='text-secondary font-semibold'>Daftar!</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
