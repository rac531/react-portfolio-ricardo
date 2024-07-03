import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import { resume } from "../assets/resume.pdf";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="m-8 flex items-center justify-center gap-4 text-2xl"
        >
          <a href="https://www.linkedin.com/in/ricardo-cardenas-a633aa206/">
            <FaLinkedin />
          </a>
          <a href="https://github.com/rac531">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100017660896062">
            <FaFacebook />
          </a>
        </motion.div>
        <div>
          <a href={resume} download>
            <p className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-red-600">
                Resume
            </p>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
