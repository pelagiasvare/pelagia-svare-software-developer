import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Printer, ArrowLeft, ExternalLink, Eye, FileText } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "pelagia svare cv" },
      {
        name: "description",
        content:
          "Curriculum Vitae of Pelagia Svare, Software Developer skilled in JavaScript, Python, C#, React, and Node.js.",
      },
      { property: "og:title", content: "pelagia svare cv" },
      {
        property: "og:description",
        content:
          "Official CV of Pelagia Svare — Experience, Education, Skills, Highlights, and References.",
      },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  const [viewMode, setViewMode] = useState<"web" | "pdf">("web");

  const handlePrint = () => {
    const prevTitle = document.title;
    document.title = "pelagia svare cv";
    window.print();
    setTimeout(() => {
      document.title = prevTitle;
    }, 1000);
  };

  return (
    <main className="w-full px-4 sm:px-8 pb-20 pt-4 max-w-5xl mx-auto print:p-0 print:m-0 print:max-w-none">
      {/* Action Bar */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setViewMode((m) => (m === "web" ? "pdf" : "web"))}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold shadow-sm transition-colors hover:bg-muted"
          >
            {viewMode === "web" ? (
              <>
                <Eye size={16} /> View PDF Embed
              </>
            ) : (
              <>
                <FileText size={16} /> View Web Layout
              </>
            )}
          </button>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold shadow-sm transition-colors hover:bg-muted"
          >
            Open in New Tab <ExternalLink size={16} />
          </a>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold shadow-sm transition-colors hover:bg-muted"
          >
            <Printer size={16} /> Print CV
          </button>
          <a
            href="/resume.pdf"
            download="pelagia svare cv.pdf"
            className="inline-flex items-center gap-1.5 rounded-lg bg-secondary px-5 py-2.5 text-sm font-bold text-secondary-foreground shadow-sm transition-opacity hover:opacity-90"
          >
            <Download size={16} /> Download CV (PDF)
          </a>
        </div>
      </div>

      {viewMode === "pdf" ? (
        <div className="rounded-2xl border-2 border-border bg-card p-4 shadow-[12px_12px_0_0_var(--color-secondary)] print:hidden">
          <iframe
            src="/resume.pdf"
            title="Pelagia Svare CV"
            className="w-full h-[900px] rounded-xl border-0"
          />
        </div>
      ) : (
        /* CV Paper Card (Exact design matching the uploaded resume) */
        <article className="rounded-2xl border-2 border-border bg-card p-8 sm:p-14 shadow-[12px_12px_0_0_var(--color-secondary)] print:shadow-none print:border-none print:p-0 print:bg-transparent">
          {/* Header */}
          <header className="pb-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Software Developer
            </h1>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-foreground">
              Pelagia Svare
            </h2>
            <p className="mt-4 text-base sm:text-lg font-normal leading-relaxed text-foreground max-w-3xl">
              Software Developer skilled in JavaScript, Python and C#, building user-focused web and
              application solutions. Experienced Scratch educator and mentor, passionate about software
              development and delivering impactful digital products.
            </p>
          </header>

          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 print:grid-cols-12 print:gap-8 border-t-2 border-border/40 pt-8">
            {/* Left Column (Experience & Education) */}
            <div className="lg:col-span-7 print:col-span-7 flex flex-col gap-10">
              {/* Experience */}
              <section>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground border-b-2 border-foreground pb-1 mb-6">
                  Experience
                </h3>

                <div className="flex flex-col gap-7">
                  {/* 1 */}
                  <div className="flex flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-lg font-bold text-foreground">Software Developer</h4>
                      <span className="text-sm font-medium text-foreground text-right shrink-0">
                        Uncommon.org <br /> 2026 - Present
                      </span>
                    </div>
                    <p className="mt-1 text-sm sm:text-base font-normal leading-relaxed text-foreground">
                      Contributed to development tasks and supported ongoing projects while teaching coding to school students.
                    </p>
                  </div>

                  {/* 2 */}
                  <div className="flex flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-lg font-bold text-foreground">Scratch Coordinator</h4>
                      <span className="text-sm font-medium text-foreground text-right shrink-0">
                        Uncommon.org <br /> 2026 - Present
                      </span>
                    </div>
                    <p className="mt-1 text-sm sm:text-base font-normal leading-relaxed text-foreground">
                      Teach Scratch programming, guide learners through coding projects and computational thinking, and support creativity, problem-solving and digital literacy.
                    </p>
                  </div>

                  {/* 3 */}
                  <div className="flex flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <h4 className="text-lg font-bold text-foreground">Product Designer</h4>
                      <span className="text-sm font-medium text-foreground text-right shrink-0">
                        Uncommon.org <br /> 2026
                      </span>
                    </div>
                    <p className="mt-1 text-sm sm:text-base font-normal leading-relaxed text-foreground">
                      Designed and built a mobile app connecting homeowners with trusted service providers. Conducted user research, created wireframes and prototypes, defined product features, and collaborated on development.
                    </p>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground border-b-2 border-foreground pb-1 mb-6">
                  Education
                </h3>

                <div className="flex flex-col gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-foreground">FreeCodeCamp 2026</h4>
                    <p className="text-sm sm:text-base font-normal text-foreground">
                      Responsive Website Design Certification
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-foreground">Uxcel 2026</h4>
                    <p className="text-sm sm:text-base font-normal text-foreground">
                      UX/Product Design learning
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-foreground">Uncommon.org 2026</h4>
                    <p className="text-sm sm:text-base font-normal text-foreground">
                      Information Technology <br />
                      Software Development
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Right Column (Contact, Profile Highlights, Core Skills, References) */}
            <div className="lg:col-span-5 print:col-span-5 flex flex-col gap-10">
              {/* Contact */}
              <section>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground border-b-2 border-foreground pb-1 mb-4">
                  Contact
                </h3>
                <div className="flex flex-col gap-1.5 text-sm sm:text-base font-normal text-foreground">
                  <a
                    href="mailto:pelagiasvare2002@gmail.com"
                    className="hover:underline hover:text-primary transition-colors break-all"
                  >
                    pelagiasvare2002@gmail.com
                  </a>
                  <a
                    href="tel:+263781648526"
                    className="hover:underline hover:text-primary transition-colors"
                  >
                    +263 78 164 8526
                  </a>
                  <div className="mt-1">
                    <span className="font-normal block text-sm text-foreground">Portfolio:</span>
                    <a
                      href="https://pelagia-svare-software-developer.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline hover:text-primary transition-colors break-all"
                    >
                      pelagia-svare-software-developer.vercel.app
                    </a>
                  </div>
                </div>
              </section>

              {/* Profile Highlights */}
              <section>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground border-b-2 border-foreground pb-1 mb-4">
                  Profile Highlights
                </h3>
                <ul className="flex flex-col gap-4 text-sm sm:text-base font-normal text-foreground list-disc pl-5">
                  <li>
                    Built a home services platform connecting homeowners with trusted service providers during Product Design training. Conducted user research, created wireframes and prototypes, and designed user-friendly workflows.
                  </li>
                  <li>
                    Built a responsive portfolio website during Software Development training, focusing on accessibility, responsive design and clean, user-friendly interfaces.
                  </li>
                </ul>
              </section>

              {/* Core Skills */}
              <section>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground border-b-2 border-foreground pb-1 mb-4">
                  Core Skills
                </h3>
                <p className="text-sm sm:text-base font-normal leading-relaxed text-foreground">
                  C# • .NET • Entity Framework • JavaScript • TypeScript • Python • HTML • CSS • Node.js • React • Git • GitHub • IT Support • Scratch Programming • Vite • Styled Components , vercel, Prompt engineering
                </p>
              </section>

              {/* References */}
              <section>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-foreground border-b-2 border-foreground pb-1 mb-4">
                  References
                </h3>
                <div className="text-sm sm:text-base font-normal text-foreground">
                  <p>
                    <strong>Tonderai Kawere</strong> — Software Developer | 078 252 8050 |{" "}
                    <a
                      href="mailto:tonderai@uncommon.org"
                      className="underline hover:text-primary"
                    >
                      tonderai@uncommon.org
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </article>
      )}
    </main>
  );
}
