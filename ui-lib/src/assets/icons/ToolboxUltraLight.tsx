import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ToolboxUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 19.86H21V10.98L18.6 8.58002H16.824V5.91601C16.824 4.90801 16.056 4.14001 15.072 4.14001H8.928C7.944 4.14001 7.176 4.90801 7.176 5.91601V8.58002H5.4L3 10.98V19.86ZM3.84 19.044V14.988H8.112V16.596H8.928V14.988H15.072V16.596H15.888V14.988H20.184V19.044H3.84ZM3.84 14.172V11.316L5.736 9.39602H18.264L20.184 11.316V14.172H15.888V12.516H15.072V14.172H8.928V12.516H8.112V14.172H3.84ZM7.992 8.58002V5.94001C7.992 5.31601 8.352 4.95601 8.952 4.95601H15.048C15.648 4.95601 16.008 5.31601 16.008 5.94001V8.58002H7.992Z"
        fill={color}
      />
    </svg>
  );
}

export default ToolboxUltraLight;
