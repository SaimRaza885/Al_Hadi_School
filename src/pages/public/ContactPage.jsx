import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  ChevronRight,
  MessageSquare,
} from "lucide-react";
import { PageHero } from "@/components/public/PageHero";
import { siteContent } from "@/data/siteContent.data";
import { Reveal } from "@/components/shared/Reveal";

const cardIcons = {
  MapPin: MapPin,
  Phone: Phone,
  Mail: Mail,
};

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { contactPage, contact } = siteContent;

  const handleChange = (
    e
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clean phone number: remove non-numeric digits
    const targetPhone = contact.phone.replace(/[^0-9]/g, "");

    // Format the WhatsApp message text
    const text = `*New Contact Form Submission*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Subject:* ${formData.subject}\n` +
      `*Message:* ${formData.message}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodedText}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");

    setSent(true);
  };

  return (
    <div className="w-full flex flex-col">
      <PageHero
        title="Contact Us"
        subtitle={contactPage.heroSubtitle}
        crumb="Contact"
      />

      {/* Contact cards */}
      <section className="py-16 bg-background border-b border-border-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactPage.cards.map((card, idx) => {
              const Icon = cardIcons[card.icon] || MapPin;
              return (
                <Reveal key={card.title} delay={idx * 80}>
                  <div className="bg-surface border border-border rounded-xl p-6 shadow-card hover:shadow-md transition-all text-center h-full flex flex-col items-center">
                    <div className="size-12 rounded-xl bg-primary-light flex items-center justify-center text-primary mb-4">
                      <Icon className="size-6" />
                    </div>
                    <h3 className="text-base font-bold text-text-primary">{card.title}</h3>
                    <div className="mt-2 space-y-1 text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {card.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Message form + side info */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Send a Message</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight mt-2 mb-8">
                  We'd Love to Hear From You
                </h2>
              </Reveal>

              {sent ? (
                <Reveal>
                  <div className="bg-success-light border border-success/20 rounded-xl p-8 text-center">
                    <CheckCircle2 className="size-10 text-success mx-auto mb-3" />
                    <h3 className="text-lg font-bold text-success-foreground">Redirecting to WhatsApp!</h3>
                    <p className="text-sm text-text-secondary mt-1 max-w-md mx-auto">
                      Thank you for reaching out. A WhatsApp window should have opened to send your inquiry directly to our team.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="mt-6 text-xs font-bold text-primary hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                </Reveal>
              ) : (
                <Reveal delay={100}>
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-1.5">
                        Full Name <span className="text-error">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full bg-background border border-border rounded-md px-3.5 py-2.5 text-sm text-text-primary placeholder:text-text-subtle focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-1.5">
                        Email Address 
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full bg-background border border-border rounded-md px-3.5 py-2.5 text-sm text-text-primary placeholder:text-text-subtle focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-1.5">
                        Subject <span className="text-error">*</span>
                      </label>
                      <select
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-background border border-border rounded-md px-3.5 py-2.5 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      >
                        <option value="" disabled>
                          Select a topic
                        </option>
                        <option value="Admissions & Enrollment">Admissions & Enrollment</option>
                        <option value="Academics & Curriculum">Academics & Curriculum</option>
                        <option value="Fees & Accounts">Fees & Accounts</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-1.5">
                        Message <span className="text-error">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        className="w-full bg-background border border-border rounded-md px-3.5 py-2.5 text-sm text-text-primary placeholder:text-text-subtle focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary resize-y transition-colors"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 active:bg-emerald-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 shadow-sm"
                      >
                        <MessageSquare className="size-4" />
                        <span>Send via WhatsApp</span>
                      </button>
                    </div>
                  </form>
                </Reveal>
              )}
            </div>

            {/* Office hours + map link */}
            <div className="lg:col-span-5 space-y-6">
              <Reveal delay={150}>
                <div className="bg-primary-muted border border-border rounded-xl p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="size-10 rounded-xl bg-primary-light flex items-center justify-center text-primary">
                      <Clock className="size-5" />
                    </div>
                    <h3 className="text-base font-bold text-text-primary">Office Hours</h3>
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm text-text-secondary">
                    <div className="flex items-center justify-between gap-3">
                      <span>Monday – Friday</span>
                      <span className="font-semibold text-text-primary">8:00 AM – 2:30 PM</span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span>Saturday</span>
                      <span className="font-semibold text-text-primary">8:00 AM – 12:30 PM</span>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                      <span>Sunday</span>
                      <span className="font-semibold text-text-muted">Closed</span>
                    </div>
                  </div>
                  <div className="mt-5 pt-5 border-t border-border space-y-2.5 text-sm">
                    <p className="inline-flex items-center gap-2 text-text-secondary">
                      <MapPin className="size-4 text-primary shrink-0" />
                      {contact.address}
                    </p>
                    <p className="inline-flex items-center gap-2 text-text-secondary">
                      <Phone className="size-4 text-primary shrink-0" />
                      {contact.phone}
                    </p>
                    <br/>
                    <p className="inline-flex items-center gap-2 text-text-secondary">
                      <Mail className="size-4 text-primary shrink-0" />
                      {contact.email}
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between bg-background border border-border rounded-xl p-6 hover:border-primary transition-colors shadow-card"
                >
                  <div>
                    <h3 className="text-base font-bold text-text-primary">Find Us on the Map</h3>
                    <p className="text-xs text-text-muted mt-1">Open directions in Google Maps</p>
                  </div>
                  <ChevronRight className="size-5 text-primary group-hover:translate-x-1 transition-transform" />
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}