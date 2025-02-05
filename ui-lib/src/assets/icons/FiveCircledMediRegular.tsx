import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function FiveCircledMediRegular({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 16.704C13.944 16.704 15.264 15.408 15.264 13.632C15.264 11.88 14.016 10.56 12.336 10.56C11.616 10.56 11.016 10.824 10.632 11.232H10.416L10.704 8.92801H14.76V7.58401H9.48001L9.02401 12.744H10.416C10.656 12.168 11.064 11.88 11.952 11.88H12.048C13.2 11.88 13.704 12.336 13.704 13.344V13.872C13.704 14.88 13.224 15.336 12.048 15.336H11.952C10.728 15.336 10.248 14.856 10.224 13.752H8.68801C8.68801 15.432 10.056 16.704 12 16.704ZM5.76001 21.24H18.24V19.68H5.76001V21.24ZM5.76001 4.32001H18.24V2.76001H5.76001V4.32001Z"
        fill={color}
      />
    </svg>
  );
}

export default FiveCircledMediRegular;
