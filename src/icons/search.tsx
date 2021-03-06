import React from 'react';
import { useTheme } from 'styled-components';

const Search: React.FC = () => {
    const theme = useTheme();
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            fill="none"
            viewBox="0 0 38 38"
        >
            <path
                stroke={theme.color.lightBlue}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.417 30.083c6.995 0 12.666-5.67 12.666-12.666S24.413 4.75 17.417 4.75 4.75 10.421 4.75 17.417c0 6.995 5.671 12.666 12.667 12.666zM33.25 33.25l-6.887-6.887"
            ></path>
        </svg>
    );
};

export default Search;
