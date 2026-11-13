import { ArrowUpRight, Github, Layers3 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section className="section-wrap section-block" id="projects">
      <SectionHeading eyebrow="SELECTED WORK" title="Projects I've worked on." description="A selection of practical work that reflects my learning and development journey." />
      <div className="project-grid">
        {projects.map((project) => (
          <article className={project.featured ? "project-card project-featured" : "project-card"} key={project.number}>
            <div className="project-top"><span className="project-number">{project.number} / PROJECT</span><span className="project-symbol"><Layers3 size={22} /></span></div>
            <span className="project-category">{project.category}</span>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tech-tags">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div>
            <div className="project-footer"><span>{project.status}</span>{project.github && <a href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}><Github size={17} /> Source <ArrowUpRight size={15} /></a>}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
