import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, Printer, ArrowLeft, ExternalLink } from "lucide-react";
import { downloadCv } from "@/lib/downloadCv";

export const Route = createFileRoute("/resume")({
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
  component: ResumePage,
});

function ResumePage() {
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
          <a
            href="/Pelagia%20Svare%20CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold shadow-sm transition-colors hover:bg-muted"
          >
            Open PDF <ExternalLink size={16} />
          </a>
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold shadow-sm transition-colors hover:bg-muted"
          >
            <Printer size={16} /> Print CV
          </button>
          <a
            href="/Pelagia%20Svare%20CV.pdf"
            download="Pelagia Svare CV.pdf"
            onClick={downloadCv}
            className="inline-flex items-center gap-1.5 rounded-lg bg-secondary px-6 py-2.5 text-sm font-bold text-secondary-foreground shadow-sm transition-opacity hover:opacity-90 cursor-pointer"
          >
            <Download size={16} /> Download CV (PDF)
          </a>
        </div>
      </div>

      {/* Embedded PDF Viewer */}
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
    </main>
  );
}
