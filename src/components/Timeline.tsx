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
            - Develop and maintain automation test scripts for POS applications using C#, Selenium, JavaScript, PowerShell, and Batch.
          </p>
          <p>
            - Perform API and web testing with Postman, support CI/CD pipelines (Jenkins, AWS), and manage version control with Git.
          </p>
          <p>
            - Track issues in Jira, write documentation in Confluence, and collaborate with Agile teams on regression and functional testing.
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
            Responsible for 300+ multi-family residential building automation
            systems and HVAC operational parameters, including equipment PID
            controls.
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
            Designed and programmed building automation systems for commercial
            and institutional buildings using Delta PLC controllers.
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
            Worked at Natural Resources Canada, Canada Post, Department of
            National Defence, and Canada Border Services Agency for university
            mechanical engineering co-op program.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
