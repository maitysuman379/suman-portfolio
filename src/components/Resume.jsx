import { ArrowDownToLine, FileText } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/portfolio";

export default function Resume() {
  return (
    <section className="section-wrap section-block" id="resume">
      <div className="resume-panel">
        <div className="resume-copy">
          <span className="eyebrow">THE SHORT VERSION</span>
          <h2>Want the details<br />at a glance?</h2>
          <p>Download my resume for a concise overview of my education, skills and project experience.</p>
          <a className="button button-primary" href={profile.resume} download><ArrowDownToLine size={17} /> Download Resume</a>
          <small className="resume-hint">Add your latest PDF as <code>public/resume.pdf</code> before publishing.</small>
        </div>
        <div className="resume-art"><div className="resume-paper"><div className="paper-top"><span>SM</span><FileText size={22} /></div><div className="paper-line paper-wide" /><div className="paper-line" /><div className="paper-gap" /><div className="paper-line paper-wide" /><div className="paper-line" /><div className="paper-line paper-short" /><div className="paper-gap" /><div className="paper-line paper-wide" /><div className="paper-line" /><div className="paper-line paper-short" /></div><span className="resume-stamp">RESUME<br />PDF</span></div>
      </div>
    </section>
  );
}
