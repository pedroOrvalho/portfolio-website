import ReactTyped from "react-typed";
import { motion } from "framer-motion";

const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export default function About() {
  return (
    <motion.div id="about-me" className="motion_about_container">
      <motion.div variants={stagger} className="aboutInfo_container">
        <motion.h1
          className="aboutInfo_h1"
          initial={{ y: -250, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: 0.8, duration: 0.7 },
            ease: [0.6, 0.01, 0, 0.95],
            duration: 1,
            delay: 0.5,
          }}
        >
          Welcome
        </motion.h1>
        <motion.h4
          className="aboutInfo_h4"
          initial={{ x: "150%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            opacity: { delay: 0.6, duration: 0.8 },
            ease: "easeInOut",
            duration: 0.8,
            delay: 0.5,
          }}
        >
          My name is
        </motion.h4>
        <div className="aboutInfo_h2_container">
          <motion.h2
            className="aboutInfo_h2"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{
              opacity: { delay: 0.8, duration: 0.7, ease: "easeOut" },
              ease: "easeInOut",
              duration: 1,
              delay: 0.5,
            }}
          >
            Pedro
          </motion.h2>
          <motion.h2
            className="aboutInfo_h2_lastName"
            initial={{ x: "200%", opacity: 0 }}
            animate={{ x: "0", opacity: 1 }}
            transition={{
              opacity: { delay: 0.8, duration: 0.8, ease: "easeOut" },
              ease: "easeInOut",
              duration: 1.2,
              delay: 0.4,
            }}
          >
            Orvalho
          </motion.h2>
        </div>
        <motion.h3
          className="aboutInfo_h3"
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { delay: 0.6, duration: 1.2, ease: "easeOut" },
            ease: "easeInOut",
            duration: 1.7,
            delay: 0,
          }}
        >
          And I am a{" "}
          <ReactTyped
            strings={["Writer...", "Designer...", "Developer..."]}
            typeSpeed={100}
            loop
            backSpeed={20}
            cursorChar=">"
            showCursor={true}
          />
        </motion.h3>
      </motion.div>
      <motion.div
        className="aboutText_container"
        initial={{ y: 800, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 0.4, duration: 1, ease: "easeIn" },
          ease: [0.3, 0.1, 0.1, 1],
          duration: 1,
          delay: 0.7,
        }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
          doloremque laudantium, error omnis amet totam tempore placeat itaque
          mollitia a soluta, similique corporis in dolorum. Ullam voluptas
          vitae, necessitatibus sunt optio tempore aut laudantium enim impedit!
          Nulla aspernatur sit molestiae ratione veritatis voluptatum, quae,
          nostrum, magnam eos dolorem maxime illo.
        </p>
      </motion.div>
    </motion.div>
  );
}
