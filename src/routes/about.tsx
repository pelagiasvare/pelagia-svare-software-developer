import { createFileRoute } from "@tanstack/react-router";
import profilePic from "@/assets/profile-pic.jpg";
import { AnimatedNumber } from "@/components/AnimatedNumber";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Pelagia Svare — Software Developer & Product Designer" },
      {
        name: "description",
        content:
          "Biography, skills, experience and education of Pelagia Svare, a software developer and product designer from Harare, Zimbabwe.",
      },
      { property: "og:title", content: "About Pelagia Svare" },
      {
        property: "og:description",
        content: "Passion fuels purpose — skills, experience and education.",
      },
    ],
  }),
  component: About,
});

const skills = [
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "React",
  "Node.js",
  "Next.js",
  "Vite",
  "Styled Components",
  "Firebase",
  "Supabase",
  "Python",
  "Git & GitHub",
  "Scratch",
  "Figma",
  "Prompt Engineering",
];

const experience = [
  {
    position: "Software Developer",
    company: "Uncommon.org",
    time: "2026-Present",
    address: "Harare, Zimbabwe",
    work: "Contributed to development tasks and supported ongoing projects while teaching coding to school students.",
  },
  {
    position: "Scratch Coordinator",
    company: "Uncommon.org",
    time: "2026-Present",
    address: "Harare, Zimbabwe",
    work: "Teach Scratch programming to students, guiding learners through coding projects and computational thinking while supporting creativity, problem-solving and digital literacy.",
  },
  {
    position: "Product Designer",
    company: "Uncommon.org",
    time: "2026",
    address: "Harare, Zimbabwe",
    work: "Designed and built a mobile app connecting homeowners with trusted service providers. Conducted user research, created wireframes and prototypes, defined product features and collaborated on development.",
  },
];

const education = [
  {
    type: "Software Development Stack Specialisation",
    time: "2026",
    place: "Uncommon.org",
    detail:
      "Technology bootcamp covering front-end and back-end React frameworks, Vite, Next.js, Node.js & Express, Firebase, Supabase, prompt engineering and professional communication.",
  },
  {
    type: "Front-End Development Certification",
    time: "2026",
    place: "freeCodeCamp",
    detail:
      "Core front-end engineering: JavaScript fundamentals, React component architecture and accessible interface development.",
  },
  {
    type: "Responsive Web Design Certification",
    time: "2026",
    place: "freeCodeCamp",
    detail:
      "Semantic HTML5, modern CSS layout and responsive, accessible design across all screen sizes.",
  },
  {
    type: "Product Design & Design Thinking Certifications",
    time: "2026",
    place: "Uxcel",
    detail:
      "Product design, design thinking and UI/UX design — user research, wireframing, prototyping and usability.",
  },
  {
    type: "Python for Everybody",
    time: "2026",
    place: "Coursera",
    detail: "Python programming fundamentals, data structures and working with data.",
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
            Hi, I am Pelagia Svare, a software developer skilled in JavaScript and Python, building
            user-focused web and application solutions from Harare, Zimbabwe.
          </p>
          <p className="my-4 font-medium">
            I am also an experienced Scratch educator and mentor, teaching young learners
            computational thinking, creativity and problem solving through code.
          </p>
          <p className="font-medium">
            Whether I am designing a mobile app or shipping a responsive web interface, I care about
            accessibility, clean code and delivering impactful digital products.
          </p>
        </div>

        <div className="relative col-span-1 h-max rounded-2xl border-2 border-solid border-border bg-card p-8 shadow-[10px_10px_0_0_var(--color-secondary)] lg:col-span-3">
          <img
            src={profilePic}
            alt="Portrait illustration of Pelagia Svare"
            width={900}
            height={1100}
            loading="lazy"
            className="h-auto w-full rounded-2xl"
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

      <section className="mt-24">
        <h2 className="mb-12 w-full text-center text-4xl font-bold sm:text-6xl">Skills</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="rounded-full bg-secondary px-8 py-4 text-lg font-bold text-secondary-foreground">
            Web
          </span>
          {skills.map((s) => (
            <span
              key={s}
              className="rounded-full border-2 border-border bg-card px-6 py-3 text-base font-semibold transition-transform hover:scale-105 hover:border-primary hover:text-primary"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <h2 className="mb-12 w-full text-center text-4xl font-bold sm:text-6xl">Experience</h2>
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
              <p className="mt-2 font-medium">{e.work}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-24">
        <h2 className="mb-12 w-full text-center text-4xl font-bold sm:text-6xl">Education</h2>
        <ul className="mx-auto flex max-w-3xl flex-col gap-10 border-l-2 border-border pl-8">
          {education.map((e) => (
            <li key={e.type} className="relative">
              <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-secondary" />
              <h3 className="text-xl font-bold">{e.type}</h3>
              <span className="text-sm font-medium text-muted-foreground">
                {e.time} | {e.place}
              </span>
              <p className="mt-2 font-medium">{e.detail}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}