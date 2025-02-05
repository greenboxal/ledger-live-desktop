import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function BarChartUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5839 20.88H21.1199V3.12H16.5839V20.88ZM2.87988 20.88H7.41588V7.368H2.87988V20.88ZM3.67188 20.088V8.136H6.64788V20.088H3.67188ZM9.71988 20.88H14.2799V10.824H9.71988V20.88ZM10.5119 20.088V11.592H13.5119V20.088H10.5119ZM17.3759 20.088V3.888H20.3519V20.088H17.3759Z"
        fill={color}
      />
    </svg>
  );
}

export default BarChartUltraLight;
