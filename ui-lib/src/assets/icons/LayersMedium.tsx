import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function LayersMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0002 12.3839L22.3202 7.48789L12.0002 2.63989L1.68018 7.48789L12.0002 12.3839ZM1.68018 16.4879L12.0002 21.3599L22.3202 16.4879L20.1602 15.4559L12.0002 19.2959L3.84018 15.4559L1.68018 16.4879ZM1.68018 11.9999L12.0002 16.8959L22.3202 11.9999L20.1602 10.9679L12.0002 14.8079L3.84018 10.9679L1.68018 11.9999ZM6.00018 7.48789L12.0002 4.67989L18.0002 7.48789L12.0002 10.3439L6.00018 7.48789Z"
        fill={color}
      />
    </svg>
  );
}

export default LayersMedium;
