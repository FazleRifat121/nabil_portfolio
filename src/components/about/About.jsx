import img from "../../assets/WhatsApp Image 2025-06-12 at 1.54.08 AM (1).jpeg";
import img2 from "../../assets/WhatsApp Image 2025-06-12 at 1.54.08 AM.jpeg";
import { motion } from "framer-motion";
import cv from "../../assets/CV of Fazle Rifat.pdf";
import "./style.css";
import "./about.css";
const About = () => {
  return (
    <div className="border-b border-neutral-500 pb-4">
      <h1 className="text-4xl text-center my-20">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            {/* card  */}
            <motion.div
              className="flip-card my-10 lg:my-5"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img
                    src={img2}
                    alt="about"
                    className="rounded-2xl max-w-sm"
                  />
                </div>
                <div className="flip-card-back">
                  <img src={img} alt="about" className="rounded-2xl max-w-sm" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <motion.p
              className="my-2 max-w-xl py-6"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Hello! I’m Fazle Rifat, a passionate frontend web developer with a
              keen curiosity for how websites are built and function. My journey
              into web development began with a fascination for the digital
              world, and I’ve since honed my skills in HTML, CSS, JavaScript,
              and modern frameworks like React. I love creating engaging and
              user-friendly interfaces, and I’ve worked on a variety of
              projects, including portfolios, e-commerce sites, and dynamic
              landing pages. Each project is an opportunity for me to learn and
              grow, and I’m excited to continue exploring the endless
              possibilities in web development.
            </motion.p>
          </div>
          <button className="btn-cv">
            <a href={cv} className="link-cv" download="CV of Fazle Rifat">
              Download CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
