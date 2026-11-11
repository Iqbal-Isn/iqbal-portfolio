import { useState } from "react";
import SelectionBadge from "./SelectionBadge";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        form.reset();
      } else {
        setStatus({
          type: "error",
          message: "Oops! There was a problem submitting your form.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Info */}
          <div className="lg:col-span-5">
            <div className="mb-4">
              <SelectionBadge>Get In Touch</SelectionBadge>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold tracking-tight text-[#0D0D0D] leading-[1.2] mb-5">
              Let&apos;s Discuss Your Next Project
            </h2>
            <p className="text-sm sm:text-base text-[#666666] leading-relaxed mb-8">
              I&apos;m always open to discussing web development work, UI/UX
              design collaborations, or opportunities to bring your ideas to
              life.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:iqbalissn20@gmail.com"
                className="group flex items-center gap-4 border-[1.5px] border-[#111111] bg-[#F7F8FA] p-4 shadow-[4px_4px_0px_#111111] transition-transform hover:-translate-y-0.5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border-[1.5px] border-[#111111] bg-[#00D67E] text-[#0D0D0D]">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <div>
                  <span className="block text-xs font-semibold text-[#666666]">
                    Email Address
                  </span>
                  <span className="text-sm font-bold text-[#0D0D0D] group-hover:text-[#00BF70] transition-colors">
                    iqbalissn20@gmail.com
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Neo-Brutalist Form */}
          <form
            action="https://formspree.io/f/xpwygzqk"
            method="POST"
            onSubmit={handleSubmit}
            className="lg:col-span-7 border-[1.5px] border-[#111111] bg-white p-6 sm:p-8 shadow-[6px_6px_0px_#111111]"
          >
            {status.type && (
              <div
                className={`mb-6 border-[1.5px] border-[#111111] p-3.5 text-xs sm:text-sm font-semibold ${
                  status.type === "success"
                    ? "bg-[#00D67E]/20 text-[#0D0D0D]"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {status.message}
              </div>
            )}

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-xs font-bold uppercase tracking-wider text-[#0D0D0D] mb-2"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  autoComplete="given-name"
                  placeholder="Iqbal"
                  className="block w-full border-[1.5px] border-[#111111] bg-[#F7F8FA] px-3.5 py-2.5 text-sm text-[#0D0D0D] placeholder:text-[#8E8E93] focus:bg-white focus:outline-none focus:shadow-[3px_3px_0px_#00D67E] transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-xs font-bold uppercase tracking-wider text-[#0D0D0D] mb-2"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  autoComplete="family-name"
                  placeholder="Herlambang"
                  className="block w-full border-[1.5px] border-[#111111] bg-[#F7F8FA] px-3.5 py-2.5 text-sm text-[#0D0D0D] placeholder:text-[#8E8E93] focus:bg-white focus:outline-none focus:shadow-[3px_3px_0px_#00D67E] transition-all"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-xs font-bold uppercase tracking-wider text-[#0D0D0D] mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="block w-full border-[1.5px] border-[#111111] bg-[#F7F8FA] px-3.5 py-2.5 text-sm text-[#0D0D0D] placeholder:text-[#8E8E93] focus:bg-white focus:outline-none focus:shadow-[3px_3px_0px_#00D67E] transition-all"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-wider text-[#0D0D0D] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell me about your project idea..."
                  className="block w-full border-[1.5px] border-[#111111] bg-[#F7F8FA] px-3.5 py-2.5 text-sm text-[#0D0D0D] placeholder:text-[#8E8E93] focus:bg-white focus:outline-none focus:shadow-[3px_3px_0px_#00D67E] transition-all"
                />
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={isLoading}
                className="btn-brutalist w-full sm:w-auto disabled:opacity-50"
              >
                <span>{isLoading ? "Sending..." : "Send Message"}</span>
                <svg
                  className="w-4 h-4 text-[#00D67E]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M17 7H8M17 7V16"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
