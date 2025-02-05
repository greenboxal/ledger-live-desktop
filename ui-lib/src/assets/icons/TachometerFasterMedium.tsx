import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function TachometerFasterMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.00818 20.4001H19.9682C20.8082 19.5121 21.6002 17.9761 21.9842 16.5601H19.9682C19.7282 17.2321 19.4162 17.9041 19.0322 18.4801H4.96818C4.10418 17.1601 3.60018 15.6001 3.60018 13.9201C3.60018 9.2881 7.36818 5.5201 12.0002 5.5201C15.7202 5.5201 18.8642 7.9201 19.9682 11.2801H21.9842C20.8082 6.8641 16.8002 3.6001 12.0002 3.6001C6.31218 3.6001 1.68018 8.2321 1.68018 13.9201C1.68018 16.3681 2.56818 18.6481 4.00818 20.4001ZM11.0402 13.9201C11.0402 14.4481 11.4722 14.8801 12.0002 14.8801H22.3202V12.9601H12.0002C11.4722 12.9601 11.0402 13.3921 11.0402 13.9201Z"
        fill={color}
      />
    </svg>
  );
}

export default TachometerFasterMedium;
