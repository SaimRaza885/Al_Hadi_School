import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";

export function CtaBanner() {
  return (
    <section className="py-16 sm:py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-[#165a94] px-8 py-14 sm:px-16 sm:py-16 text-center text-white shadow-lg">
            <div className="absolute -top-24 -left-24 size-72 rounded-full bg-white/10 blur-2xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 size-72 rounded-full bg-white/10 blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                Give Your Child the Advantage of Modern Education
              </h2>

              <p className="text-sm sm:text-base text-white/85 max-w-lg mx-auto leading-relaxed">
                Applications close soon for the upcoming academic session. Reserve your place today.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link
                  to="/application"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-white text-primary text-sm font-bold hover:bg-slate-50 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                >
                  <span>Start Application Now</span>
                  <ArrowRight className="size-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border-2 border-white/60 text-white text-sm font-semibold hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/70"
                >
                  <Phone className="size-4" />
                  <span>Contact Admissions Office</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}