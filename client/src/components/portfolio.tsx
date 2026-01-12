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
      <a href={project.url} target="_blank" rel="noopener noreferrer" className="block h-full">
        <Card 
          className="h-full overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-500 cursor-pointer relative bg-black"
          data-testid={`card-portfolio-${project.id}`}
        >
          <CardContent className="p-0 h-full relative overflow-hidden">
            <div className={`relative h-full min-h-[300px] ${project.size === "large" ? "md:min-h-[450px]" : project.size === "medium" ? "md:min-h-[320px]" : ""}`}>
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-700`} />
              
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all duration-700" />

              {/* Advanced geometric patterns */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 group-hover:opacity-20 transition-opacity duration-700">
                  <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] border border-white/40 rounded-full animate-[pulse_4s_infinite]" />
                  <div className="absolute bottom-[-5%] right-[-5%] w-[30%] h-[30%] border border-white/40 rotate-45 animate-[pulse_6s_infinite]" />
                </div>
              </div>

              {/* Floating tech elements */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <div className="relative w-full h-full">
                  <motion.div 
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity,
                      ease: "easeInOut" 
                    }}
                    className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-md flex items-center justify-center rotate-12 group-hover:scale-110 group-hover:rotate-0 transition-transform duration-700"
                  >
                    <Sparkles className="w-8 h-8 text-white/20" />
                  </motion.div>
                </div>
              </div>

              {/* Content area with glass effect */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
                <div className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-2xl">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-primary/20 text-primary-foreground border-primary/30 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                    {project.title}
                  </h3>
                  <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                    <p className="text-white/70 text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.description}
                    </p>
                    <div className="flex items-center text-xs font-semibold text-primary uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      Explore Case Study <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover shine effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
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
            <Button
              variant="outline"
              size="lg"
              className="group"
              data-testid="button-view-all-work"
            >
              View All Work
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
