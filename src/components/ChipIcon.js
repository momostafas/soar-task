import React from 'react';

const ChipIcon = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 9v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h6m4 0h6m-3 8h10"
            />
        </svg>
    );
};

export default ChipIcon;