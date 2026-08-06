import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Github, Linkedin, Globe, Mail, Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
] as const;

const socials = [
  { href: "https://github.com", label: "GitHub", Icon: Github },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: Linkedin },
  { href: "https://pelagiaportfolio.vercel.app/", label: "Portfolio", Icon: Globe },
  { href: "mailto:pelagiasvare2002@gmail.com", label: "Email", Icon: Mail },
];

type NavPath = (typeof links)[number]["to"];

function NavLink({ to, label }: { to: NavPath; label: string }) {
  return (
    <Link
      to={to}
      className="group relative mx-4 text-base font-medium first:ml-0"
      activeProps={{ className: "font-semibold" }}
    >
      {label}
      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-foreground transition-[width] duration-300 group-hover:w-full" />
    </Link>
  );
}

export function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-20 flex w-full items-center justify-between px-8 py-8 md:px-16 lg:px-32">
      <button
        type="button"
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
        className="md:hidden"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className="hidden md:block">
        {links.map((l) => (
          <NavLink key={l.to} {...l} />
        ))}
      </nav>

      <Link
        to="/"
        className="absolute left-1/2 top-6 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-2 border-secondary bg-secondary text-lg font-bold text-secondary-foreground transition-transform hover:scale-105"
      >
        PS
      </Link>

      <nav className="flex items-center gap-4">
        {socials.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="transition-transform hover:scale-125 hover:text-primary"
          >
            <Icon size={20} />
          </a>
        ))}
      </nav>

      {open && (
        <nav className="absolute left-1/2 top-24 z-30 flex w-[85%] -translate-x-1/2 flex-col items-center gap-4 rounded-lg bg-secondary/95 py-8 text-secondary-foreground backdrop-blur md:hidden">
          {links.map((l) => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-lg">
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}