import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function CopyUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.16 15.24H21V3L8.76 3.024V6.84H9.6V3.84L20.16 3.816V14.424H17.16V15.24ZM3 21H15.24V8.76H3V21ZM3.84 20.184V9.576H14.4V20.184H3.84Z"
        fill={color}
      />
    </svg>
  );
}

export default CopyUltraLight;
