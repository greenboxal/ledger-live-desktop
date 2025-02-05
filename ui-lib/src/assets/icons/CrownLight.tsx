import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function CrownLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.87988 16.38H21.1199V4.90801L15.8159 8.94001L11.9999 4.14001L8.18388 8.94001L2.87988 4.90801V16.38ZM2.87988 19.86H21.1199V18.708H2.87988V19.86ZM4.05588 15.228V7.26002L8.37588 10.548L11.9999 6.01201L15.6239 10.548L19.9439 7.26002V15.228H4.05588Z"
        fill={color}
      />
    </svg>
  );
}

export default CrownLight;
