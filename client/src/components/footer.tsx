import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, ArrowRight, Mail } from "lucide-react";
import { SiInstagram, SiLinkedin, SiX, SiDribbble, SiGithub } from "react-icons/si";
import { motion } from "framer-motion";

const footerLinks = {
  company: [
    { label: "About Us", href: "#" },
    { label: "Our Team", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
  ],
  services: [
    { label: "Web Development", href: "#services" },
    { label: "E-Commerce", href: "#services" },
    { label: "Social Media", href: "#services" },
    { label: "UI/UX Design", href: "#services" },
  ],
  resources: [
    { label: "Case Studies", href: "#portfolio" },
    { label: "FAQs", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
  { icon: SiLinkedin, href: "#", label: "LinkedIn" },
  { icon: SiX, href: "#", label: "X (Twitter)" },
  { icon: SiInstagram, href: "#", label: "Instagram" },
  { icon: SiDribbble, href: "#", label: "Dribbble" },
  { icon: SiGithub, href: "#", label: "GitHub" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-muted/50 border-t border-border" data-testid="footer">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-48 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-48 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 mb-12">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="relative">
                <div className="w-10 h-10 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Build Right<span className="text-primary">Web</span>
              </span>
            </a>
            
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Creating exceptional digital experiences through innovative web development 
              and strategic social media marketing.
            </p>

          </div>


          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.filter(link => !["Privacy Policy", "Terms of Service"].includes(link.label)).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground">
            {currentYear} Build Right Web. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
