import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Sparkles, Calendar } from "lucide-react";

import { Link } from "wouter";

const CONSULTATION_URL = "/book";

const projects = [
  {
    id: 1,
    title: "TechFlow SaaS",
    category: "SaaS Platform",
    description: "Modern project management platform with real-time collaboration features.",
    gradient: "from-blue-600 via-cyan-500 to-teal-400",
    size: "large",
    url: "https://www.lyrarobotics.io/",
  },
  {
    id: 2,
    title: "Artisan Studio",
    category: "Portfolio",
    description: "Creative portfolio showcasing artistic works and exhibitions.",
    gradient: "from-orange-600 via-amber-500 to-yellow-400",
    size: "small",
    url: "https://ondafloent.money",
  },
  {
    id: 3,
    title: "Fintech Pro",
    category: "Web Application",
    description: "Secure banking dashboard with advanced analytics.",
    gradient: "from-emerald-600 via-green-500 to-lime-400",
    size: "small",
    url: "https://www.skyiq.cloud",
  },
  {
    id: 4,
    title: "EduLearn Platform",
    category: "Education",
    description: "Online learning platform with interactive courses and progress tracking.",
    gradient: "from-rose-600 via-red-500 to-orange-400",
    size: "medium",
    url: "https://excellenceinmotion.org/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const getGridClass = () => {
    if (project.size === "large") {
      return "md:col-span-2 md:row-span-2";
    }
    if (project.size === "medium") {
      return "md:col-span-2";
    }
    return "";
  };

  return (
    <motion.div
      variants={itemVariants}
      className={`group ${getGridClass()}`}
    >
      <a href={project.url} target="_blank" rel="noopener noreferrer">
      <Card 
        className="h-full overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer"
        data-testid={`card-portfolio-${project.id}`}
      >
        <CardContent className="p-0 h-full">
          <div className={`relative h-full min-h-[240px] ${project.size === "large" ? "md:min-h-[400px]" : project.size === "medium" ? "md:min-h-[280px]" : ""}`}>
            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`} />
            
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
            
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-8 left-8 w-32 h-32 border border-white/30 rounded-md" />
              <div className="absolute bottom-8 right-8 w-24 h-24 border border-white/30 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 rounded-md rotate-45" />
            </div>
            
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <ExternalLink className="w-5 h-5 text-white" />
              </div>
            </div>

            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <Badge className="mb-3 bg-white/20 text-white border-0 backdrop-blur-sm">
                  {project.category}
                </Badge>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      </a>
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 lg:py-32" data-testid="section-portfolio">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2 border border-primary/30 bg-primary/10">
            <Sparkles className="w-4 h-4 mr-2" />
            Featured Work
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4" data-testid="text-portfolio-title">
            Projects That Speak for Themselves
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every project is a unique story. Here are some of the digital experiences 
            we've crafted for our clients.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Want something like this for your business?</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity group"
              data-testid="button-portfolio-cta"
            >
              <Link href={CONSULTATION_URL}>
                <Calendar className="w-4 h-4 mr-2" />
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
