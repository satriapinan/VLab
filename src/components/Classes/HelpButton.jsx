import React, { useState } from 'react';
import { helpButton, helpText } from '../../assets';

const HelpButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      className="fixed bottom-0 right-0 m-4 p-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={helpButton} alt="Help Button" />
      {isHovered && (
        <div className="absolute bottom-10 right-4 w-full flex items-center justify-center">
          <img src={helpText} alt="Hovered Help Text" />
        </div>
      )}
    </button>
  );
};

export default HelpButton;
