import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import developerPic from "@/assets/developer-pic.png";
import { HireMe } from "@/components/HireMe";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pelagia Svare — Software Developer & Product Designer" },
      {
        name: "description",
        content:
          "Portfolio of Pelagia Svare, a software developer and product designer building user-focused web and mobile solutions with JavaScript, React and Python.",
      },
      { property: "og:title", content: "Pelagia Svare — Software Developer & Product Designer" },
      {
        property: "og:description",
        content:
          "Building user-focused digital products with code and design. Explore my latest projects.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full items-center px-8 pb-16 pt-4 md:px-16 lg:min-h-[calc(100vh-14rem)] lg:px-32">
        <div className="flex w-full flex-col items-center justify-between gap-8 lg:flex-row lg:gap-16">
          <div className="w-full lg:w-1/2">
            <img
              src={developerPic}
              alt="Illustrated portrait of Pelagia Svare"
              width={1024}
              height={1024}
              className="h-auto w-full"
            />
          </div>
          <div className="rise-in flex w-full flex-col items-center self-center lg:w-1/2 lg:items-start">
            <h1 className="text-center text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-left xl:text-6xl">
              Building User-Focused Products With{" "}
              <span className="text-muted-foreground">Code And Design.</span>
            </h1>
            <p className="my-6 max-w-lg text-center text-base font-medium text-muted-foreground lg:text-left">
              I am a software developer skilled in JavaScript and Python, and a Scratch educator who
              loves turning ideas into practical web and mobile solutions. Explore my latest
              projects below.
            </p>
            <div className="flex items-center gap-6 self-center lg:self-start">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg border-2 border-secondary bg-secondary px-6 py-2.5 text-lg font-semibold text-secondary-foreground transition-colors hover:bg-background hover:text-foreground"
              >
                Resume <ExternalLink size={18} />
              </a>
              <a
                href="mailto:pelagiasvare2002@gmail.com"
                className="text-lg font-medium underline underline-offset-4"
              >
                Contact
              </a>
            </div>
            <Link
              to="/projects"
              className="mt-8 text-sm font-medium uppercase tracking-widest text-primary underline underline-offset-4"
            >
              See featured work
            </Link>
          </div>
        </div>
      </div>
      <HireMe />
    </main>
  );
}
