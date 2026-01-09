import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";

const navLinks = [
  { href: "/services", label: "Services", isPage: true },
  { href: "#portfolio", label: "Portfolio", isPage: false },
  { href: "#process", label: "Process", isPage: false },
  { href: "#testimonials", label: "Testimonials", isPage: false },
  { href: "/book", label: "Consultation", isPage: true },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigateToPage = (href: string) => {
    setIsMobileMenuOpen(false);
    setLocation(href);
  };

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    if (location !== "/") {
      setLocation("/");
      // Using a longer timeout to ensure page navigation completes before scrolling
      setTimeout(() => {
        const id = href.startsWith("#") ? href.slice(1) : href;
        const element = document.getElementById(id) || document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    } else {
      const id = href.startsWith("#") ? href.slice(1) : href;
      const element = document.getElementById(id) || document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a
            href="#"
            className="flex items-center gap-2 group"
            data-testid="link-logo"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div className="absolute inset-0 rounded-md bg-gradient-to-br from-primary to-accent opacity-50 blur-lg group-hover:opacity-75 transition-opacity" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Build Right<span className="text-primary">Web</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.isPage ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover-elevate"
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover-elevate"
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              )
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
              data-testid="button-theme-toggle"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>

            <Button
              onClick={() => scrollToSection("#contact")}
              className="hidden sm:flex bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              data-testid="button-get-started"
            >
              Get Started
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <nav className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => link.isPage ? navigateToPage(link.href) : scrollToSection(link.href)}
                  className="px-4 py-3 text-left text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors rounded-md"
                  data-testid={`link-mobile-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("#contact")}
                className="mt-4 bg-gradient-to-r from-primary to-accent"
                data-testid="button-mobile-get-started"
              >
                Get Started
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
