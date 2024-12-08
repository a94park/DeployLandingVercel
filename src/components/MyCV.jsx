import "./MyCV.scss";

function MyCV() {
  return (
    <div className="resume">
      <div className="left-column">
        <div className="name-title">
          <h1>Abraham Park </h1>
          <h1> (박아브라함) </h1>
          <h2>Full-stack Developer</h2>
        </div>
        <div className="profile-pic">
          <img src="/placeholder.jpeg" alt="Profile Picture" />
        </div>
        <div className="contact-info">
          <h2>Contact</h2>
          <p>
            <strong>Location / Relocation:</strong>
            <br />
            Song-pa, South Korea /<br />
            Denver, Colorado
            <br />
            Ft. Lauderdale, FL
          </p>
          <p>
            <strong>Phone number:</strong>
            <br />
            +82 10 6403 8012
          </p>
          <p>
            <strong>Email:</strong>
            <br />
            a.p.00@icloud.com
          </p>
        </div>
        <div className="skills">
          <h2>Skills</h2>
          <ul>
            <li>Full-stack development (React, JavaScript, Python)</li>
            <li>Backend development with Flask & MySQL</li>
            <li>Collaborative app development</li>
            <li>Problem-solving & adaptability</li>
            <li>Classroom management & teaching</li>
            <li>Inventory management</li>
            <li>Team leadership & coordination</li>
          </ul>
        </div>
        <div className="languages">
          <h2>Languages</h2>
          <ul>
            <li>English (native)</li>
            <li>Korean (intermediate)</li>
          </ul>
        </div>
        <div className="hobbies">
          <h2>Links</h2>
          <ul>
            <li>
              My Website:
              <br />
              <a
                href="https://vercel-deploy-landing-react.vercel.app"
                target="_blank"
                rel="noopener noreferrer">
                https://vercel-deploy-landing-react.vercel.app
              </a>
            </li>
            <li>
              LinkedIn:
              <br />
              <a
                href="https://linkedin.com/in/abraham-park-b5b55131b/"
                target="_blank"
                rel="noopener noreferrer">
                https://linkedin.com/in/abraham-park-b5b55131b/
              </a>
            </li>
            <li>
              GitHub:
              <br />
              <a
                href="https://github.com/a94park"
                target="_blank"
                rel="noopener noreferrer">
                https://github.com/a94park
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="right-column">
        <h1>Abraham Park (박아브라함)</h1>

        <h2>Full-stack Developer</h2>

        <section className="profile">
          <h3>Profile</h3>
          <p>
            Motivated and ambitious aspiring full-stack developer with a unique
            background as a Korean-American dual citizen. After a year of
            dedicated self-study in software development, I am eager to
            contribute to a growing team, especially in an environment that
            values diversity and fosters learning. I aim to expand my technical
            expertise while also contributing meaningfully to your company’s
            success.
          </p>
        </section>
        <section className="prog-experience">
          <h3>Programming Experience</h3>
          <h4>Full-stack developer, Wcoding, Seoul, South Korea</h4>
          <p>October 2024 – Present</p>
          <ul>
            <li>
              Co-led a 6-person team from diverse backgrounds (Cameroon, Russia,
              Uzbekistan, Ireland, America, Korea) on a full-stack web app
              project
            </li>
            <li>
              Kept the team progressing consistently, even through challenges
            </li>
            <li>
              Designed the site interface and user experience in React for clear
              navigation
            </li>
            <li>
              Organized the project’s file structure for efficiency and
              maintainability
            </li>
            <li>
              Helped the team understand essential backend setup with MySQL and
              Flask
            </li>
            <li>
              Promoted teamwork and a collaborative, learning-focused
              environment
            </li>
          </ul>
        </section>
        <section className="prof-experience">
          <h3>Professional Experience</h3>
          <h4>Teacher, Milestone Institute, Seoul, South Korea</h4>
          <p>August 2022 – February 2024</p>
          <ul>
            <li>
              Created engaging lesson plans that improved students' English
              skills across levels
            </li>
            <li>
              Built strong student relationships, adapting methods to individual
              learning needs
            </li>
            <li>
              Inspired critical thinking and exploration of literature through
              character analysis
            </li>
            <li>
              Balanced classroom management with a positive, supportive
              environment
            </li>
            <li>
              Provided feedback to build students' confidence and encourage
              growth
            </li>
            <li>
              Collaborated with colleagues to align teaching methods with school
              goals
            </li>
            <li>
              Adapted to teaching challenges, from in-person to online platforms
            </li>
          </ul>
          <h4>
            Various Part-time work, Morton Williams, Pablo’s Coffee Roasting
            Company, Uber, Restaurants, Across 5 states
          </h4>
          <p>September 2013 – December 2020</p>
          <ul>
            <li>
              Managed inventory and restocking in supermarkets, ensuring smooth
              supply chain operations
            </li>
            <li>
              Delivered excellent customer service as a waiter, clerk, and taxi
              driver in high-paced environments
            </li>

            <li>
              Performed physically demanding tasks in factory and construction
              roles, maintaining safety and efficiency
            </li>
            <li>
              Developed strong organizational and time-management skills by
              balancing diverse part-time positions
            </li>
          </ul>
        </section>
        <section className="education">
          <h3>Education</h3>
          <ul>
            <li>
              Full-stack Development Certification, Wcoding, Seoul, South Korea
              <br />
              <p>July 2024 – Current</p>
            </li>
            <li>
              Udemy Online- Advanced Javascript, Data Science and Machine
              Learning, Python Bootcamp
              <br />
              <p>February 2022 – Current</p>
            </li>
            <li>
              CS50 Online- Intro to Computer Science, Harvard University Online
              <br />
              <p>February 2022 – Current</p>
            </li>

            <li>
              University of Maryland UC, Business Administration (3.0 GPA)
              <br />
              <p>July 2013 – March 2014</p>
            </li>

            <li>
              Virginia Commonwealth University, Business Administration and
              Criminology (3.0 GPA)
              <br />
              <p>August 2012 – May 2013</p>
            </li>
            <li>
              Randolph-Macon Academy, College-Prep Military Boarding School (3.5
              GPA)
              <br />
              <p>Class of 2012</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default MyCV;
