import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/RostyslavSokalskyi" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/rostyslav-sokalskyi-54132025a/",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/rostyslavsokalskyi/",
  },
  {
    icon: <SiGmail />,
    path: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
  },
];

export default function Social({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
