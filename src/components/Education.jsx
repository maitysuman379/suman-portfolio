import { GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section className="section-wrap section-block" id="education">
      <SectionHeading eyebrow="MY JOURNEY" title="Education." description="The academic milestones that have shaped my learning journey." />
      <div className="timeline">
        {education.map((item, index) => (
          <article className="timeline-item" key={item.degree}>
            <div className="timeline-marker"><GraduationCap size={17} /></div>
            <div className="timeline-content">
              <div className="timeline-top"><span>{item.period}</span><span className="result-pill">{item.result}</span></div>
              <h3>{item.degree}</h3>
              <h4>{item.institute}</h4>
              <p>{item.detail}</p>
            </div>
            <span className="timeline-number">0{index + 1}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
