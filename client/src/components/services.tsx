import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Laptop, 
  Building2, 
  Palette, 
  Rocket, 
  Code,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description: "High-converting online stores with seamless checkout experiences and inventory management.",
    tags: ["Shopify", "WooCommerce", "Custom"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Rocket,
    title: "SaaS Platforms",
    description: "Scalable web applications with user dashboards, subscriptions, and powerful analytics.",
    tags: ["React", "Node.js", "Cloud"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Building2,
    title: "Corporate Sites",
    description: "Professional business websites that establish credibility and generate quality leads.",
    tags: ["WordPress", "CMS", "SEO"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Palette,
    title: "Portfolio Sites",
    description: "Stunning showcase websites for creatives, artists, and professionals to display their work.",
    tags: ["Design", "Animation", "Gallery"],
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Laptop,
    title: "Landing Pages",
    description: "High-impact, conversion-optimized landing pages that turn visitors into customers.",
    tags: ["A/B Testing", "Analytics", "CRO"],
    color: "from-indigo-500 to-violet-500",
  },
  {
    icon: Code,
    title: "Custom Solutions",
    description: "Tailored web applications built from scratch to meet your unique business requirements.",
    tags: ["Full-Stack", "API", "Integrations"],
    color: "from-rose-500 to-pink-500",
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Services() {
  return (
    <section id="services" className="relative py-20 lg:py-32" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2 border border-primary/30 bg-primary/10">
            Web Development Services
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4" data-testid="text-services-title">
            Websites That Work as Hard as You Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From sleek storefronts to powerful platforms, we build digital experiences 
            that captivate and convert.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={service.title} variants={itemVariants}>
              <Card 
                className="group h-full hover-elevate transition-all duration-300 border-border/50 hover:border-primary/30 cursor-pointer"
                data-testid={`card-service-${service.title.toLowerCase().replace(/\s/g, '-')}`}
              >
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-md bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 
                    className="text-xl font-bold mb-3 group-hover:text-primary transition-colors"
                    data-testid={`text-service-title-${service.title.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {service.title}
                  </h3>
                  
                  <p 
                    className="text-muted-foreground mb-4 leading-relaxed"
                    data-testid={`text-service-desc-${service.title.toLowerCase().replace(/\s/g, '-')}`}
                  >
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="text-xs px-2 py-1"
                        data-testid={`badge-service-tag-${tag.toLowerCase().replace(/\s/g, '-')}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
