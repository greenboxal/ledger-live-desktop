import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function LockThin({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.87207 21.24H19.1281V9.72001H17.0161V7.77601C17.0161 5.04001 14.7601 2.76001 12.0001 2.76001C9.24007 2.76001 6.98407 5.04001 6.98407 7.77601V9.72001H4.87207V21.24ZM5.35207 20.76V10.2H18.6481V20.76H5.35207ZM7.46407 9.72001V7.77601C7.46407 5.30401 9.50407 3.24001 12.0001 3.24001C14.4961 3.24001 16.5361 5.30401 16.5361 7.77601V9.72001H7.46407Z"
        fill={color}
      />
    </svg>
  );
}

export default LockThin;
