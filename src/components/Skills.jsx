import { motion } from "framer-motion";

//worldvectorlogo
import htmllogo from "../assets/html-1.svg";
import csslogo from "../assets/css-3.svg";
import jslogo from "../assets/logo-javascript.svg";
import pythonlogo from "../assets/python-5.svg";
import reactlogo from "../assets/react-2.svg";

import njslogo from "../assets/nodejs-1.svg";
import sasslogo from "../assets/sass-1.svg";
import flasklogo from "../assets/flask.svg";
import jwtlogo from "../assets/jwt-3.svg";
import mysqllogo from "../assets/mysql-3.svg";

function Skills() {
  return (
    <div className="skills-container">
      <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
        <img src={csslogo} alt="CSS" />
        {/* <p>CSS</p> */}
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
        <img src={htmllogo} alt="HTML" />
        {/* <p>HTML</p> */}
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
        <img src={jslogo} alt=" JavaScript" />
        {/* <p>JavaScript</p> */}
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
        <img src={pythonlogo} alt="Python" />
        {/* <p>Python</p> */}
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
        <img src={reactlogo} alt="React" />
        {/* <p> React</p> */}
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
        <img src={njslogo} alt="Node.js" />
        {/* <p> Node.js</p> */}
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
        <img src={sasslogo} alt="SASS" />
        {/* <p>SASS</p> */}
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
        <img src={flasklogo} alt="Flask" />
        {/* <p>Flask</p> */}
      </motion.div>

      <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
        <img src={jwtlogo} alt="JWT" />
        {/* <p>JWT</p> */}
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} className="skill-card">
        <img src={mysqllogo} alt="MySQL" />
        {/* <p>MySQL</p> */}
      </motion.div>
    </div>
  );
}

export default Skills;
