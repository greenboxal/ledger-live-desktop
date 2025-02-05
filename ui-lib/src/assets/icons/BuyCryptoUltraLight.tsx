import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function BuyCryptoUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.63993 12H3.45593V6.504H20.8559C20.2559 7.08 19.6799 7.656 19.1039 8.232L17.4239 9.888L17.9759 10.44L22.3199 6.096L17.9759 1.752L17.4239 2.304L19.1039 3.96C19.6559 4.536 20.2559 5.112 20.8319 5.688H2.63993V12ZM1.67993 17.904L6.02393 22.248L6.57593 21.696L4.89593 20.016C4.34393 19.464 3.74393 18.864 3.16793 18.312H21.3599V12H20.5439V17.496H3.16793C3.74393 16.92 4.34393 16.344 4.89593 15.768L6.57593 14.088L6.02393 13.56L1.67993 17.904Z"
        fill={color}
      />
    </svg>
  );
}

export default BuyCryptoUltraLight;
