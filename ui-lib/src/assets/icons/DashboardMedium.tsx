import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function DashboardMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.63989 20.4001H21.3599V18.5281H4.55989V4.5601H2.63989V20.4001ZM6.79189 16.4401H8.83189V10.8001H6.79189V16.4401ZM10.9679 16.4401H13.0079V5.9761H10.9679V16.4401ZM15.1439 16.4401H17.1839V8.3761H15.1439V16.4401ZM19.3199 16.4401H21.3599V3.6001H19.3199V16.4401Z"
        fill={color}
      />
    </svg>
  );
}

export default DashboardMedium;
