import Link from "next/link";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const FOOTER_DATA = [
    {
      id: 1,
      label: "facebook",
      link: "https://www.facebook.com/profile.php?id=100008542208276",
      icon: <FaFacebook fontSize="22px" color="#FFFFFF" />,
    },
    {
      id: 1,
      label: "linkedin",
      link: "https://www.linkedin.com/in/myatmin-aung-830039245/",
      icon: <FaLinkedin fontSize="22px" color="#FFFFFF" />,
    },
    {
      id: 1,
      label: "github",
      link: "https://github.com/myatminag",
      icon: <FaGithub fontSize="22px" color="#FFFFFF" />,
    },
  ];

  return (
    <div className="flex flex-col items-center pb-8">
      <div className="flex items-center gap-x-8 mb-6">
        {FOOTER_DATA.map((data) => (
          <Link key={data.id} aria-label={data.label} href={data.link}>
            {data.icon}
          </Link>
        ))}
      </div>
      <p className="text-zinc-400 text-sm">Developed by Myatmin Aung</p>
    </div>
  );
};

export default Footer;
