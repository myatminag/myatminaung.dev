import { SVGProps } from 'react';

const IconMail = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="20"
      fill="none"
      viewBox="0 0 25 20"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M0 20h25V0H0v20zM1.47 2.052v-.514h22.06v.514L12.5 12.058 1.47 2.052zM23.53 4.09v12.948l-4.573-5.978-1.15.96 4.927 6.443H2.266l4.927-6.444-1.15-.96-4.572 5.979V4.089L12.5 14.095 23.53 4.09z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default IconMail;
