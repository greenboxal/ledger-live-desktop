import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function GraphGrowUltraLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.19197 13.992L7.65597 9.552H14.976L20.064 4.464V7.368V9.288H20.832V3.12H14.688V3.888H16.584H19.488L14.64 8.736H7.31997L3.19197 12.864V13.992ZM3.16797 20.88H4.05597V17.952H3.16797V20.88ZM7.36797 20.88H8.23197V16.056H7.36797V20.88ZM11.568 20.88H12.432V12.96H11.568V20.88ZM15.768 20.88H16.632V15.12H15.768V20.88ZM19.944 20.88H20.808V12H19.944V20.88Z"
        fill={color}
      />
    </svg>
  );
}

export default GraphGrowUltraLight;
