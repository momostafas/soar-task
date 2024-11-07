import React from 'react';
import { Subject } from 'rxjs';
import { HomeIcon, ChartBarIcon, CogIcon } from '@heroicons/react/outline';

export const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-50 w-64 px-6 py-8 flex flex-col border-r border-gray-200">
    <h2 className="text-2xl font-bold text-blue-900 mb-8">Soar Task</h2>
    <ul className="flex flex-col space-y-4">
      <li className="flex items-center text-gray-700 font-medium py-2 hover:bg-gray-100 rounded-lg cursor-pointer px-4">
        <span>Dashboard</span>
      </li>
      <li className="flex items-center text-gray-500 font-medium py-2 hover:bg-gray-100 rounded-lg cursor-pointer px-4">
        <span>Transactions</span>
      </li>
      <li className="flex items-center text-gray-500 font-medium py-2 hover:bg-gray-100 rounded-lg cursor-pointer px-4">
        <span>Setting</span>
      </li>
    </ul>
  </div>
  );
};

export default Sidebar;

