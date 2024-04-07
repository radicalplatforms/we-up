import React, { useState } from 'react';

const GroupDropdown: React.FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const groups = ['Asian Sensations', 'Group 2', 'Group 3']; // Add your groups here

  return (
    <div style={{ position: 'relative' }}>
      <button
        id="dropdownDefaultButton"
        onClick={() => setDropdownVisible(!dropdownVisible)}
        className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Asian Sensations
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          {/* SVG content */}
        </svg>
      </button>

      {dropdownVisible && (
        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="dropdownDefaultButton">
            {groups.map((group, index) => (
              <a
                key={index}
                href="#" // Replace with your link or onClick handler
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                {group}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GroupDropdown;