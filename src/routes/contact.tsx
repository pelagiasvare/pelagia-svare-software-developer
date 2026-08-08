import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Send, Mail, MapPin, Phone, CheckCircle2, User, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Pelagia Svare — Software Developer" },
      {
        name: "description",
        content:
          "Get in touch with Pelagia Svare, software developer and product designer. Fill out the contact form or send a message directly to pelagiasvare2002@gmail.com.",
      },
      { property: "og:title", content: "Contact Pelagia Svare" },
      {
        property: "og:description",
        content: "Send a message or inquiry directly to Pelagia Svare.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link to open user's default email client pre-filled to pelagiasvare2002@gmail.com
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name} ${formData.surname}`);
    const body = encodeURIComponent(
      `Name: ${formData.name} ${formData.surname}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:pelagiasvare2002@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <main className="w-full px-8 pb-16 md:px-16 lg:px-32">
      <h1 className="mb-6 w-full text-center text-4xl font-bold uppercase tracking-tight sm:text-6xl lg:text-7xl">
        Get In Touch
      </h1>
      <p className="mb-16 w-full text-center text-lg font-medium text-muted-foreground max-w-2xl mx-auto">
        Have a project idea, question, or collaboration opportunity? Fill out the form below or send an email directly to <a href="mailto:pelagiasvare2002@gmail.com" className="text-primary font-semibold underline underline-offset-4">pelagiasvare2002@gmail.com</a>.
      </p>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 max-w-6xl mx-auto">
        {/* Contact Info Sidebar */}
        <div className="lg:col-span-4 flex flex-col gap-6 justify-between rounded-3xl border-2 border-border bg-card p-8 shadow-[8px_8px_0_0_var(--color-secondary)]">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-secondary p-3 text-secondary-foreground shrink-0">
                  <Mail size={22} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</h3>
                  <a href="mailto:pelagiasvare2002@gmail.com" className="text-sm sm:text-base font-bold text-foreground hover:text-primary transition-colors break-all block">
                    pelagiasvare2002@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-secondary p-3 text-secondary-foreground shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone</h3>
                  <a href="tel:+263715751664" className="text-base font-bold text-foreground hover:text-primary transition-colors">
                    +263 71 575 1664
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-secondary p-3 text-secondary-foreground shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Location</h3>
                  <p className="text-base font-bold text-foreground">
                    Bulawayo, Zimbabwe
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border/80 bg-background/50 p-4 mt-6">
            <p className="text-xs text-muted-foreground font-medium">
              💡 Fast Response Guaranteed — All form submissions trigger an immediate mail composition to <span className="font-semibold text-foreground break-all">pelagiasvare2002@gmail.com</span>.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-8 rounded-3xl border-2 border-border bg-card p-8 shadow-[10px_10px_0_0_var(--color-secondary)]">
          <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
          <p className="text-sm font-medium text-muted-foreground mb-8">
            Fill out the form below and I&apos;ll respond as soon as possible.
          </p>

          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-secondary/30 border-2 border-secondary">
              <CheckCircle2 size={56} className="text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">Message Composed!</h3>
              <p className="text-muted-foreground max-w-md mb-6">
                Your message has been formatted and opened in your email client addressed to <strong className="text-foreground">pelagiasvare2002@gmail.com</strong>.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="rounded-lg bg-secondary px-6 py-2 text-sm font-semibold text-secondary-foreground hover:opacity-90 transition-opacity"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold text-foreground flex items-center gap-1.5">
                    <User size={16} /> Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="rounded-xl border-2 border-border bg-background px-4 py-3 text-sm font-medium focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="surname" className="text-sm font-bold text-foreground">
                    Surname
                  </label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    required
                    placeholder="Enter your surname"
                    value={formData.surname}
                    onChange={handleChange}
                    className="rounded-xl border-2 border-border bg-background px-4 py-3 text-sm font-medium focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-bold text-foreground">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="rounded-xl border-2 border-border bg-background px-4 py-3 text-sm font-medium focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-xl border-2 border-border bg-background px-4 py-3 text-sm font-medium focus:border-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold text-foreground flex items-center gap-1.5">
                  <MessageSquare size={16} /> Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="rounded-xl border-2 border-border bg-background px-4 py-3 text-sm font-medium focus:border-primary focus:outline-none transition-colors resize-y"
                />
              </div>

              <button
                type="submit"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-secondary py-3.5 px-8 text-base font-bold text-secondary-foreground transition-all hover:opacity-95 hover:shadow-md active:scale-[0.99]"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
