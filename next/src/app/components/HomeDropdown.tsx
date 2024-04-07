"use client";
import React, { useState } from 'react';

const HomeDropdown: React.FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState('Group 1');

  const groups = ['Group 1', 'Group 2', 'Group 3'];

  const handleGroupSelect = (group: string) => {
    setSelectedGroup(group);
    setDropdownVisible(false);
  };

  return (
    <>
      <div className="w-screen" style={{ position: 'relative' }}>
      <button
          id="dropdownDefaultButton"
          onClick={() => setDropdownVisible(!dropdownVisible)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
          type="button"
        >
    {selectedGroup}
    <svg
      className="w-2.5 h-2.5 ms-3"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 6"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 1 4 4 4-4"
      />
    </svg>
  </button>

  {dropdownVisible && (
          <div className="absolute left-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="dropdownDefaultButton">
              {groups.map((group, index) => (
                <button
                  key={index}
                  onClick={() => handleGroupSelect(group)}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  role="menuitem"
                >
                  {group}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HomeDropdown;