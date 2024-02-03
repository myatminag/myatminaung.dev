import { SVGProps } from 'react';

const IconExplore = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="none"
      viewBox="0 0 25 25"
      {...props}
    >
      <g fill="currentColor" clipPath="url(#clip0_176_2)">
        <path d="M12.5 3.125A9.375 9.375 0 113.125 12.5 9.427 9.427 0 0112.5 3.125zm0-2.083A11.458 11.458 0 1023.958 12.5 11.406 11.406 0 0012.5 1.042z"></path>
        <path d="M17.344 6.927l-6.927 3.49-3.49 6.927a.573.573 0 00.73.729l6.926-3.49 3.49-6.927a.573.573 0 00-.73-.729zM12.5 13.542a1.041 1.041 0 110-2.083 1.041 1.041 0 010 2.083z"></path>
      </g>
      <defs>
        <clipPath id="clip0_176_2">
          <path fill="#fff" d="M0 0H25V25H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconExplore;
