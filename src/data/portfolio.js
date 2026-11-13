export const profile = {
  name: "Suman Maity",
  role: "MCA Student · Aspiring Full-Stack Developer",
  location: "West Bengal, India",
  email: "maitysuman379@gmail.com", // Replace with your professional email
  phone: "+91 89673 33550", // Replace before publishing, or remove this field
  github: "https://github.com/maitysuman379", // Replace with your GitHub profile
  linkedin: "https://www.linkedin.com/in/sumanmaity379/", // Replace with your LinkedIn profile
  resume: "/resume.pdf",
  photo: "/profile.png", // Ensure this image is in the public folder
  intro:
    "I am an MCA student with a strong interest in web development and software engineering. I enjoy building practical applications, learning new technologies, and turning ideas into useful digital experiences.",
};

export const education = [
  {
    period: "2025 — 2027 (Expected)",
    degree: "Master of Computer Applications (MCA)",
    institute: "Haldia Institute of Technology",
    result: "Pursuing · Latest reported: 85%",
    detail:
      "Currently pursuing postgraduate studies with an interest in software development and modern technologies.",
  },
  {
    period: "Completed 2025",
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "Chitkara University",
    result: "83%",
    detail:
      "Built a foundation in programming, databases, web technologies and computer applications.",
  },
  {
    period: "Higher Secondary",
    degree: "Class XII",
    institute: "West Bengal Council of Higher Secondary Education",
    result: "72.80%",
    detail: "Higher Secondary education.",
  },
  {
    period: "Secondary",
    degree: "Class X",
    institute: "West Bengal Board of Secondary Education",
    result: "58%",
    detail: "Secondary education.",
  },
];

export const skills = [
  { name: "HTML5", group: "Frontend", level: "Comfortable" },
  { name: "CSS3", group: "Frontend", level: "Comfortable" },
  { name: "JavaScript", group: "Frontend", level: "Learning & building" },
  { name: "React", group: "Frontend", level: "Learning & building" },
  { name: "Node.js", group: "Backend", level: "Learning & building" },
  { name: "Express.js", group: "Backend", level: "Learning & building" },
  { name: "MySQL", group: "Database", level: "Comfortable" },
  { name: "Git & GitHub", group: "Tools", level: "Working knowledge" },
];

export const projects = [
  {
    number: "01",
    name: "SmartCare HMS",
    category: "Full-Stack Web Application",
    description:
      "A Hospital Management System designed to bring patient, doctor and administrative workflows into one application. Features include authentication, appointments, patient profiles, medical records, prescriptions, billing and AI-related patient-vitals modules.",
    stack: ["React", "Node.js", "Express", "MySQL"],
    status: "Developed as an academic project",
    github: "https://github.com/maitysuman379/smartcare-hms",
    featured: true,
  },
  {
    number: "02",
    name: "Personal Portfolio",
    category: "Frontend Website",
    description:
      "A responsive, static portfolio website to present my profile, education, technical skills, projects and resume in a clear and professional format.",
    stack: ["React", "JavaScript", "CSS", "Vite"],
    status: "In progress",
    github: "",
  },
];
