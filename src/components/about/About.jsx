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
                  <img src={img} alt="about" className="rounded-2xl max-w-sm" />
                </div>
                <div className="flip-card-back">
                  <img
                    src={img2}
                    alt="about"
                    className="rounded-2xl max-w-lg"
                  />
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
              Hello! I’m MONEEM, a passionate and highly skilled Android App
              Developer with expertise in Kotlin, Jetpack Compose, and
              industry-level architecture. My journey into mobile development
              began with a curiosity for how apps work, and has evolved into
              full-stack mobile app development — building clean, scalable, and
              production-ready Android applications.
              <br />
              I specialize in:
              <br /> <br /> ✅ Jetpack Compose: Custom Composables, Slot APIs,
              Animations, Paging 3, State Management, MVVM & Clean Architecture.
              <br /> <br />
              ✅ Backend Integration: Firebase (Realtime DB, Firestore, Auth,
              FCM), REST APIs with Retrofit, complete API CRUD operations.
              <br /> <br />
              ✅ Storage Solutions: Room Database, DataStore Preferences &
              Proto, SQLDelight (KMP).
              <br /> <br />
              ✅ Modern Architecture: MVVM, Clean Architecture, Repository
              Pattern, Use Cases, Dependency Injection (Hilt/Dagger),
              Modularization.
              <br /> <br />
              ✅ Asynchronous Programming: Kotlin Coroutines, Flow, StateFlow,
              LiveData.
              <br /> <br />
              ✅ Advanced Android Components: CameraX, Media3, Notifications,
              Permissions, Google Maps, Multimedia Storage.
              <br /> <br />
              ✅ Multiplatform Development: Kotlin Multiplatform (KMP), Compose
              Multiplatform (Desktop, Mobile, Web).
              <br /> <br />✅ Testing: Jetpack Compose UI Testing, Unit Testing,
              Integration Testing. Every project I undertake is an opportunity
              to refine my skills, solve complex problems, and deliver smooth,
              performant, and user-friendly applications. I’m committed to
              mastering the latest technologies and industry best practices to
              bring innovative ideas to life exploring the endless possibilities
              in web development.
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
