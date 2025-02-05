import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function NanoFoldedRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.97998 21.252H18.012C20.196 21.252 22.02 19.428 22.02 17.22C22.02 16.164 21.588 15.18 20.868 14.436L9.20398 2.74805L3.63598 8.29205L8.60398 13.236H1.97998V21.252ZM3.44398 19.788V14.7H18.012C19.404 14.7 20.532 15.828 20.532 17.22C20.532 18.636 19.404 19.788 18.012 19.788H3.44398ZM5.72398 8.29205L9.20398 4.81205L17.604 13.26C17.364 13.236 17.1 13.236 16.836 13.236H10.692L5.72398 8.29205ZM16.476 17.22C16.476 17.964 17.1 18.636 17.892 18.636C18.66 18.636 19.26 17.964 19.26 17.22C19.26 16.452 18.66 15.852 17.892 15.852C17.1 15.852 16.476 16.452 16.476 17.22Z"
        fill={color}
      />
    </svg>
  );
}

export default NanoFoldedRegular;
