import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function FiveCircledInitLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.236 16.704C15.156 16.704 16.452 15.384 16.452 13.608C16.452 11.856 15.204 10.536 13.476 10.536C12.684 10.536 12.036 10.848 11.604 11.376H11.436L11.772 8.64001H15.924V7.584H10.812L10.332 12.744H11.412C11.676 12 12.228 11.592 13.212 11.592H13.308C14.58 11.592 15.252 12.216 15.252 13.416V13.776C15.252 15 14.628 15.624 13.284 15.624H13.188C11.82 15.624 11.22 14.952 11.196 13.752H9.99597C9.99597 15.408 11.316 16.704 13.236 16.704ZM4.11597 12C4.11597 17.088 8.14797 21.12 13.236 21.12H19.884V19.92H13.236C8.79597 19.92 5.31597 16.44 5.31597 12C5.31597 7.68001 8.79597 4.08 13.236 4.08H19.884V2.88H13.236C8.12397 2.88 4.11597 7.032 4.11597 12Z"
        fill={color}
      />
    </svg>
  );
}

export default FiveCircledInitLight;
