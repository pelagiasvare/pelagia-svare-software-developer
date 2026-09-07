import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Printer, ArrowLeft, Mail, Phone, Globe, Sparkles, Briefcase, GraduationCap, Code2, UserCheck } from "lucide-react";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Pelagia Portfolio" },
      {
        name: "description",
        content:
          "Official Resume of Pelagia Svare, Software Developer skilled in JavaScript, Python, C#, React, Node.js, and product design.",
      },
      { property: "og:title", content: "Resume — Pelagia Portfolio" },
      {
        property: "og:description",
        content:
          "View skills, experience, education, and credentials of Pelagia Svare.",
      },
    ],
  }),
  component: ResumePage,
});

function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="w-full px-4 sm:px-8 pb-20 pt-4 max-w-5xl mx-auto print:p-0 print:m-0 print:max-w-none">
      {/* Top Controls (Hidden when printing) */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold shadow-sm transition-colors hover:bg-muted"
          >
            <Printer size={16} /> Print Resume
          </button>
          <a
            href="/resume.pdf"
            download="Pelagia_Svare_Resume.pdf"
            className="inline-flex items-center gap-1.5 rounded-lg bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground shadow-sm transition-opacity hover:opacity-90"
          >
            <Download size={16} /> Download PDF
          </a>
        </div>
      </div>

      {/* Resume Container Sheet */}
      <article className="rounded-3xl border-2 border-border bg-card p-8 sm:p-12 shadow-[12px_12px_0_0_var(--color-secondary)] print:shadow-none print:border-none print:p-0 print:bg-transparent">
        {/* Header */}
        <header className="border-b-2 border-border/80 pb-8">
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-primary">
            Software Developer
          </span>
          <h1 className="mt-1 text-4xl sm:text-5xl font-black uppercase tracking-tight text-foreground">
            Pelagia Svare
          </h1>
          <p className="mt-4 text-base sm:text-lg font-medium leading-relaxed text-foreground max-w-3xl">
            Software Developer skilled in JavaScript, Python and C#, building user-focused web and
            application solutions. Experienced Scratch educator and mentor, passionate about software
            development and delivering impactful digital products.
          </p>
        </header>

        {/* 2-Column Body */}
        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 print:grid-cols-12 print:gap-8">
          {/* Left Column (Experience & Education) */}
          <div className="lg:col-span-7 print:col-span-7 flex flex-col gap-10">
            {/* Experience Section */}
            <section>
              <div className="flex items-center gap-2 border-b-2 border-foreground pb-1 mb-6">
                <Briefcase size={20} className="text-primary print:hidden" />
                <h2 className="text-2xl font-bold tracking-tight uppercase text-foreground">
                  Experience
                </h2>
              </div>

              <div className="flex flex-col gap-6">
                {/* Job 1 */}
                <div className="flex flex-col">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-lg font-bold text-foreground">Software Developer</h3>
                    <span className="text-xs font-semibold text-muted-foreground text-right">
                      Uncommon.org <br className="hidden sm:inline" /> 2026 - Present
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm font-medium leading-relaxed text-foreground/90">
                    Contributed to development tasks and supported ongoing projects while teaching coding to school students.
                  </p>
                </div>

                {/* Job 2 */}
                <div className="flex flex-col">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-lg font-bold text-foreground">Scratch Coordinator</h3>
                    <span className="text-xs font-semibold text-muted-foreground text-right">
                      Uncommon.org <br className="hidden sm:inline" /> 2026 - Present
                    </span>
                  </div>
                  <p className="mt-1.5 text-sm font-medium leading-relaxed text-foreground/90">
                    Teach Scratch programming, guide learners through coding projects and computational thinking, and support creativity, problem-solving and digital literacy.
                  </p>
                </div>

                {/* Job 3 */}
                <div className="flex flex-col">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-lg font-bold text-foreground">Product Designer</h3>
                    <span className="text-xs font-semibold text-muted-foreground text-right">
                      Uncommon.org <br className="hidden sm:inline" /> 2026
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
              <div className="flex items-center gap-2 border-b-2 border-foreground pb-1 mb-6">
                <GraduationCap size={20} className="text-primary print:hidden" />
                <h2 className="text-2xl font-bold tracking-tight uppercase text-foreground">
                  Education
                </h2>
              </div>

              <div className="flex flex-col gap-5">
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

          {/* Right Column (Contact, Highlights, Core Skills, References) */}
          <div className="lg:col-span-5 print:col-span-5 flex flex-col gap-10">
            {/* Contact Section */}
            <section>
              <div className="flex items-center gap-2 border-b-2 border-foreground pb-1 mb-4">
                <Mail size={18} className="text-primary print:hidden" />
                <h2 className="text-2xl font-bold tracking-tight uppercase text-foreground">
                  Contact
                </h2>
              </div>
              <div className="flex flex-col gap-1.5 text-sm font-medium text-foreground">
                <a
                  href="mailto:pelagiasvare2002@gmail.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  pelagiasvare2002@gmail.com
                </a>
                <a href="tel:+263781648526" className="hover:text-primary transition-colors">
                  +263 78 164 8526
                </a>
                <div className="mt-1">
                  <span className="font-bold block text-xs uppercase tracking-wider text-muted-foreground">Portfolio</span>
                  <a
                    href="https://pelagia-svare-software-developer.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary transition-colors break-all"
                  >
                    pelagia-svare-software-developer.vercel.app
                  </a>
                </div>
              </div>
            </section>

            {/* Profile Highlights Section */}
            <section>
              <div className="flex items-center gap-2 border-b-2 border-foreground pb-1 mb-4">
                <Sparkles size={18} className="text-primary print:hidden" />
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
              <div className="flex items-center gap-2 border-b-2 border-foreground pb-1 mb-4">
                <Code2 size={18} className="text-primary print:hidden" />
                <h2 className="text-2xl font-bold tracking-tight uppercase text-foreground">
                  Core Skills
                </h2>
              </div>
              <p className="text-sm font-medium leading-relaxed text-foreground">
                C# &bull; .NET &bull; Entity Framework &bull; JavaScript &bull; TypeScript &bull; Python &bull; HTML &bull; CSS &bull; Node.js &bull; React &bull; Git &bull; GitHub &bull; IT Support &bull; Scratch Programming &bull; Vite &bull; Styled Components &bull; Vercel &bull; Prompt engineering
              </p>
            </section>

            {/* References Section */}
            <section>
              <div className="flex items-center gap-2 border-b-2 border-foreground pb-1 mb-4">
                <UserCheck size={18} className="text-primary print:hidden" />
                <h2 className="text-2xl font-bold tracking-tight uppercase text-foreground">
                  References
                </h2>
              </div>
              <div className="text-sm font-medium text-foreground">
                <p className="font-bold text-base">Tonderai Kawere</p>
                <p className="text-muted-foreground text-xs font-semibold mb-1">Software Developer</p>
                <p>078 252 8050</p>
                <a
                  href="mailto:tonderai@uncommon.org"
                  className="text-primary underline underline-offset-2 hover:opacity-80"
                >
                  tonderai@uncommon.org
                </a>
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
