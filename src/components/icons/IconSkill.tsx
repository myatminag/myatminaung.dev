import { SVGProps } from 'react';

const IconSkill = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      fill="none"
      viewBox="0 0 24 25"
      {...props}
    >
      <g clipPath="url(#clip0_182_105)">
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M12 2.75c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75c-.006-5.382-4.368-9.744-9.75-9.75zm.75 1.535a8.1 8.1 0 011.5.28v15.873c-.49.14-.992.235-1.5.281V4.285zm3 .868a8.235 8.235 0 011.5.988v12.718a8.236 8.236 0 01-1.5.988V5.153zm-12 7.347a8.26 8.26 0 017.5-8.215v16.43a8.26 8.26 0 01-7.5-8.215zm15 4.738V7.762c2 2.842 2 6.634 0 9.476z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_182_105">
          <path
            fill="#fff"
            d="M0 0H24V24H0z"
            transform="translate(0 .5)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default IconSkill;
