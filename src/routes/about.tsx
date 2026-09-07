import { createFileRoute, Link } from "@tanstack/react-router";
import profilePic from "@/assets/profile-pic.png";
import { AnimatedNumber } from "@/components/AnimatedNumber";
import { Award, ExternalLink, FileText, CheckCircle2, UserCheck, Briefcase, GraduationCap, Sparkles } from "lucide-react";
import { downloadCv } from "@/lib/downloadCv";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Pelagia Portfolio" },
      {
        name: "description",
        content:
          "Biography, core skills, work experience, education, verified certificates, and references of Pelagia Svare, a software developer from Bulawayo, Zimbabwe.",
      },
      { property: "og:title", content: "About — Pelagia Portfolio" },
      {
        property: "og:description",
        content: "Passion fuels purpose — skills, experience, education, verified certifications, and references.",
      },
    ],
  }),
  component: About,
});

const profileHighlights = [
  {
    title: "Home Services Mobile Platform",
    context: "Product Design Training",
    description:
      "Built a home services platform connecting homeowners with trusted service providers. Conducted comprehensive user research, created wireframes and prototypes, and designed user-friendly workflows.",
  },
  {
    title: "Accessible Responsive Portfolio",
    context: "Software Development Training",
    description:
      "Built a responsive portfolio website during Software Development training, focusing on web accessibility, responsive design across all devices, and clean, user-friendly interfaces.",
  },
];

const certificates = [
  {
    title: "Crash Course on Python",
    issuer: "Google & Coursera",
    date: "July 1, 2026",
    badge: "Google Verified",
    summary:
      "Authorized by Google. Mastered Python programming structure, object-oriented concepts, automated scripting, and data manipulation.",
    verifyUrl: "https://coursera.org/verify/NK7M7YXZE6O5",
    pdfUrl: "/certificate-google-python.pdf",
  },
  {
    title: "Systems Engineering",
    issuer: "MathWorks & Coursera",
    date: "July 13, 2026",
    badge: "MathWorks Verified",
    summary:
      "Authorized by MathWorks. Comprehensive training in systems modeling, lifecycle design, architecture, and analytical engineering problem-solving.",
    verifyUrl: "https://coursera.org/verify/B0ESDYNR3KQF",
    pdfUrl: "/certificate-mathworks-systems-engineering.pdf",
  },
  {
    title: "Technology Bootcamp & Referral",
    issuer: "Uncommon.org",
    date: "July 28, 2026",
    badge: "Official Recommendation",
    summary:
      "Official recommendation certifying expertise in React, Vite, Next.js, Node.js, Express, Firebase, Supabase, C#, and Prompt Engineering.",
    pdfUrl: "/uncommon-org-recommendation-letter.pdf",
  },
];

const skills = [
  "C#",
  ".NET",
  "Entity Framework",
  "JavaScript",
  "TypeScript",
  "Python",
  "HTML",
  "CSS",
  "Node.js",
  "React",
  "Git",
  "GitHub",
  "IT Support",
  "Scratch Programming",
  "Vite",
  "Styled Components",
  "Vercel",
  "Prompt Engineering",
  "Firebase",
  "Supabase",
  "Next.js",
  "Figma",
];

const experience = [
  {
    position: "Software Developer",
    company: "Uncommon.org",
    time: "2026 - Present",
    address: "Harare, Zimbabwe",
    work: "Contributed to development tasks and supported ongoing projects while teaching coding to school students.",
  },
  {
    position: "Scratch Coordinator",
    company: "Uncommon.org",
    time: "2026 - Present",
    address: "Harare, Zimbabwe",
    work: "Teach Scratch programming, guide learners through coding projects and computational thinking, and support creativity, problem-solving and digital literacy.",
  },
  {
    position: "Product Designer",
    company: "Uncommon.org",
    time: "2026",
    address: "Harare, Zimbabwe",
    work: "Designed and built a mobile app connecting homeowners with trusted service providers. Conducted user research, created wireframes and prototypes, defined product features, and collaborated on development.",
  },
];

const education = [
  {
    type: "Responsive Website Design Certification",
    time: "2026",
    place: "FreeCodeCamp",
    detail:
      "Comprehensive certification in responsive web development, modern CSS flexbox & grid layouts, and accessible UI engineering.",
  },
  {
    type: "UX / Product Design Learning",
    time: "2026",
    place: "Uxcel",
    detail:
      "Practical design training focused on interaction design, user heuristics, wireframing, and creating seamless user journeys.",
  },
  {
    type: "Information Technology & Software Development",
    time: "2026",
    place: "Uncommon.org",
    detail:
      "Intensive software engineering training covering full-stack web development, C#, .NET, React frameworks, Node.js, API integrations, and collaborative workflows.",
  },
  {
    type: "Crash Course on Python Certification",
    time: "2026",
    place: "Google & Coursera",
    detail:
      "Verified course completion in Python programming fundamentals, data structures, automation, and backend script building.",
  },
  {
    type: "Systems Engineering Certification",
    time: "2026",
    place: "MathWorks & Coursera",
    detail:
      "Verified course completion in systems engineering principles, architecture design, and system lifecycle modeling.",
  },
];

const references = [
  {
    name: "Tonderai Kawere",
    role: "Software Developer",
    company: "Uncommon.org",
    phone: "078 252 8050",
    email: "tonderai@uncommon.org",
  },
];

function About() {
  return (
    <main className="w-full px-8 pb-16 md:px-16 lg:px-32">
      <h1 className="mb-16 w-full text-center text-4xl font-bold uppercase tracking-tight sm:text-6xl lg:text-7xl">
        Passion Fuels Purpose!
      </h1>

      <div className="grid w-full grid-cols-1 gap-16 lg:grid-cols-8">
        <div className="col-span-1 flex flex-col items-start justify-start lg:col-span-3">
          <h2 className="mb-4 text-lg font-bold uppercase text-muted-foreground">Biography</h2>
          <p className="font-medium">
            Hi, I am Pelagia Svare, a software developer skilled in JavaScript, Python and C#, building
            user-focused web and application solutions from Bulawayo, Zimbabwe.
          </p>
          <p className="my-4 font-medium">
            I am also an experienced Scratch educator and mentor, passionate about software development
            and delivering impactful digital products that inspire learners and solve real-world problems.
          </p>
          <p className="font-medium">
            Whether I am engineering a fullstack web application, designing intuitive workflows, or teaching computational thinking, I care deeply about accessibility, clean architecture and high-impact digital solutions.
          </p>
          
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 rounded-xl bg-secondary px-5 py-2.5 text-sm font-semibold text-secondary-foreground shadow-sm transition-all hover:opacity-90"
            >
              <FileText size={16} /> View Online CV
            </Link>
            <a
              href="/Pelagia%20Svare%20CV.pdf"
              download="Pelagia Svare CV.pdf"
              onClick={downloadCv}
              className="inline-flex items-center gap-1.5 text-sm font-semibold underline underline-offset-4 hover:text-primary transition-colors cursor-pointer"
            >
              Download CV (PDF) <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <div className="relative col-span-1 h-max rounded-2xl border-2 border-solid border-border bg-card p-6 shadow-[10px_10px_0_0_var(--color-secondary)] lg:col-span-3">
          <img
            src={profilePic}
            alt="Portrait illustration of Pelagia Svare"
            width={900}
            height={1100}
            loading="lazy"
            className="h-auto w-full rounded-xl object-cover"
          />
        </div>

        <div className="col-span-1 flex flex-row items-end justify-between lg:col-span-2 lg:flex-col">
          {[
            { n: 6, label: "Certifications Earned" },
            { n: 10, label: "Projects Completed" },
            { n: 50, label: "Students Mentored" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-end justify-center">
              <span className="inline-block text-4xl font-bold sm:text-5xl">
                <AnimatedNumber value={s.n} />+
              </span>
              <h3 className="text-right text-sm font-medium capitalize text-muted-foreground">
                {s.label}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Profile Highlights */}
      <section className="mt-24">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/80 px-4 py-1.5 text-sm font-semibold text-secondary-foreground mb-3">
            <Sparkles size={18} /> Career Milestones
          </span>
          <h2 className="text-4xl font-bold sm:text-6xl">Profile Highlights</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {profileHighlights.map((item) => (
            <div
              key={item.title}
              className="relative flex flex-col justify-between rounded-2xl border-2 border-border bg-card p-8 shadow-[8px_8px_0_0_var(--color-secondary)] transition-all hover:-translate-y-1"
            >
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                  {item.context}
                </span>
                <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Official Recommendations */}
      <section className="mt-24">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/80 px-4 py-1.5 text-sm font-semibold text-secondary-foreground mb-3">
            <Award size={18} /> Verified Credentials
          </span>
          <h2 className="text-4xl font-bold sm:text-6xl">Certificates & Recommendations</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="relative flex flex-col justify-between rounded-2xl border-2 border-border bg-card p-6 shadow-[8px_8px_0_0_var(--color-secondary)] transition-all hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1 rounded-md bg-secondary/50 px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
                    <CheckCircle2 size={14} /> {cert.badge}
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">{cert.date}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">{cert.title}</h3>
                <p className="text-sm font-semibold text-primary mb-3">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{cert.summary}</p>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-border/50">
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-secondary px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground transition-colors hover:opacity-90"
                  >
                    Verify Certificate <ExternalLink size={14} />
                  </a>
                )}
                {cert.pdfUrl && (
                  <a
                    href={cert.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold underline underline-offset-4 hover:text-primary transition-colors"
                  >
                    View Document PDF <FileText size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Skills */}
      <section className="mt-24">
        <h2 className="mb-12 w-full text-center text-4xl font-bold sm:text-6xl">Core Skills</h2>
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
          <span className="rounded-full bg-secondary px-7 py-3.5 text-base font-bold text-secondary-foreground shadow-sm">
            Core Stack
          </span>
          {skills.map((s) => (
            <span
              key={s}
              className="rounded-full border-2 border-border bg-card px-5 py-2.5 text-sm font-semibold transition-transform hover:scale-105 hover:border-primary hover:text-primary"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mt-24">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/80 px-4 py-1.5 text-sm font-semibold text-secondary-foreground mb-3">
            <Briefcase size={18} /> Career Journey
          </span>
          <h2 className="text-4xl font-bold sm:text-6xl">Experience</h2>
        </div>
        <ul className="mx-auto flex max-w-3xl flex-col gap-10 border-l-2 border-border pl-8">
          {experience.map((e) => (
            <li key={e.position} className="relative">
              <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-secondary" />
              <h3 className="text-xl font-bold">
                {e.position}&nbsp;
                <span className="text-primary">@{e.company}</span>
              </h3>
              <span className="text-sm font-medium text-muted-foreground">
                {e.time} | {e.address}
              </span>
              <p className="mt-2 font-medium leading-relaxed">{e.work}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Education */}
      <section className="mt-24">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/80 px-4 py-1.5 text-sm font-semibold text-secondary-foreground mb-3">
            <GraduationCap size={18} /> Academic & Specialized Learning
          </span>
          <h2 className="text-4xl font-bold sm:text-6xl">Education & Certifications</h2>
        </div>
        <ul className="mx-auto flex max-w-3xl flex-col gap-10 border-l-2 border-border pl-8">
          {education.map((e) => (
            <li key={e.type + e.place} className="relative">
              <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-secondary" />
              <h3 className="text-xl font-bold">{e.type}</h3>
              <span className="text-sm font-semibold text-primary">
                {e.place} • <span className="text-muted-foreground font-normal">{e.time}</span>
              </span>
              <p className="mt-2 font-medium leading-relaxed text-muted-foreground">{e.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* References */}
      <section className="mt-24">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/80 px-4 py-1.5 text-sm font-semibold text-secondary-foreground mb-3">
            <UserCheck size={18} /> Professional Endorsement
          </span>
          <h2 className="text-4xl font-bold sm:text-6xl">References</h2>
        </div>

        <div className="max-w-xl mx-auto">
          {references.map((ref) => (
            <div
              key={ref.name}
              className="rounded-2xl border-2 border-border bg-card p-6 shadow-[8px_8px_0_0_var(--color-secondary)] text-center flex flex-col items-center gap-2"
            >
              <h3 className="text-2xl font-bold text-foreground">{ref.name}</h3>
              <p className="text-base font-semibold text-primary">
                {ref.role} @ {ref.company}
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-muted-foreground">
                <span>Phone: <strong className="text-foreground">{ref.phone}</strong></span>
                <span>•</span>
                <span>Email: <a href={`mailto:${ref.email}`} className="text-foreground hover:text-primary underline underline-offset-2">{ref.email}</a></span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}