import "./Timeline.css";

const Timeline = () => {
  return (
    <div className="timeline-container">
      <div className="event">
        <div className="event-date">2024 - Present</div>
        <h2>ParTech</h2>
        <div className="timeline-content">
          <p>
            <strong>Associate Automation Engineer</strong>
          </p>
          <p>
            • Develop and maintain automation test scripts using C#, Selenium, JavaScript, PowerShell, and Batch scripting, ensuring
              quality and stability of Point-of-Sale (POS) applications in a .NET environment.
          </p>
          <p>
            • Perform API and web testing using Postman and JSON payloads; support CI/CD pipelines with Jenkins and AWS, and
              manage version control with Git and GitHub.
          </p>
          <p>
            • Log and track issues in Jira, author technical documentation in Confluence, and collaborate with Agile Scrum teams to
              execute regression and functional testing.
          </p>
        </div>
      </div>
      <div className="event">
        <div className="event-date">2022 - 2023</div>
        <h2>Starlight Investments</h2>
        <div className="timeline-content">
          <p>
            <strong>BAS & Energy Analyst</strong>
          </p>
          <p>
             • Wrote macros and automation scripts in Excel VBA to streamline utility benchmarking and energy savings analysis.
          </p>
          <p>
             • Analyzed IoT sensor and utility data to assess energy performance and support sustainability certifications
          </p>
        </div>
      </div>

      <div className="event">
        <div className="event-date">2020 - 2022</div>
        <h2>Régulvar</h2>
        <div className="timeline-content">
          <p>
            <strong>BAS Designer & Programmer</strong>
          </p>
          <p>
             • Designed and programmed control logic for HVAC, lighting, and security systems for commercial and educational
              facilities using Delta PLC controllers for 40+ projects across Ontario and Quebec.
          </p>
          <p>
             • Collaborated with cross-functional teams (engineers, electricians, contractors) to translate system requirements into
              functional code for embedded controllers
          </p>
        </div>
      </div>

      <div className="event">
        <div className="event-date">2017 - 2019</div>
        <h2>Government of Canada</h2>
        <div className="timeline-content">
          <p>
            <strong>Mechanical Engineering Co-op Student</strong>
          </p>
          <p>
            • Worked at Natural Resources Canada, Canada Post, Department of
            National Defence, and Canada Border Services Agency for university
            mechanical engineering co-op program.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
