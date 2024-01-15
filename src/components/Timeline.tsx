import "./Timeline.css";

const Timeline = () => {
  return (
    <div className="timeline-container">
      <div className="event">
        <div className="event-date">2022 - 2023</div>
        <h2>Starlight Investments</h2>
        <div className="timeline-content">
          <p>
            <strong>BAS & Energy Analyst</strong>
          </p>
          <p>
            Responsible for 300+ multi-residential building automation systems
            and HVAC operation parameters.
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
            National Defence, and Canada Border Services Agency for my
            mechanical engineering co-op program.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
