import React from 'react';
import { useTheme } from 'styled-components';

const Mouse: React.FC = () => {
    const theme = useTheme();
    return (
        <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4.75 4.75L15.9442 31.6192L19.9183 19.9183L31.6192 15.9442L4.75 4.75Z"
                stroke={theme.color.lightBlue}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M20.5835 20.5834L30.0835 30.0834"
                stroke={theme.color.lightBlue}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default Mouse;
