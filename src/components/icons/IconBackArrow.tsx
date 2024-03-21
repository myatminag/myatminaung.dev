import { SVGProps } from 'react';

const IconBackArrow = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M20.25 12H3.75M10.5 5.25L3.75 12l6.75 6.75"
      ></path>
    </svg>
  );
};

export default IconBackArrow;
