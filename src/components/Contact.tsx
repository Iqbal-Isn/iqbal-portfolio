"use client";

import { useState } from "react";

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
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="isolate bg-[var(--bg-primary)] py-24 sm:py-32" id="contact">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl mb-6">Contact</h2>
            <p className="text-lg leading-8 text-[var(--text-secondary)] mb-8">
              Sunt vel labore necessitatibus? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <a
              href="mailto:iqbalissn20@gmail.com"
              className="text-lg font-medium text-[var(--text-primary)] hover:text-[var(--primary-accent)] transition-colors inline-flex items-center gap-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              iqbalissn20@gmail.com
            </a>
          </div>

          {/* Form */}
          <form
            action="https://formspree.io/f/xpwygzqk"
            method="POST"
            onSubmit={handleSubmit}
            className="flex-1"
          >
            {status.type && (
              <div
                className={`mb-6 p-4 rounded-lg text-sm ${
                  status.type === "success"
                    ? "bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400"
                    : "bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400"
                }`}
              >
                {status.message}
              </div>
            )}

            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-[var(--text-primary)]">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-[var(--text-primary)] bg-[var(--bg-secondary)] shadow-sm ring-1 ring-inset ring-[var(--border-subtle)] placeholder:text-[var(--text-secondary)] focus:ring-2 focus:ring-inset focus:ring-[var(--primary-accent)] sm:text-sm sm:leading-6 transition-all"
                    placeholder="John"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-[var(--text-primary)]">
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-[var(--text-primary)] bg-[var(--bg-secondary)] shadow-sm ring-1 ring-inset ring-[var(--border-subtle)] placeholder:text-[var(--text-secondary)] focus:ring-2 focus:ring-inset focus:ring-[var(--primary-accent)] sm:text-sm sm:leading-6 transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-[var(--text-primary)]">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-[var(--text-primary)] bg-[var(--bg-secondary)] shadow-sm ring-1 ring-inset ring-[var(--border-subtle)] placeholder:text-[var(--text-secondary)] focus:ring-2 focus:ring-inset focus:ring-[var(--primary-accent)] sm:text-sm sm:leading-6 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-[var(--text-primary)]">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-[var(--text-primary)] bg-[var(--bg-secondary)] shadow-sm ring-1 ring-inset ring-[var(--border-subtle)] placeholder:text-[var(--text-secondary)] focus:ring-2 focus:ring-inset focus:ring-[var(--primary-accent)] sm:text-sm sm:leading-6 transition-all"
                    placeholder="Tell me about your project..."
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                disabled={isLoading}
                className="block w-full rounded-md bg-[var(--text-primary)] px-3.5 py-2.5 text-center text-sm font-semibold text-[var(--bg-primary)] shadow-sm hover:bg-[var(--text-secondary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--text-primary)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : "Let's talk"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
