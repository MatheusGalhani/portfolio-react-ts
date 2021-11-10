import React from 'react';
import { useTheme } from 'styled-components';

const Linkedin: React.FC = () => {
    const theme = useTheme();
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
                stroke="url(#paint0_linear_114:2)"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6 9H2V21H6V9Z"
                stroke="url(#paint1_linear_114:2)"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                stroke="url(#paint2_linear_114:2)"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_114:2"
                    x1="16"
                    y1="8"
                    x2="16"
                    y2="21"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor={theme.color.lightBlue} />
                    <stop
                        offset="1"
                        stopColor={theme.color.contactBottomIcon}
                    />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_114:2"
                    x1="4"
                    y1="9"
                    x2="4"
                    y2="21"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor={theme.color.lightBlue} />
                    <stop
                        offset="1"
                        stopColor={theme.color.contactBottomIcon}
                    />
                </linearGradient>
                <linearGradient
                    id="paint2_linear_114:2"
                    x1="4"
                    y1="2"
                    x2="4"
                    y2="6"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor={theme.color.lightBlue} />
                    <stop
                        offset="1"
                        stopColor={theme.color.contactBottomIcon}
                    />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default Linkedin;