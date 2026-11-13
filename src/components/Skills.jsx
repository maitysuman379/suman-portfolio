import { Braces, Database, GitBranch, Globe, Server, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skills } from "../data/portfolio";

const icons = { Frontend: <Globe />, Backend: <Server />, Database: <Database />, Tools: <Wrench /> };

export default function Skills() {
  const groups = [...new Set(skills.map((skill) => skill.group))];
  return (
    <section className="section-wrap section-block" id="skills">
      <SectionHeading eyebrow="WHAT I WORK WITH" title="Tools & technologies." description="Technologies I have used in projects or am actively learning and practising." />
      <div className="skill-groups">
        {groups.map((group) => (
          <div className="skill-group" key={group}>
            <div className="skill-group-title">{icons[group] || <Braces />}<h3>{group}</h3></div>
            <div className="skill-chips">
              {skills.filter((s) => s.group === group).map((skill) => (
                <div className="skill-chip" key={skill.name}><span>{skill.name}</span><small>{skill.level}</small></div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="skills-note"><GitBranch size={16} /> This list reflects my current learning and hands-on experience—not a claim of expert-level proficiency.</p>
    </section>
  );
}
