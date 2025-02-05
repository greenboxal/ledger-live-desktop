import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function FourCircledMediMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.904 12.4079V13.1039H9.67201L11.928 9.69589H11.952C11.928 10.4879 11.904 11.4959 11.904 12.4079ZM5.76001 21.3599H18.24V19.4399H5.76001V21.3599ZM5.76001 4.55989H18.24V2.63989H5.76001V4.55989ZM7.89601 14.6639H11.904V16.4639H13.704V14.6639H15.072V13.1039H13.704V7.58389H11.688L7.89601 13.2959V14.6639Z"
        fill={color}
      />
    </svg>
  );
}

export default FourCircledMediMedium;
