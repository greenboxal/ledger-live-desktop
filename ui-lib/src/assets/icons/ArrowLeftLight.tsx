import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ArrowLeftLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.27593 18.624L10.0439 17.856L6.75593 14.592C6.08393 13.92 5.38793 13.248 4.69193 12.576H21.3719V11.424H4.69193C5.38793 10.752 6.08393 10.056 6.75593 9.38398L10.0439 6.11998L9.27593 5.37598L2.62793 12L9.27593 18.624Z"
        fill={color}
      />
    </svg>
  );
}

export default ArrowLeftLight;
