import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Zap, Globe, TrendingUp, Calendar } from "lucide-react";
import { motion } from "framer-motion";

import { Link } from "wouter";

const CONSULTATION_URL = "/book";

function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] animate-grid-flow" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-float" />
    </div>
  );
}

function StatCard({ value, label, icon: Icon }: { value: string; label: string; icon: React.ElementType }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="flex items-center gap-4 p-4 rounded-md bg-card/50 backdrop-blur-sm border border-border/50"
    >
      <div className="w-12 h-12 rounded-md bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <p className="text-2xl font-bold font-mono" data-testid={`text-stat-${label.toLowerCase().replace(/\s/g, '-')}`}>{value}</p>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden" data-testid="section-hero">
      <AnimatedGrid />
      
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium border border-primary/30 bg-primary/10 -ml-[10px]">
              <Zap className="w-4 h-4 mr-2 text-primary" />
              Premium Web Solutions & Social Media Marketing
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-none mb-6"
            data-testid="text-hero-title"
          >
            We Build{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient-shift bg-clip-text text-transparent">
              Digital Experiences
            </span>{" "}
            That Convert
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg lg:text-xl text-muted-foreground max-w-2xl mb-8 leading-relaxed"
            data-testid="text-hero-description"
          >
            From stunning websites to powerful social media strategies, we craft digital solutions 
            that elevate your brand and drive real results. Your vision, built right.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity group"
              data-testid="button-hero-cta"
            >
              <Link href={CONSULTATION_URL}>
                <Calendar className="w-4 h-4 mr-2" />
                Book Free Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#portfolio")}
              className="group backdrop-blur-sm"
              data-testid="button-hero-secondary"
            >
              <Play className="w-4 h-4 mr-2" />
              View Our Work
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            <StatCard value="150+" label="Projects Delivered" icon={Globe} />
            <StatCard value="50+" label="Happy Clients" icon={TrendingUp} />
            <StatCard value="5+" label="Years Experience" icon={Zap} />
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
