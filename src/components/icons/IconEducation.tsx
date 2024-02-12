import { SVGProps } from 'react';

const IconEducation = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g clipPath="url(#clip0_182_85)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M19.5 2.25H6.75a3 3 0 00-3 3V21c0 .414.336.75.75.75H18a.75.75 0 000-1.5H5.25a1.5 1.5 0 011.5-1.5H19.5a.75.75 0 00.75-.75V3a.75.75 0 00-.75-.75zm-.75 15h-12c-.527 0-1.044.138-1.5.402V5.25a1.5 1.5 0 011.5-1.5h12v13.5z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_182_85">
          <path fill="#fff" d="M0 0H24V24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconEducation;
