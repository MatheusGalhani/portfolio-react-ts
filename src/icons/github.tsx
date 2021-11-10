import React from 'react';
import { useTheme } from 'styled-components';

const Github: React.FC = () => {
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
                d="M16 21.9999V18.1299C16.0375 17.6531 15.9731 17.1737 15.811 16.7237C15.6489 16.2737 15.3929 15.8634 15.06 15.5199C18.2 15.1699 21.5 13.9799 21.5 8.51994C21.4997 7.12376 20.9627 5.78114 20 4.76994C20.4559 3.54844 20.4236 2.19829 19.91 0.999938C19.91 0.999938 18.73 0.649938 16 2.47994C13.708 1.85876 11.292 1.85876 9 2.47994C6.27 0.649938 5.09 0.999938 5.09 0.999938C4.57638 2.19829 4.54414 3.54844 5 4.76994C4.03013 5.78864 3.49252 7.1434 3.5 8.54994C3.5 13.9699 6.8 15.1599 9.94 15.5499C9.611 15.8899 9.35726 16.2953 9.19531 16.7399C9.03335 17.1844 8.96681 17.658 9 18.1299V21.9999M9 18.9999C4 20.4999 4 16.4999 2 15.9999L9 18.9999Z"
                stroke="url(#paint0_linear_30:373)"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_30:373"
                    x1="11.75"
                    y1="0.973145"
                    x2="11.75"
                    y2="21.9999"
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

export default Github;
