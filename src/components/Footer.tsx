import Link from 'next/link';

const Footer = () => {
  const FOOTER_DATA = [
    {
      id: 1,
      label: 'facebook',
      link: 'https://www.facebook.com/profile.php?id=100008542208276',
    },
    {
      id: 1,
      label: 'linkedin',
      link: 'https://www.linkedin.com/in/myatmin-aung-830039245/',
    },
    {
      id: 1,
      label: 'github',
      link: 'https://github.com/myatminag',
    },
  ];

  return (
    <div className="flex flex-col items-center border-t border-secondary-200/20 py-16">
      <p className="text-sm text-zinc-400">Developed by Myatmin Aung</p>
    </div>
  );
};

export default Footer;
