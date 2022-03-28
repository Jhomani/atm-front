import React from 'react';

export const Cash = ({size = '1.5rem', color = '#fff', amount = 10}) => (
  <svg width={size} viewBox="0 0 50 30">
    <path
      d="M47.5 0H2.5C1.11953 0 0 1.11953 0 2.5V27.5C0 28.8805 1.11953 30 2.5 30H47.5C48.8805 30 50 28.8805 50 27.5V2.5C50 1.11953 48.8805 0 47.5 0ZM46.25 21.25C43.4883 21.25 41.25 23.4883 41.25 26.25H8.75C8.75 23.4883 6.51172 21.25 3.75 21.25V8.75C6.51172 8.75 8.75 6.51172 8.75 3.75H41.25C41.25 6.51172 43.4883 8.75 46.25 8.75V21.25Z"
      fill={color}
    />
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize={amount / 100 >= 1 ? 12.5 : 13}
      fill={color}
    >
      {amount}
    </text>
  </svg>
);
