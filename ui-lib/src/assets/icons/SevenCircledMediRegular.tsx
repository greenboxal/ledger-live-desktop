import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function SevenCircledMediRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.064 16.464H12.864C13.104 13.368 14.184 10.92 16.2 8.97601V7.58401H9.48001V8.95201H14.328V9.26401C12.432 11.424 11.376 13.8 11.064 16.464ZM5.76001 21.24H18.24V19.68H5.76001V21.24ZM5.76001 4.32001H18.24V2.76001H5.76001V4.32001Z"
        fill={color}
      />
    </svg>
  );
}

export default SevenCircledMediRegular;
