import { SVGProps } from 'react';

const IconMouse = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="42"
      fill="none"
      viewBox="0 0 22 42"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11 1v40m0 0L1 31m10 10l10-10"
      ></path>
    </svg>
  );
};

export default IconMouse;
