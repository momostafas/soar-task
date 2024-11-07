import React from 'react';
import ChipIcon from './ChipIcon';
import chipDark from '../assets/icons/chip-dark.svg'
const Cards = ({ theme = "dark" }) => {
  const isDark = theme === "dark"; 

  return (
      <div className="relative w-full">
        <div
            className={`${
                isDark
                    ? "bg-gradient-to-r from-gray-800 to-gray-900 text-white"
                    : "bg-white text-gray-900 border border-gray-300"
            } p-6 rounded-xl shadow-lg relative w-full overflow-hidden`}
        >
          
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-sm font-medium">Balance</p>
              <p className="text-2xl font-bold">$5,756</p>
            </div>
            <div className="flex items-center">

              <chipDark className="w-10 h-10 text-white"/>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-sm font-medium">CARD HOLDER</p>
              <p className="font-semibold">Eddy Cusuma</p>
            </div>
            <div>
              <p className="text-sm font-medium">VALID THRU</p>
              <p className="font-semibold">12/22</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex-grow">
              <p className="text-2xl font-bold">**** **** **** 1234</p>
            </div>

         
          </div>
        </div>
      </div>
  );
};

export default Cards;
