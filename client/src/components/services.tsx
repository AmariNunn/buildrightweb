import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Laptop, 
  Building2, 
  Palette, 
  Rocket, 
  Code,
  ArrowRight,
  Calendar
} from "lucide-react";

import { Link } from "wouter";

const CONSULTATION_URL = "/book";

const services = [
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "Online stores that convert visitors into buyers.",
    tags: ["Shopify", "WooCommerce", "Custom"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Rocket,
    title: "SaaS Platforms",
    description: "Scalable apps with dashboards and analytics.",
    tags: ["React", "Node.js", "Cloud"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Building2,
    title: "Corporate Sites",
    description: "Professional sites that build credibility.",
    tags: ["WordPress", "CMS", "SEO"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Palette,
    title: "Portfolio Sites",
    description: "Showcase your work beautifully.",
    tags: ["Design", "Animation", "Gallery"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Laptop,
    title: "Landing Pages",
    description: "High-impact pages that drive action.",
    tags: ["A/B Testing", "Analytics", "CRO"],
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: Code,
    title: "Custom Solutions",
    description: "Tailored apps for unique needs.",
    tags: ["Full-Stack", "API", "Integrations"],
    color: "from-rose-500 to-pink-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export function Services() {
  return (
    <section id="services" className="relative py-16 lg:py-24" data-testid="section-services">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2 border border-primary/30 bg-primary/10">
            Web Development
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4" data-testid="text-services-title">
            Websites That Work as Hard as You Do
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From storefronts to platforms, we build digital experiences that captivate and convert.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Link href={CONSULTATION_URL}>
                <div
                  className="group flex items-start gap-4 p-4 rounded-md border border-transparent hover:border-border/60 hover-elevate cursor-pointer"
                  data-testid={`card-service-${service.title.toLowerCase().replace(/\s/g, '-')}`}
                >
                  <div className={`shrink-0 w-10 h-10 rounded-md bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-5 h-5 text-white" />
                  </div>

                  <div className="min-w-0">
                    <h3
                      className="text-sm font-semibold mb-1"
                      data-testid={`text-service-title-${service.title.toLowerCase().replace(/\s/g, '-')}`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-xs text-muted-foreground leading-relaxed mb-2"
                      data-testid={`text-service-desc-${service.title.toLowerCase().replace(/\s/g, '-')}`}
                    >
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {service.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-[10px] px-1.5 py-0 no-default-hover-elevate no-default-active-elevate"
                          data-testid={`badge-service-tag-${tag.toLowerCase().replace(/\s/g, '-')}`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-primary to-accent border-accent-border"
            data-testid="button-services-cta"
          >
            <Link href={CONSULTATION_URL}>
              <Calendar className="w-4 h-4 mr-2" />
              Get Expert Advice
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
