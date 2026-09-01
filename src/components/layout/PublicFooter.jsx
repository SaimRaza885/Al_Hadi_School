import { Link } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  CalendarCheck,
  ChevronRight
} from "lucide-react";
import { siteContent } from "@/data/siteContent.data";

export function PublicFooter() {
  return (
    <footer className="bg-[#0B132B] text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Contact Info (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-lg bg-white flex items-center justify-center overflow-hidden shadow-sm ring-1 ring-black/5">
                <img
                  src={siteContent.schoolLogo}
                  alt={siteContent.schoolName}
                  className="size-full object-contain p-0.5"
                  loading="lazy"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {siteContent.schoolTag || siteContent.schoolName}
              </span>
            </div>

            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="size-4.5 text-primary shrink-0 mt-0.5" />
                <span>{siteContent.contact.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="size-4.5 text-primary shrink-0" />
                <span>{siteContent.contact.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="size-4.5 text-primary shrink-0" />
                <span>{siteContent.contact.email}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="size-9 rounded-full bg-slate-800/80 hover:bg-primary flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href="#twitter"
                aria-label="Twitter"
                className="size-9 rounded-full bg-slate-800/80 hover:bg-primary flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <Twitter className="size-4" />
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="size-9 rounded-full bg-slate-800/80 hover:bg-primary flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <Instagram className="size-4" />
              </a>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="size-9 rounded-full bg-slate-800/80 hover:bg-primary flex items-center justify-center text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="size-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/application" className="hover:text-primary transition-colors">
                  Admission Process
                </Link>
              </li>
              <li>
                <Link to="/curriculum" className="hover:text-primary transition-colors">
                  Academic Programs
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="hover:text-primary transition-colors">
                  Campus Facilities
                </Link>
              </li>
              <li>
                <Link to="/activities" className="hover:text-primary transition-colors">
                  Student Activities
                </Link>
              </li>
              <li>
                <Link to="/staff" className="hover:text-primary transition-colors">
                  Staff Directory
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Portals (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Portals
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/login" className="hover:text-primary transition-colors">
                  Admin Login
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-primary transition-colors">
                  Teacher Login
                </Link>
              </li>
              <li>
                <Link to="/application" className="hover:text-primary transition-colors">
                  Online Application
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: School Hours & Campus Visiting (3 cols) — REPLACED NEWSLETTER */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white flex items-center gap-1.5">
          Office Hours
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex justify-between py-1 border-b border-slate-800/80">
                <span className="font-medium">Mon – Thu:</span>
                <span className="text-slate-200">7:30 AM – 2:30 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/80">
                <span className="font-medium">Friday:</span>
                <span className="text-slate-200">7:30 AM – 12:30 PM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/80">
                <span className="font-medium">Saturday:</span>
                <span className="text-slate-200">Office Only (8:00 AM - 12:00 PM)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="font-medium">Sunday & Holidays:</span>
                <span className="text-amber-400 font-semibold">Closed</span>
              </div>
            </div>

            
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {siteContent.schoolTag || siteContent.schoolName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}