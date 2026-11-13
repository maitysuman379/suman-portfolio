import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section
      className="section-wrap section-block contact-section"
      id="contact"
    >
      <SectionHeading
        eyebrow="LET'S CONNECT"
        title="Have an opportunity in mind?"
        description="I'm open to connecting, learning and discussing opportunities in web development."
      />
      <div className="contact-card">
        <div>
          <span className="contact-label">SEND ME A MESSAGE</span>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
            <ArrowUpRight size={24} />
          </a>
        </div>
        <div className="contact-details">
          <span>
            <MapPin size={16} /> {profile.location}
          </span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github size={17} /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={17} /> LinkedIn
          </a>
          <a href={`mailto:${profile.email}`}>
            <Mail size={17} /> Email
          </a>
        </div>
      </div>
    </section>
  );
}
