import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";

const links = [
  ["About", "#about"],
  ["Education", "#education"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Resume", "#resume"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="navbar">
      <a className="brand" href="#home" onClick={() => setOpen(false)}>
        <span className="brand-mark">SM</span><span>Suman<span className="brand-dot">.</span></span>
      </a>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      <nav className={open ? "nav-links nav-open" : "nav-links"}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
        <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>
          Let's talk <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}
