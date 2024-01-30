import { SVGProps } from 'react';

const IconBgWave = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1440"
      height="200"
      preserveAspectRatio="none"
      viewBox="0 0 1440 200"
      {...props}
    >
      <g fill="none" mask='url("#SvgjsMask1025")'>
        <path
          fill="currentColor"
          d="M0 111c96-9.4 288-52.4 480-47 192 5.4 288 70.4 480 74 192 3.6 384-44.8 480-56v118H0z"
        ></path>
      </g>
      <defs>
        <mask id="SvgjsMask1025">
          <path fill="#fff" d="M0 0H1440V200H0z"></path>
        </mask>
      </defs>
    </svg>
  );
};

export default IconBgWave;
