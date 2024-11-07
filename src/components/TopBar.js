import React from 'react';
import { SearchIcon, BellIcon, UserCircleIcon } from '@heroicons/react/outline';

const TopBar = () => {
  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-md">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold text-gray-800">Overview</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for something"
            className="pl-10 pr-4 py-2 rounded-full bg-gray-100 border border-gray-300"
          />
          {/* <SearchIcon className="absolute left-3 top-2 h-5 w-5 text-gray-500" /> */}
        </div>
        {/* <BellIcon className="h-6 w-6 text-gray-500" />
        <UserCircleIcon className="h-8 w-8 text-gray-500" /> */}
      </div>
    </div>
  );
};

export default TopBar;
