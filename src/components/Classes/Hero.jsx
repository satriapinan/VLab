import React, { useState } from 'react';

const Hero = () => {
  const [selectedTab, setSelectedTab] = useState('Simulasi');
  const [tabPosition, setTabPosition] = useState(0);

  const handleTabClick = (tab, position) => {
    setSelectedTab(tab);
    setTabPosition(position);
  };

  return (
    <div className="flex justify-between items-center font-poppins text-accent font-medium text-lg">
      <div className="pb-6">
        <h1>Kelas Saya</h1>
      </div>
      <div className="relative">
        <div className='flex'>
          <div className='px-4 pb-6'>
            <h1
              className={`cursor-pointer transition ease-in-out duration-100 ${
                selectedTab === 'Simulasi' ? 'text-secondary' : ''
              }`}
              onClick={() => handleTabClick('Simulasi', 0)}
            >
              Simulasi
            </h1>
          </div>
          <div className='px-6 pb-6'>
            <h1
              className={`cursor-pointer transition ease-in-out duration-100 ${
                selectedTab === 'Materi' ? 'text-secondary' : ''
              }`}
              onClick={() => handleTabClick('Materi', 1)}
            >
              Materi
            </h1>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 h-[2px] bg-secondary"
          style={{
            width: '50%',
            transform: `translateX(${tabPosition * 100}%)`,
            transition: 'transform 0.3s ease',
          }}
        />
      </div>
    </div>
  );
};

export default Hero;
