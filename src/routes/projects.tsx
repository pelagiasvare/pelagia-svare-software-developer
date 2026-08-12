import { createFileRoute } from "@tanstack/react-router";
import { Github, ExternalLink } from "lucide-react";
import foodieland from "@/assets/project-foodieland.png";
import wattleCompany from "@/assets/project-wattle-company.png";
import chickenInn from "@/assets/project-chicken-inn.png";
import bakersInn from "@/assets/project-bakers-inn.png";
import contactForm from "@/assets/project-contact-form.png";
import todoList from "@/assets/project-todo-list.png";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Pelagia Svare, Software Developer" },
      {
        name: "description",
        content:
          "Featured software development and product design projects by Pelagia Svare, including Foodieland, The Wattle Company, Chicken Inn, Baker's Inn, React Contact Form, and To-Do App.",
      },
      { property: "og:title", content: "Projects — Pelagia Svare" },
      {
        property: "og:description",
        content: "Explore Web Applications, Corporate Sites, React Components, and UI/UX designs built by Pelagia Svare.",
      },
    ],
  }),
  component: Projects,
});

const featured = {
  title: "Foodieland — Recipe & Delights Platform",
  summary:
    "A mouth-watering culinary web application featuring hand-picked recipes, dish categories, cooking time indicators, ingredient breakdowns, and an intuitive UI designed for food enthusiasts.",
  img: foodieland,
  type: "Featured Web Application",
  link: "https://foodlide.vercel.app/",
};

const others = [
  {
    title: "Baker's Inn — Fresh Bread & Bakery Website",
    type: "Bakery Web Platform",
    summary:
      "A warm, appetizing web experience for Baker's Inn showcasing fresh bread, pies, scones and doughnuts, with product ranges, recipes, kid's corner games, factory tour and donation requests.",
    img: bakersInn,
    link: "https://bakers-inn-react-js.vercel.app/",
  },
  {
    title: "The Wattle Company",
    type: "Corporate Website",
    summary:
      "Official website for The Wattle Company showcasing sustainable timber & forestry products since 1945, product categories, and instant quote requests.",
    img: wattleCompany,
    link: "https://wattlecompany-project.vercel.app/",
  },
  {
    title: "Chicken Inn Website",
    type: "Fast Food Web Platform",
    summary:
      "A bold, high-energy fast-food restaurant web experience built for Chicken Inn with dynamic hero banners, food showcases, and quick menu navigation.",
    img: chickenInn,
    link: "https://chickeninnwebsite.vercel.app/",
  },
  {
    title: "React Contact Form",
    type: "Interactive Component",
    summary:
      "A responsive contact form interface built with React, featuring user input validation, structured layout (Name, Surname, Phone, Email, Message), and smooth submit interactions.",
    img: contactForm,
    link: "https://formreactjs.vercel.app/",
  },
  {
    title: "To-Do List Task Manager",
    type: "Web Application",
    summary:
      "An intuitive task management dashboard with metric counters for Total Tasks, Completed, and Failed tasks, rapid task addition, and clean state feedback.",
    img: todoList,
    link: "https://todolist-app.vercel.app/",
  },
];

function Projects() {
  return (
    <main className="w-full px-8 pb-16 md:px-16 lg:px-32">
      <h1 className="mb-16 w-full text-center text-4xl font-bold uppercase tracking-tight sm:text-6xl lg:text-7xl">
        My Featured Projects
      </h1>

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
          <p className="font-medium text-muted-foreground">{featured.summary}</p>
          <div className="mt-6 flex items-center gap-4">
            <a href="#" aria-label="GitHub repository" className="w-8 text-foreground hover:text-primary">
              <Github size={28} />
            </a>
            <a
              href={featured.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg bg-secondary px-6 py-2.5 text-lg font-semibold text-secondary-foreground transition-colors hover:opacity-90"
            >
              Visit Project <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </article>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {others.map((p) => (
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
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">{p.type}</span>
              <h2 className="my-1 text-2xl font-bold">{p.title}</h2>
              <p className="my-2 text-sm font-normal text-muted-foreground leading-relaxed">{p.summary}</p>
              <div className="mt-4 flex w-full items-center justify-between pt-2 border-t border-border/50">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-lg font-semibold underline underline-offset-4 hover:text-primary transition-colors"
                >
                  Visit Project <ExternalLink size={18} />
                </a>
                <a href="#" aria-label="GitHub repository" className="text-foreground hover:text-primary">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}