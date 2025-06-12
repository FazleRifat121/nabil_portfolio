import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
const Navbar = () => {
  const links = [
    <>
      <li key={1}>
        <a
          href="https://www.linkedin.com/in/fazle-rifat-660bb2328/"
          target="_blank"
          className="hover:text-cyan-300"
        >
          <FaLinkedin />
        </a>
      </li>
      <li key={2}>
        <a
          href="https://github.com/FazleRifat121"
          target="_blank"
          className="hover:text-cyan-300"
        >
          <FaGithub />
        </a>
      </li>
      <li key={3}>
        <a
          href="https://www.facebook.com/fazle.rifat.5/"
          target="_blank"
          className="hover:text-cyan-300"
        >
          <FaFacebookSquare />
        </a>
      </li>
    </>,
  ];
  return (
    <div className="navbar my-5 ">
      <div className="navbar-start">
        <a href="/" className=" text-4xl hover:text-cyan-300">
          Moneem
        </a>
      </div>

      <div className="navbar-end ">
        <ul className="list-none flex flex-row gap-5 items-center text-2xl">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
