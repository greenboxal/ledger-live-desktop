import * as React from "react";
type Props = {
  size?: number | string;
  color?: string;
};

function RewardsMedium({ size = 16, color = "currentColor" }: Props): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.18418 18.3599H18.8162V16.6799H17.2322C19.1522 15.2159 20.2802 12.9599 20.2802 10.4399C20.2802 5.87991 16.5602 2.15991 12.0002 2.15991C7.44018 2.15991 3.72018 5.87991 3.72018 10.4399C3.72018 12.9599 4.84818 15.2159 6.76818 16.6799H5.18418V18.3599ZM1.68018 21.8399H22.3202V14.7599H20.4002V20.0399H3.60018V14.7599H1.68018V21.8399ZM5.64018 10.4399C5.64018 6.93591 8.49618 4.07991 12.0002 4.07991C15.5042 4.07991 18.3602 6.93591 18.3602 10.4399C18.3602 13.5359 16.1282 16.1039 13.2242 16.6799H10.7762C7.87218 16.1039 5.64018 13.5359 5.64018 10.4399Z"
        fill={color}
      />
    </svg>
  );
}

export default RewardsMedium;
