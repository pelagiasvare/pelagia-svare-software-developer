import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Download,
  Printer,
  ArrowLeft,
  ExternalLink,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  Globe,
  Sparkles,
  Code2,
  UserCheck,
  FileText,
} from "lucide-react";
import { downloadCv } from "@/lib/downloadCv";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "Pelagia Svare CV — Software Developer" },
      {
        name: "description",
        content:
          "Official CV of Pelagia Svare, Software Developer skilled in JavaScript, Python, C#, React, and Node.js.",
      },
      { property: "og:title", content: "Pelagia Svare CV" },
      {
        property: "og:description",
        content:
          "Official CV of Pelagia Svare — Experience, Education, Skills, Highlights, and References.",
      },
    ],
  }),
  component: CvPage,
});

const coreSkills = [
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
];

function CvPage() {
  const [viewMode, setViewMode] = useState<"web" | "pdf">("web");

  const handlePrint = () => {
    const prevTitle = document.title;
    document.title = "Pelagia Svare CV";
    window.print();
    setTimeout(() => {
      document.title = prevTitle;
    }, 1000);
  };

  return (
    <main className="w-full px-4 sm:px-8 pb-20 pt-4 max-w-5xl mx-auto print:p-0 print:m-0 print:max-w-none">
      {/* Action Bar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>

        <div className="flex flex-wrap items-center gap-3">
          {/* View Mode Toggle */}
          <div className="inline-flex rounded-lg border border-border bg-card p-0.5 shadow-sm">
            <button
              type="button"
              onClick={() => setViewMode("web")}
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-bold transition-all ${
                viewMode === "web"
                  ? "bg-secondary text-secondary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <FileText size={14} /> Web View
            </button>
            <button
              type="button"
              onClick={() => setViewMode("pdf")}
              className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-bold transition-all ${
                viewMode === "pdf"
                  ? "bg-secondary text-secondary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <ExternalLink size={14} /> PDF View
            </button>
          </div>

          <a
            href="/Pelagia%20Svare%20CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold shadow-sm transition-colors hover:bg-muted"
          >
            Open PDF <ExternalLink size={16} />
          </a>

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold shadow-sm transition-colors hover:bg-muted"
          >
            <Printer size={16} /> Print CV
          </button>

          <a
            href="/Pelagia%20Svare%20CV.pdf"
            download="Pelagia Svare CV.pdf"
            onClick={downloadCv}
            className="inline-flex items-center gap-1.5 rounded-lg bg-secondary px-5 py-2 text-sm font-bold text-secondary-foreground shadow-sm transition-opacity hover:opacity-90 cursor-pointer"
          >
            <Download size={16} /> Download CV (PDF)
          </a>
        </div>
      </div>

      {viewMode === "web" ? (
        /* Aligned Web-Native CV (Matches Website Aesthetics) */
        <article className="w-full rounded-2xl border-2 border-border bg-card p-6 sm:p-10 shadow-[10px_10px_0_0_var(--color-secondary)] print:border-none print:shadow-none print:p-0">
          {/* Header */}
          <header className="border-b-2 border-border pb-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
              <div>
                <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground uppercase">
                  Pelagia Svare
                </h1>
                <p className="mt-1 text-xl sm:text-2xl font-bold text-primary">
                  Software Developer
                </p>
              </div>
            </div>
            <p className="mt-4 text-base sm:text-lg font-medium leading-relaxed text-foreground/90 max-w-4xl">
              Software Developer skilled in JavaScript, Python and C#, building user-focused web and application solutions. Experienced Scratch educator and mentor, passionate about software development and delivering impactful digital products.
            </p>
          </header>

          {/* 2-Column Grid matching the Canva layout & Website Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 print:grid-cols-12">
            {/* Left Column: Experience & Education */}
            <div className="lg:col-span-7 print:col-span-7 flex flex-col gap-10">
              {/* Experience Section */}
              <section>
                <div className="flex items-center gap-2 border-b-2 border-foreground pb-2 mb-6">
                  <Briefcase size={22} className="text-primary print:hidden" />
                  <h2 className="text-2xl font-bold tracking-tight uppercase text-foreground">
                    Experience
                  </h2>
                </div>

                <div className="flex flex-col gap-6">
                  {/* Job 1 */}
                  <div className="flex flex-col">
                    <div className="flex items-baseline justify-between gap-2 flex-wrap">
                      <h3 className="text-lg font-bold text-foreground">Software Developer</h3>
                      <span className="text-xs font-semibold text-muted-foreground">
                        Uncommon.org &bull; 2026 - Present
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm font-medium leading-relaxed text-foreground/90">
                      Contributed to development tasks and supported ongoing projects while teaching coding to school students.
                    </p>
                  </div>

                  {/* Job 2 */}
                  <div className="flex flex-col">
                    <div className="flex items-baseline justify-between gap-2 flex-wrap">
                      <h3 className="text-lg font-bold text-foreground">Scratch Coordinator</h3>
                      <span className="text-xs font-semibold text-muted-foreground">
                        Uncommon.org &bull; 2026 - Present
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm font-medium leading-relaxed text-foreground/90">
                      Teach Scratch programming, guide learners through coding projects and computational thinking, and support creativity, problem-solving and digital literacy.
                    </p>
                  </div>

                  {/* Job 3 */}
                  <div className="flex flex-col">
                    <div className="flex items-baseline justify-between gap-2 flex-wrap">
                      <h3 className="text-lg font-bold text-foreground">Product Designer</h3>
                      <span className="text-xs font-semibold text-muted-foreground">
                        Uncommon.org &bull; 2026
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm font-medium leading-relaxed text-foreground/90">
                      Designed and built a mobile app connecting homeowners with trusted service providers. Conducted user research, created wireframes and prototypes, defined product features, and collaborated on development.
                    </p>
                  </div>
                </div>
              </section>

              {/* Education Section */}
              <section>
                <div className="flex items-center gap-2 border-b-2 border-foreground pb-2 mb-6">
                  <GraduationCap size={22} className="text-primary print:hidden" />
                  <h2 className="text-2xl font-bold tracking-tight uppercase text-foreground">
                    Education
                  </h2>
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-base font-bold text-foreground">FreeCodeCamp 2026</h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      Responsive Website Design Certification
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-foreground">Uxcel 2026</h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      UX/Product Design learning
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-foreground">Uncommon.org 2026</h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      Information Technology &bull; Software Development
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column: Contact, Highlights, Core Skills, References */}
            <div className="lg:col-span-5 print:col-span-5 flex flex-col gap-8">
              {/* Contact Section */}
              <section>
                <div className="flex items-center gap-2 border-b-2 border-foreground pb-2 mb-4">
                  <Mail size={20} className="text-primary print:hidden" />
                  <h2 className="text-2xl font-bold tracking-tight uppercase text-foreground">
                    Contact
                  </h2>
                </div>
                <div className="flex flex-col gap-2 text-sm font-medium text-foreground">
                  <a
                    href="mailto:pelagiasvare2002@gmail.com"
                    className="flex items-center gap-2 hover:text-primary transition-colors break-all"
                  >
                    <Mail size={15} className="text-muted-foreground shrink-0" />
                    pelagiasvare2002@gmail.com
                  </a>
                  <a
                    href="tel:+263781648526"
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                  >
                    <Phone size={15} className="text-muted-foreground shrink-0" />
                    +263 78 164 8526
                  </a>
                  <a
                    href="https://pelagia-svare-software-developer.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 hover:text-primary transition-colors break-all"
                  >
                    <Globe size={15} className="text-muted-foreground shrink-0" />
                    pelagia-svare-software-developer.vercel.app
                  </a>
                </div>
              </section>

              {/* Profile Highlights Section */}
              <section>
                <div className="flex items-center gap-2 border-b-2 border-foreground pb-2 mb-4">
                  <Sparkles size={20} className="text-primary print:hidden" />
                  <h2 className="text-2xl font-bold tracking-tight uppercase text-foreground">
                    Profile Highlights
                  </h2>
                </div>
                <ul className="flex flex-col gap-3 text-sm font-medium text-foreground/90 list-disc pl-5">
                  <li>
                    Built a home services platform connecting homeowners with trusted service providers during Product Design training. Conducted user research, created wireframes and prototypes, and designed user-friendly workflows.
                  </li>
                  <li>
                    Built a responsive portfolio website during Software Development training, focusing on accessibility, responsive design and clean, user-friendly interfaces.
                  </li>
                </ul>
              </section>

              {/* Core Skills Section */}
              <section>
                <div className="flex items-center gap-2 border-b-2 border-foreground pb-2 mb-4">
                  <Code2 size={20} className="text-primary print:hidden" />
                  <h2 className="text-2xl font-bold tracking-tight uppercase text-foreground">
                    Core Skills
                  </h2>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {coreSkills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-border bg-card px-2.5 py-1 text-xs font-semibold text-foreground shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* References Section */}
              <section>
                <div className="flex items-center gap-2 border-b-2 border-foreground pb-2 mb-4">
                  <UserCheck size={20} className="text-primary print:hidden" />
                  <h2 className="text-2xl font-bold tracking-tight uppercase text-foreground">
                    References
                  </h2>
                </div>
                <div className="rounded-xl border border-border bg-card p-3 text-sm font-medium text-foreground shadow-sm">
                  <p className="font-bold text-base">Tonderai Kawere</p>
                  <p className="text-muted-foreground text-xs font-semibold mb-1">
                    Software Developer &bull; Uncommon.org
                  </p>
                  <p className="text-sm">078 252 8050</p>
                  <a
                    href="mailto:tondekawere@gmail.com"
                    className="text-primary text-xs font-semibold underline underline-offset-2 hover:opacity-80"
                  >
                    tondekawere@gmail.com
                  </a>
                  <p className="mt-2 text-xs text-muted-foreground italic">Available upon request.</p>
                </div>
              </section>
            </div>
          </div>
        </article>
      ) : (
        /* Embedded PDF Viewer Mode */
        <div className="w-full rounded-2xl border-2 border-border bg-card p-2 sm:p-4 shadow-[10px_10px_0_0_var(--color-secondary)]">
          <object
            data="/Pelagia%20Svare%20CV.pdf#toolbar=1"
            type="application/pdf"
            className="w-full h-[85vh] min-h-[700px] rounded-xl"
          >
            <iframe
              src="/Pelagia%20Svare%20CV.pdf"
              title="Pelagia Svare CV"
              className="w-full h-[85vh] min-h-[700px] rounded-xl border-0"
            >
              <p className="p-4 text-center text-sm">
                Your browser does not support inline PDF viewing.{" "}
                <a
                  href="/Pelagia%20Svare%20CV.pdf"
                  download="Pelagia Svare CV.pdf"
                  onClick={downloadCv}
                  className="text-primary underline font-bold"
                >
                  Click here to download Pelagia Svare CV.pdf
                </a>
              </p>
            </iframe>
          </object>
        </div>
      )}
    </main>
  );
}
