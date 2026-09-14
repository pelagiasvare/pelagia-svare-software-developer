import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Github, ExternalLink, Sparkles } from "lucide-react";

// 100% Real Live Website Screenshots
import foodieland from "@/assets/project-foodieland.png";
import kidverse from "@/assets/project-kidverse.png";
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
          "Featured software development and product design projects by Pelagia Svare, including Foodieland, Kidverse, Chicken Inn, Baker's Inn, The Wattle Company, Portfolio, To-Do App, and Contact Form.",
      },
      { property: "og:title", content: "Projects — Pelagia Svare" },
      {
        property: "og:description",
        content:
          "Explore real-world live Web Applications, E-Commerce Marketplaces, Corporate Portals, and UI Systems built by Pelagia Svare.",
      },
    ],
  }),
  component: Projects,
});

type Category = "All" | "Web Apps" | "E-Commerce & Marketplaces" | "Corporate & Brand";

interface ProjectItem {
  title: string;
  type: string;
  category: "Web Apps" | "E-Commerce & Marketplaces" | "Corporate & Brand";
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
  link: "https://foodlide.vercel.app/",
  github: "https://github.com/pelagiasvare/Foodlide",
  tech: ["React", "Vite", "Tailwind CSS", "JavaScript"],
};

const allProjects: ProjectItem[] = [
  {
    title: "Kidverse — Children's E-Commerce & Marketplace",
    type: "Full-Stack Marketplace Platform",
    category: "E-Commerce & Marketplaces",
    summary:
      "A full-stack e-commerce and delivery marketplace for children's fashion, toys, and essentials. Features Next.js 15, React 19, Supabase, Prisma ORM, NextAuth authentication, and Cloudinary asset management.",
    img: kidverse,
    link: "https://kidversee.vercel.app/",
    github: "https://github.com/thembiencube08-dotcom/kidversee",
    tech: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Supabase", "Prisma ORM"],
  },
  {
    title: "Chicken Inn Fast Food Experience",
    type: "Fast Food Web Platform",
    category: "Corporate & Brand",
    summary:
      "A bold, high-energy fast-food restaurant web experience built for Chicken Inn with dynamic hero banners, food showcases, and quick menu navigation.",
    img: chickenInn,
    link: "https://chickeninnwebsite.vercel.app/",
    github: "https://github.com/pelagiasvare/chickeninnwebsite",
    tech: ["React", "CSS Modules", "Responsive Design", "Brand UI"],
  },
  {
    title: "Baker's Inn — Fresh Bread & Bakery Platform",
    type: "Bakery Web Platform",
    category: "Corporate & Brand",
    summary:
      "A warm, appetizing web experience for Baker's Inn showcasing fresh bread, pies, scones and doughnuts, with product ranges, recipes, kid's corner games, factory tour and donation requests.",
    img: bakersInn,
    link: "https://bakers-inn-react-js.vercel.app/",
    github: "https://github.com/pelagiasvare/bakersinnwebisite",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
  },
  {
    title: "The Wattle Company Corporate Portal",
    type: "Corporate Website",
    category: "Corporate & Brand",
    summary:
      "Official website for The Wattle Company showcasing sustainable timber & forestry products since 1945, product categories, and instant quote requests.",
    img: wattleCompany,
    link: "https://wattlecompany-project.vercel.app/",
    github: "https://github.com/pelagiasvare/wattlecompany",
    tech: ["React", "Vite", "Modern CSS", "Accessibility"],
  },
  {
    title: "Pelagia Portfolio — Styled Components & Vite",
    type: "Personal Portfolio Platform",
    category: "Web Apps",
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
    summary:
      "A responsive contact form interface built with React, featuring user input validation, structured layout, and seamless EmailJS integration for direct inbox delivery.",
    img: contactForm,
    link: "https://formreactjs.vercel.app/",
    github: "https://github.com/pelagiasvare/formreactjs",
    tech: ["React", "EmailJS", "Form Validation", "CSS"],
  },
];

const categories: Category[] = [
  "All",
  "Web Apps",
  "E-Commerce & Marketplaces",
  "Corporate & Brand",
];

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
          Explore real-world live web applications, e-commerce marketplaces, and corporate brand
          platforms built with modern frontend frameworks and live deployments.
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
            <span className="text-xl font-medium text-primary">{featured.type}</span>
            <h2 className="my-2 text-3xl font-bold sm:text-4xl">{featured.title}</h2>
            <p className="font-medium text-muted-foreground leading-relaxed">{featured.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
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
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="w-full cursor-pointer overflow-hidden rounded-lg mb-4"
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
            <div className="flex w-full flex-col items-start justify-between flex-1">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                {p.type}
              </span>
              <h2 className="my-1 text-2xl font-bold">{p.title}</h2>
              <p className="my-2 text-sm font-normal text-muted-foreground leading-relaxed">
                {p.summary}
              </p>

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
                  Live Demo <ExternalLink size={16} />
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
