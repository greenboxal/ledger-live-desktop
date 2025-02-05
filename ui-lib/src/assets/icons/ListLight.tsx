import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function ListLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.08001 7.08002H21.24V5.88002H7.08001V7.08002ZM2.76001 18.48H4.68001V16.56H2.76001V18.48ZM2.76001 12.96H4.68001V11.04H2.76001V12.96ZM2.76001 7.44002H4.68001V5.52002H2.76001V7.44002ZM7.08001 18.12H21.24V16.92H7.08001V18.12ZM7.08001 12.6H21.24V11.4H7.08001V12.6Z"
        fill={color}
      />
    </svg>
  );
}

export default ListLight;
