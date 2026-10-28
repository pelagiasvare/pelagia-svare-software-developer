import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Github, ExternalLink, Sparkles, Users, Palette, CheckCircle2 } from "lucide-react";

// 100% Real Live Website Screenshots
import foodieland from "@/assets/project-foodieland.png";
import kidverse from "@/assets/project-kidverse.png";
import codefam from "@/assets/project-codefam.png";
import chickenInn from "@/assets/project-chicken-inn.png";
import bakersInn from "@/assets/project-bakers-inn.png";
import wattleCompany from "@/assets/project-wattle-company.png";
import portfolioV1 from "@/assets/project-portfolio-v1.png";
import todoList from "@/assets/project-todo-list.png";
import contactForm from "@/assets/project-contact-form.png";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Pelagia Svare, Software Developer" },
      {
        name: "description",
        content:
          "Featured software development projects by Pelagia Svare: team projects (Kidverse, CodeFam), brand redesign concepts (Chicken Inn, Baker's Inn, The Wattle Company), and web applications.",
      },
      { property: "og:title", content: "Projects — Pelagia Svare" },
      {
        property: "og:description",
        content:
          "Explore team projects (Kidverse full-stack contributor, CodeFam operations manager), brand redesign concepts (Chicken Inn, Baker's Inn, Wattle Company), and web applications.",
      },
    ],
  }),
  component: Projects,
});

type Category = "All" | "Team Projects" | "Redesign Concepts" | "Web Apps";

interface ProjectItem {
  title: string;
  type: string;
  category: "Team Projects" | "Redesign Concepts" | "Web Apps";
  role?: string;
  whatIBuilt?: string;
  isTeamProject?: boolean;
  isRedesignConcept?: boolean;
  summary: string;
  img: string;
  link: string;
  github: string;
  tech: string[];
}

const featured: ProjectItem = {
  title: "Foodieland — Recipe & Delights Platform",
  summary:
    "A mouth-watering culinary web application featuring hand-picked recipes, dish categories, cooking time indicators, ingredient breakdowns, and an intuitive UI designed for food enthusiasts.",
  img: foodieland,
  type: "Featured Web Application",
  category: "Web Apps",
  role: "Solo Software Developer & Designer",
  whatIBuilt:
    "Architected and developed the entire frontend recipe platform with React and Vite, featuring recipe category filtering, cooking time calculation, responsive food cards, and mobile-friendly layouts.",
  link: "https://foodlide.vercel.app/",
  github: "https://github.com/pelagiasvare/Foodlide",
  tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
};

const allProjects: ProjectItem[] = [
  {
    title: "Kidverse — Children's E-Commerce & Marketplace",
    type: "Team Project • Full-Stack Marketplace",
    category: "Team Projects",
    isTeamProject: true,
    role: "Full-Stack Contributor (Frontend & Backend)",
    whatIBuilt:
      "Contributed across both frontend and backend: developed responsive user-facing UI components (product browsing, categories, catalog navigation) and implemented backend integration including database models, API route handling with Supabase & Prisma ORM, and authentication workflows.",
    summary:
      "A collaborative full-stack e-commerce and delivery marketplace for children's fashion, toys, and essentials. Built with Next.js 15, React 19, Supabase, Prisma ORM, NextAuth authentication, and Cloudinary.",
    img: kidverse,
    link: "https://kidversee.vercel.app/",
    github: "https://github.com/thembiencube08-dotcom/kidversee",
    tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Supabase", "Prisma ORM"],
  },
  {
    title: "CodeFam — Global Developer Community & Platform",
    type: "Team Project • Developer Community Platform",
    category: "Team Projects",
    isTeamProject: true,
    role: "Operations Manager",
    whatIBuilt:
      "Served as Operations Manager at CodeFam: coordinated cross-functional developer collaboration, platform operations, team project milestones, and contributor engagement, while helping guide feature roadmaps and community technical initiatives.",
    summary:
      "A global collaborative platform where developers connect across the world, find talent, collaborate on open-source projects, post ideas, get forum help, and support each other.",
    img: codefam,
    link: "https://codefam.dev/",
    github: "https://github.com/codefam-dev/codefam.dev",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Community Platform",
      "Team Operations",
    ],
  },
  {
    title: "Chicken Inn — Website Redesign Concept",
    type: "Brand Redesign Concept",
    category: "Redesign Concepts",
    isRedesignConcept: true,
    role: "Concept Design & Front-End Implementation",
    whatIBuilt:
      "Crafted a modern brand redesign concept: restructured visual hierarchy, designed bold promotional hero banners, interactive product menu cards, and responsive navigation tailored for quick ordering flows.",
    summary:
      "A bold, high-energy modern fast-food restaurant website redesign concept created for Chicken Inn with dynamic hero banners, appetizing food showcases, category filters, and quick menu navigation.",
    img: chickenInn,
    link: "https://chickeninnwebsite.vercel.app/",
    github: "https://github.com/pelagiasvare/chickeninnwebsite",
    tech: ["React", "CSS Modules", "Responsive Design", "Brand UI", "UI Redesign"],
  },
  {
    title: "Baker's Inn — Bakery Redesign Concept",
    type: "Brand Redesign Concept",
    category: "Redesign Concepts",
    isRedesignConcept: true,
    role: "Concept Design & Front-End Implementation",
    whatIBuilt:
      "Designed and coded a fresh bakery website redesign concept featuring inviting product categories (bread, pies, scones), recipe inspiration, interactive kid's games, and streamlined donation/tour inquiry forms.",
    summary:
      "A warm, appetizing website redesign concept for Baker's Inn showcasing fresh bread, bakery ranges, recipes, an interactive kid's corner, factory tour booking, and community donation requests.",
    img: bakersInn,
    link: "https://bakers-inn-react-js.vercel.app/",
    github: "https://github.com/pelagiasvare/bakersinnwebisite",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive UI", "UI Redesign"],
  },
  {
    title: "The Wattle Company — Corporate Redesign Concept",
    type: "Corporate Redesign Concept",
    category: "Redesign Concepts",
    isRedesignConcept: true,
    role: "Concept Design & Front-End Implementation",
    whatIBuilt:
      "Designed and built a corporate website redesign concept highlighting company heritage, structured industrial forestry product showcases, and a streamlined instant quote request workflow.",
    summary:
      "A contemporary corporate website redesign concept for The Wattle Company, highlighting sustainable timber & forestry products since 1945, product categories, and instant quote requests.",
    img: wattleCompany,
    link: "https://wattlecompany-project.vercel.app/",
    github: "https://github.com/pelagiasvare/wattlecompany",
    tech: ["React", "Vite", "Modern CSS", "Accessibility", "UI Redesign"],
  },
  {
    title: "Pelagia Portfolio — Styled Components & Vite",
    type: "Personal Portfolio Platform",
    category: "Web Apps",
    role: "Solo Software Developer",
    whatIBuilt:
      "Engineered portfolio architecture with Vite, TypeScript, and Styled Components, implementing modular component styling and smooth interactions.",
    summary:
      "A personal portfolio website built using Vite, TypeScript, and Styled Components to create a fast, modern, and responsive user experience with clean code architecture.",
    img: portfolioV1,
    link: "https://pelagiaportfolio.vercel.app/",
    github: "https://github.com/pelagiasvare/pelagiaportfolio",
    tech: ["React", "Vite", "Styled Components", "TypeScript"],
  },
  {
    title: "To-Do List Task Manager",
    type: "Web Application",
    category: "Web Apps",
    role: "Solo Software Developer",
    whatIBuilt:
      "Built dynamic task state management with React hooks, real-time completion counters, and an accessible dashboard layout.",
    summary:
      "An intuitive task management dashboard with metric counters for Total Tasks, Completed, and Failed tasks, rapid task addition, and clean state feedback.",
    img: todoList,
    link: "https://todolist-psi-tawny.vercel.app/",
    github: "https://github.com/pelagiasvare/todolist",
    tech: ["React", "useState Hook", "Task State Management", "CSS"],
  },
  {
    title: "React Contact Form & Email Integration",
    type: "Interactive Component",
    category: "Web Apps",
    role: "Solo Software Developer",
    whatIBuilt:
      "Implemented client-side input validation, error handling states, and integrated EmailJS for direct inbox message transmission.",
    summary:
      "A responsive contact form interface built with React, featuring user input validation, structured layout, and seamless EmailJS integration for direct inbox delivery.",
    img: contactForm,
    link: "https://formreactjs.vercel.app/",
    github: "https://github.com/pelagiasvare/formreactjs",
    tech: ["React", "EmailJS", "Form Validation", "CSS"],
  },
];

const categories: Category[] = ["All", "Team Projects", "Redesign Concepts", "Web Apps"];

function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  const showFeatured = activeCategory === "All" || activeCategory === "Web Apps";

  return (
    <main className="w-full px-8 pb-16 md:px-16 lg:px-32">
      <div className="mb-12 flex flex-col items-center text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary">
          <Sparkles size={14} /> Portfolio Showcase
        </div>
        <h1 className="w-full text-4xl font-bold uppercase tracking-tight sm:text-6xl lg:text-7xl">
          My Featured Projects
        </h1>
        <p className="mt-4 max-w-2xl text-base font-medium text-muted-foreground sm:text-lg">
          Explore collaborative team projects (Kidverse, CodeFam), modern brand redesign concepts
          (Chicken Inn, Baker's Inn, The Wattle Company), and full-featured web applications.
        </p>

        {/* Category Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-secondary text-secondary-foreground shadow-[4px_4px_0_0_var(--color-primary)] scale-105"
                  : "border-2 border-border bg-card text-foreground hover:border-primary/60 hover:text-primary"
              }`}
            >
              {cat === "Team Projects" && "👥 "}
              {cat === "Redesign Concepts" && "🎨 "}
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Project */}
      {showFeatured && (
        <article className="relative mb-16 flex w-full flex-col items-center justify-between gap-8 rounded-3xl border-2 border-solid border-border bg-card p-8 shadow-[10px_10px_0_0_var(--color-secondary)] lg:flex-row">
          <a
            href={featured.link}
            target="_blank"
            rel="noreferrer"
            className="w-full cursor-pointer overflow-hidden rounded-lg lg:w-1/2"
          >
            <img
              src={featured.img}
              alt={featured.title}
              width={1280}
              height={800}
              loading="lazy"
              className="h-auto w-full transition-transform duration-500 hover:scale-105"
            />
          </a>
          <div className="flex w-full flex-col items-start justify-between lg:w-1/2">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xl font-medium text-primary">{featured.type}</span>
              <span className="rounded-full bg-secondary/70 px-3 py-0.5 text-xs font-bold text-secondary-foreground">
                Solo Project
              </span>
            </div>
            <h2 className="my-2 text-3xl font-bold sm:text-4xl">{featured.title}</h2>
            <p className="font-medium text-muted-foreground leading-relaxed">{featured.summary}</p>

            {/* Explicit Role & What Specifically Built Callout */}
            <div className="my-4 w-full rounded-xl border border-primary/25 bg-primary/5 p-3.5 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5 font-bold text-primary mb-1">
                <CheckCircle2 size={16} className="shrink-0" />
                <span>My Role: {featured.role}</span>
              </div>
              <p className="text-foreground/90 font-medium">
                <strong className="text-foreground">What I specifically built:</strong>{" "}
                {featured.whatIBuilt}
              </p>
            </div>

            <div className="mt-2 flex flex-wrap gap-2">
              {featured.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-semibold text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={featured.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg bg-secondary px-6 py-2.5 text-base font-bold text-secondary-foreground transition-all hover:opacity-90 shadow-sm"
              >
                Visit Live Site <ExternalLink size={18} />
              </a>
              <a
                href={featured.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border-2 border-border bg-card px-5 py-2 text-base font-semibold text-foreground transition-all hover:border-primary hover:text-primary"
              >
                <Github size={18} /> GitHub Repo
              </a>
            </div>
          </div>
        </article>
      )}

      {/* All Projects Grid */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {filteredProjects.map((p) => (
          <article
            key={p.title}
            className="relative flex w-full flex-col items-start justify-between rounded-2xl border-2 border-solid border-border bg-card p-6 shadow-[8px_8px_0_0_var(--color-secondary)] transition-all hover:-translate-y-1"
          >
            <div className="relative w-full overflow-hidden rounded-lg mb-4">
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="block w-full cursor-pointer overflow-hidden"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  width={1024}
                  height={700}
                  loading="lazy"
                  className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </a>

              {/* Status Badges on Image */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                {p.isTeamProject && (
                  <span className="inline-flex items-center gap-1 rounded-md bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground shadow-md backdrop-blur-sm">
                    <Users size={12} /> Team Project
                  </span>
                )}
                {p.isRedesignConcept && (
                  <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2.5 py-1 text-xs font-bold text-secondary-foreground shadow-md backdrop-blur-sm">
                    <Palette size={12} /> Redesign Concept
                  </span>
                )}
              </div>
            </div>

            <div className="flex w-full flex-col items-start justify-between flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2 w-full">
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                  {p.type}
                </span>
                {p.isTeamProject && (
                  <span className="text-xs font-bold text-primary bg-primary/10 border border-primary/25 rounded-md px-2 py-0.5">
                    Team Collaboration
                  </span>
                )}
                {p.isRedesignConcept && (
                  <span className="text-xs font-bold text-secondary-foreground bg-secondary/40 border border-secondary/50 rounded-md px-2 py-0.5">
                    Brand Concept
                  </span>
                )}
              </div>

              <h2 className="my-1.5 text-2xl font-bold leading-tight">{p.title}</h2>
              <p className="my-2 text-sm font-normal text-muted-foreground leading-relaxed">
                {p.summary}
              </p>

              {/* Explicit Role & What Specifically Built Callout */}
              {p.role && (
                <div
                  className={`my-3 w-full rounded-xl p-3.5 text-xs leading-relaxed border ${
                    p.isTeamProject
                      ? "border-primary/30 bg-primary/5"
                      : p.isRedesignConcept
                        ? "border-secondary/60 bg-secondary/15"
                        : "border-border bg-muted/40"
                  }`}
                >
                  <div className="flex items-center gap-1.5 font-bold mb-1.5">
                    {p.isTeamProject ? (
                      <Users size={14} className="text-primary shrink-0" />
                    ) : p.isRedesignConcept ? (
                      <Palette size={14} className="text-primary shrink-0" />
                    ) : (
                      <CheckCircle2 size={14} className="text-primary shrink-0" />
                    )}
                    <span className={p.isTeamProject ? "text-primary" : "text-foreground"}>
                      {p.isTeamProject
                        ? "My Role on the Team:"
                        : p.isRedesignConcept
                          ? "Concept Scope:"
                          : "Role:"}{" "}
                      <span className="underline underline-offset-2">{p.role}</span>
                    </span>
                  </div>
                  {p.whatIBuilt && (
                    <p className="text-foreground/90 font-medium">
                      <strong className="text-foreground">
                        {p.isTeamProject
                          ? "What I specifically built:"
                          : p.isRedesignConcept
                            ? "Design & build scope:"
                            : "What I built:"}
                      </strong>{" "}
                      {p.whatIBuilt}
                    </p>
                  )}
                </div>
              )}

              <div className="mt-2 mb-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border/80 bg-muted/40 px-2 py-0.5 text-xs font-medium text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex w-full flex-wrap items-center justify-between gap-3 pt-3 border-t border-border/50">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-base font-semibold underline underline-offset-4 hover:text-primary transition-colors"
                >
                  {p.isRedesignConcept ? "View Concept Live" : "Live Demo"}{" "}
                  <ExternalLink size={16} />
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/40 px-3 py-1.5 text-xs font-bold text-foreground transition-all hover:bg-secondary hover:text-secondary-foreground"
                >
                  <Github size={14} /> GitHub Repo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
