import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  explore: [
    { label: "About Us", href: "/about" },
    { label: "Academics", href: "/academics" },
    { label: "Student Life", href: "/student-life" },
    { label: "Campus & Facilities", href: "/campus" },
  ],
  admissions: [
    { label: "How to Apply", href: "/admissions" },
    { label: "Register Interest", href: "/admissions#register" },
    { label: "FAQs", href: "/admissions#faqs" },
    { label: "Contact Admissions", href: "/contact" },
  ],
  // community: [
  //   { label: "Parents Portal", href: "/parents" },
  //   { label: "News & Insights", href: "/news" },
  //   { label: "Careers", href: "/careers" },
  //   { label: "Privacy Policy", href: "/privacy" },
  // ],
};

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/share/1D23cHjLbo/?mibextid=wwXIfr", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/kls.sia?igsh=cGo3eGlmaWw0NnRu", label: "Instagram" },
  // { icon: Twitter, href: "#", label: "Twitter" },
  // { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-navy-light border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-serif font-bold text-primary">KIS SIA</span>
              <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase mt-1">
                Premium Education
              </p>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              Education for the visionaries who will shape the future. Opening 2026/2027 in Egypt.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Admissions</h4>
            <ul className="space-y-3">
              {footerLinks.admissions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          {/* <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Accreditations */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <span>Accredited by:</span>
              <span className="font-medium text-foreground">Cognia</span>
              <span className="font-medium text-foreground">Cambridge Assessment</span>
              <span className="font-medium text-foreground">Oxford AQA</span>
              <span className="font-medium text-foreground">Pearson Edexcel</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} KIS SIA. All rights reserved. | A Legacy of Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}