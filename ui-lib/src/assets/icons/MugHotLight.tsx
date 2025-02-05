import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function MugHotLight({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.064 20.88H11.016C12.624 20.88 14.016 20.28 15 18.984C15.144 18.792 15.288 18.6 15.408 18.384H16.128C18.912 18.384 21 16.536 21 13.968C21 11.328 18.912 9.48 16.128 9.48H3V15C3 16.824 3.336 18.024 4.104 18.984C5.112 20.28 6.456 20.88 8.064 20.88ZM4.272 15.648V10.608H14.832V15.648C14.832 18.216 13.728 19.68 11.136 19.68H7.968C5.424 19.68 4.272 18.264 4.272 15.648ZM6.768 7.92H8.04C7.968 6.816 8.568 6.312 9.96 6.144L11.688 5.928C13.488 5.712 14.64 4.776 14.52 3.12H13.272C13.32 4.224 12.696 4.704 11.328 4.872L9.6 5.088C7.8 5.304 6.648 6.24 6.768 7.92ZM15.84 17.232C16.008 16.632 16.08 15.888 16.08 15V10.632C18.528 10.632 19.752 11.592 19.752 13.656V14.232C19.752 16.224 18.552 17.232 16.2 17.232H15.84Z"
        fill={color}
      />
    </svg>
  );
}

export default MugHotLight;
