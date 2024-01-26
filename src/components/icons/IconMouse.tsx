import { SVGProps } from 'react';

const IconMouse = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="81"
      fill="none"
      viewBox="0 0 36 20"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M21.518 63.781h-7.036C8.167 63.781 3 58.615 3 52.3V28.042C3 21.727 8.167 16.56 14.482 16.56h7.036C27.833 16.56 33 21.727 33 28.042V52.3c0 6.315-5.167 11.481-11.482 11.481z"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M17.792 39.843h-.213A2.587 2.587 0 0115 37.263V29.58C15 28.161 16.16 27 17.58 27h.212c1.419 0 2.58 1.16 2.58 2.58v7.684c0 1.418-1.161 2.579-2.58 2.579zM24.698 70.79l-6.629 6.629M11.386 70.79l6.63 6.629M11.386 9.629L18.017 3M24.698 9.629L18.069 3"
      ></path>
    </svg>
  );
};

export default IconMouse;
