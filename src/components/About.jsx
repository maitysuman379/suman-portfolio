import { Code2, Lightbulb, Target } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

const traits = [
  { icon: <Code2 />, title: "Build with purpose", text: "I like creating practical applications that solve real problems." },
  { icon: <Lightbulb />, title: "Stay curious", text: "I keep exploring tools, concepts and better ways to write software." },
  { icon: <Target />, title: "Keep improving", text: "I value consistency, feedback and learning through hands-on work." }
];

export default function About() {
  return (
    <section className="section-wrap section-block" id="about">
      <SectionHeading eyebrow="A LITTLE ABOUT ME" title="More than just code." description="A quick introduction to who I am, what I enjoy and how I approach building things." />
      <div className="about-grid">
        <div className="about-main">
          <span className="big-quote">“</span>
          <p className="about-lead">I’m a postgraduate student who enjoys turning ideas into <span>simple, useful digital experiences.</span></p>
          <p className="muted">{profile.intro}</p>
          <p className="muted">My current focus is strengthening my frontend and backend development skills while building projects that help me understand how real-world applications work.</p>
        </div>
        <div className="trait-list">
          {traits.map((item, i) => (
            <article className="trait-card" key={item.title}>
              <div className="trait-icon">{item.icon}</div>
              <div><span className="trait-index">0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
