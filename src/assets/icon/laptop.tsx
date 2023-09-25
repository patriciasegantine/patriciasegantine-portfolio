import React from 'react';
import { IconInterface } from "../../type/icons-types.ts";
import { theme } from "../../theme.ts";

export const Laptop: React.FC<IconInterface> = ({size = '10px', color = theme["color-gray-dark"]}) => {
  
  return (
    <picture>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={size}
        viewBox="0 0 640 512">
        
        <path
          d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z"
          fill={color}
        />
      </svg>
    </picture>
  
  );
};
