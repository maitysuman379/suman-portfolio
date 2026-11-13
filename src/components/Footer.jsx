import { ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer section-wrap">
      <a className="brand" href="#home"><span className="brand-mark">SM</span><span>Suman<span className="brand-dot">.</span></span></a>
      <span>© {new Date().getFullYear()} {profile.name}. Built with React.</span>
      <a href="#home">Back to top <ArrowUpRight size={15} /></a>
    </footer>
  );
}
