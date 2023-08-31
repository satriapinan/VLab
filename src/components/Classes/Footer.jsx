import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 h-10">
      <div className="text-accent text-sm">
        &copy; {new Date().getFullYear()}{' '}
        <a href="https://vlab.com" className="font-bold mx-1">
          Vlab.com
        </a>
        All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
