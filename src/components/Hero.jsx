import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  MapPin,
  Sparkles,
} from "lucide-react";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="hero section-wrap" id="home">
      <div className="hero-copy">
        <div className="availability">
          <span className="status-dot" /> Open to learning & opportunities
        </div>
        <p className="hero-kicker">
          <Sparkles size={16} /> HELLO, I'M
        </p>
        <h1>
          {profile.name}
          <span className="hero-period">.</span>
        </h1>
        <h2>{profile.role}</h2>
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">
            Explore my work <ArrowUpRight size={17} />
          </a>
          <a className="button button-ghost" href="#contact">
            Get in touch
          </a>
        </div>
        <div className="hero-meta">
          <span>
            <MapPin size={15} /> {profile.location}
          </span>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github size={16} /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="portrait-card">
          <div className="portrait-top">
            <span>PROFILE / 001</span>
            <span className="portrait-live">● ONLINE</span>
          </div>
          <div className="portrait-frame">
            <img
              src={profile.photo}
              alt={`${profile.name} portrait`}
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling.style.display = "grid";
              }}
            />
            <div className="portrait-fallback">SM</div>
          </div>
          <div className="portrait-caption">
            <div>
              <strong>{profile.name}</strong>
              <span>Building, learning, improving.</span>
            </div>
            <span className="portrait-arrow">
              <ArrowUpRight size={20} />
            </span>
          </div>
        </div>
        <div className="floating-note note-top">
          <span className="note-icon">✳</span>
          <span>
            Curious mind
            <br />
            <b>Creative builder</b>
          </span>
        </div>
        <div className="floating-note note-bottom">
          <span className="note-number">01</span>
          <span>
            Always learning
            <br />
            <b>One project at a time</b>
          </span>
        </div>
      </div>
      <a className="scroll-cue" href="#about">
        <ArrowDown size={15} /> SCROLL TO EXPLORE
      </a>
    </section>
  );
}
