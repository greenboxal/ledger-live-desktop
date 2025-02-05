import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function PenMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.8479 22.1519L9.0479 20.1839L22.1519 7.0799L16.9199 1.8479L3.8159 14.9519L1.8479 22.1519ZM4.4159 19.5839L5.4239 15.8879L8.1119 18.5759L4.4159 19.5839ZM6.6959 14.6159L14.1119 7.1999L16.7999 9.8879L9.3839 17.3039L6.6959 14.6159ZM15.3839 5.9279L16.9199 4.3919L19.6079 7.0799L18.0719 8.6159L15.3839 5.9279Z"
        fill={color}
      />
    </svg>
  );
}

export default PenMedium;
