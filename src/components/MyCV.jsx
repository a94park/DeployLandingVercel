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
            Seoul, South Korea /<br />
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
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
            <li>Python</li>
            <li>MySQL</li>
            <li>AWS EC2</li>
            <li>Git</li>
            <li>Flask</li>
            <li>Node.js</li>
            <li>Ubuntu</li>
            <li>Vim</li>
            <li>Docker</li>

            <li>App Development</li>
            <li>Unity</li>

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

        <div className="links">
          <h2>Links</h2>
          <ul>
            <li>
              My Website:
              <br />
              <a
                href="https://www.parkabraham.com/"
                target="_blank"
                rel="noopener noreferrer">
                https://www.parkabraham.com/
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
        <div className="hobbies">
          <h2>Hobbies</h2>
          <ul>
            <li>Leetcode, Codewars</li>
            <li>Exploring latest tech trends</li>
            <li>
              Exploring ways to make my projects more scalable and efficient{" "}
            </li>
          </ul>
        </div>
      </div>
      <div className="right-column">
        <h2>Full-stack Developer</h2>
        <section className="profile">
          <h3>Profile</h3>
          <p>
            I am a natural problem solver with a love for puzzles and logical
            thinking. I value transparency and clear communication, knowing that
            a lack of detail or specificity is often where problems begin. My
            goal is to deliver efficient, well-informed solutions while
            fostering collaboration and trust. While I’d love to stay close to
            my family in Korea, I’m open to relocating to America for the right
            opportunity, as I hold dual citizenship.
          </p>
        </section>
        <section className="prog-experience">
          <h3>Programming Experience</h3>
          <h4>"Career Connect"</h4>

          <ul>
            <li>Job-seeking platform connecting job seekers with companies.</li>
            <li>Helped the team understand essential backend setup</li>
            <li>
              Implemented a dynamic navigation bar tailored to specific user
              profiles.
            </li>
            <li>
              Built and designed the notification system for enhanced user
              engagement.
            </li>

            <li>Created routes querying the database</li>
            <li>Enhanced security with JWT's</li>
            <li>
              Reviewed and approved code for requests and pull requests,
              ensuring organization, quality, and adherence to project
              standards.
            </li>
            <li>Handled deployment and server configuations.</li>
          </ul>
          <h4>"My Landing Page"</h4>

          <ul>
            <li>
              Designed, created, and deployed my own full-stack landing page.
            </li>
            <li>
              Built to allow visitors to demo the apps I create and give access
              to the code.
            </li>
            <li>
              Features my chatbot that can answer questions about me or my
              projects.
            </li>
            <li>
              Features a resume editor and downloader so I can edit my resume
              easily and have potential employers or recruiters download it.
            </li>
            <li>Integrated a Unity game I created.</li>
          </ul>
          <h4>"Python Sentence-Transformer Chatbot"</h4>

          <ul>
            <li>
              Virtual assistant chatbot for interviews using Python's
              Huggingface sentence transformers.
            </li>
            <li>
              Reusable for any personal or professional site with minimal set
              up.
            </li>
            <li>
              Answers questions based on the information it was trained on.
            </li>
            <li>
              Explored the wide variety of projects and models on Huggingface.
            </li>
            <li>
              Learned about preprocessing, fine-tuning, vector representations,
              cosine similarity
            </li>
          </ul>
          <h4>"Flappy Bird Remake"</h4>

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
              University of Maryland UC, Business Administration (3.0 GPA) July
              2013 – March 2014
            </li>

            <li>
              Virginia Commonwealth University, Criminal Justice (3.0 GPA)
              August 2012 – May 2013
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
