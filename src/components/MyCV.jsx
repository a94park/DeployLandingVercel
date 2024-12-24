import "./MyCV.scss";

function MyCV() {
  return (
    <div className="resume">
      <div className="left-column">
        <div className="name-title">
          <h1>
            <u>Abraham Park</u>
          </h1>
          <h2>Full-stack Developer</h2>
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
            <li>Frontend development with React</li>
            <li>Backend development with Python & MySQL</li>
            <li>Database Management with MySQL</li>
            <li>Hosting Virtual Private Servers with AWS EC2</li>
            <li>Collaborative app development</li>
            <li>Version Control with Git</li>
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
                href="https://abrahampark.vercel.app/"
                target="_blank"
                rel="noopener noreferrer">
                https://abrahampark.vercel.app/
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
        <h2>Full-stack Developer</h2>
        <section className="profile">
          <h3>Profile</h3>
          <p>
            Full-stack developer with a background as a Korean-American dual
            citizen. I began my journey with online courses to build a
            foundation in software development. I then completed a 4-month
            intensive full-stack bootcamp, increasing my skills in both
            front-end and back-end technologies. Since graduation, I’ve focused
            on furthering my knowledge through self-study and hands-on projects.
            I’m eager to contribute to a growing team in an environment that
            fosters learning, while expanding my technical skills and adding
            value to your company’s success.
          </p>
        </section>
        <section className="prog-experience">
          <h3>Programming Experience</h3>
          <h4>Full-stack developer, Wcoding, Seoul, South Korea</h4>
          <p>"Career Connect" October 2024 – Present</p>
          <ul>
            <li>
              Co-led a 6-person team of all different nationalities on a
              full-stack web app project that allowed jobseekers find employment
            </li>
            <li>
              Held daily stand-ups to keep the team progressing consistently
            </li>
            <li>
              Developed the site interface, optimized user experience, and
              implemented routing using React.
            </li>
            <li>
              Implemented a dynamic Navigation Bar tailored to specific user
              profiles using React.
            </li>
            <li>
              Built and designed a React-based Jobseeker Notification system for
              enhanced user engagement.
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
              Created Flask routes querying the database with python securely
              using JWTs
            </li>
            <li>
              Reviewed and approved code for merge requests and pull requests on
              GitHub, ensuring quality and adherence to project standards.
            </li>
            <li>
              Refactored code for deployment with AWS EC2 instances using Nginx
              and Gunicorn
            </li>
            <li>
              Refactoring, removing redundant code for scalibility, management,
              security, and improved user experience
            </li>
          </ul>
          <h4>Frontend React+Vite Developement</h4>
          <p>"My Landing Page" October 2024 – Present</p>
          <ul>
            <li>Created and deployed my own landing page</li>
            <li>
              Practice using modals, scrollable carousels, html-to-pdf
              converters
            </li>
            <li>
              Showcase my ability to use pre-written code (interactive
              background) to merge with my own while maintaining all
              functionality
            </li>
            <li>Practice styling with SCSS and creating responsive pages</li>
            <li>
              Designed with user experience in mind, ensuring that visitors can
              intuitively navigate the site and easily find the information they
              need.
            </li>
          </ul>
          <h4>Unity + C# Developement</h4>
          <p>"Flappy Bird Remake" December 2024</p>
          <ul>
            <li>Familiarized myself with basic Unity and C#</li>
            <li>
              Implemented the Start Screen logic so the game session knows when
              to begin
            </li>
            <li>Added an extra point system the main game does not have</li>
            <li>
              Adjusted the speed to make the game more challenging and enjoyable
            </li>
          </ul>
        </section>
        <section className="prof-experience">
          <h3>Professional Experience</h3>
          <h4>Teacher, Milestone Institute (Grades 1-6), Seoul, South Korea</h4>
          <p>August 2022 – February 2024</p>
          <ul>
            <li>
              Created lessons that improved students' English skills across all
              levels
            </li>

            <li>
              Prepared detailed reports for 30 students twice a semester,
              highlighting areas of improvement and progress.
            </li>
            <li>
              Advanced 10% of my students to higher level classes while the
              average was 5%
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
            </li>
            <li>
              Udemy Online - Advanced Javascript, Data Science and Machine
              Learning, Python Bootcamp
            </li>
            <li>
              CS50 Online - Intro to Computer Science, Harvard University Online
            </li>

            <li>
              University of Maryland UC, Business Administration (3.0 GPA)July
              2013 – March 2014
            </li>

            <li>
              Virginia Commonwealth University, Business Administration and
              Criminology (3.0 GPA) August 2012 – May 2013
            </li>
            <li>
              Randolph-Macon Academy, College-Prep Military Boarding School (3.5
              GPA) Class of 2012
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default MyCV;
