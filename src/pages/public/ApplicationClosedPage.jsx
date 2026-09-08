import { useState } from "react";
import {
  Lock,
  Calendar,
  CheckCircle2,
  PhoneCall,
  HelpCircle,
  FileText,
  MapPin,
  Sparkles,
  ChevronRight,
  Info,
} from "lucide-react";
import { PageHero } from "@/components/public/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { SEOHead } from "@/components/SEOHead";
import { siteContent } from "@/data/siteContent.data";

export function ApplicationClosedPage() {
  const { contact } = siteContent;

  return (
    <div className="w-full flex flex-col bg-background min-h-screen">
      <SEOHead
        title="Application Portal Closed"
        description="Current admission application status for Al-Hadi Academy Gilgit. Learn how to enquire and apply for grades 6-10 via the admissions office."
        path="/application"
      />
      {/* Hero Header */}
      {/* <PageHero
        title="Application Status"
        subtitle="Stay informed about upcoming application cycles, key enrollment dates, and campus tour opportunities."
        crumb="Application"
      /> */}

      {/* Main Content Section */}
      <section className="py-20 md:mt-20 ">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Status Card */}
          <Reveal>
            <div className="bg-surface border border-border/80 rounded-3xl p-8 sm:p-12 shadow-card text-center relative overflow-hidden">
              {/* Background Accent Mesh */}
              <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 size-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Icon Badge */}
              <div className="mx-auto size-16 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6 ring-8 ring-amber-500/5">
                <Lock className="size-8" />
              </div>

              {/* Status Pill */}
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
                <span className="size-2 rounded-full bg-amber-500 animate-pulse" />
                Enrollment Paused
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
                Applications Are Currently Closed
              </h2>

              <p className="mt-4 text-sm sm:text-base text-text-secondary max-w-2xl mx-auto leading-relaxed">
                Thank you for your interest in Al-Hadi School. Applications for the current academic session have officially closed as available seats have been filled.
              </p>

              {/* Single Action Button */}
              <div className="mt-10 max-w-sm mx-auto">
                <a
                  href="/contact"
                  className="flex items-center justify-between p-4 rounded-2xl bg-primary text-primary-foreground text-xs font-bold transition-all shadow-xs hover:bg-primary-hover group"
                >
                  <div className="flex items-center gap-3">
                    <div className="size-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Calendar className="size-4" />
                    </div>
                    <div className="text-left">
                      <span className="block font-bold">Contact Us</span>
                      <span className="block text-[11px] opacity-80 font-normal">Get in touch with our admissions team</span>
                    </div>
                  </div>
                  <ChevronRight className="size-4 opacity-80 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </Reveal>



        </div>
      </section>
    </div>
  );
}