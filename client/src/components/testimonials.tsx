import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Build Right Web transformed our online presence completely. Our new e-commerce site increased sales by 200% in the first quarter!",
    name: "Sarah Johnson",
    title: "CEO, Luxe Boutique",
    initials: "SJ",
    rating: 5,
  },
  {
    id: 2,
    quote: "Their social media management is exceptional. We've seen incredible engagement growth and our brand has never been more visible.",
    name: "Michael Chen",
    title: "Marketing Director, TechFlow",
    initials: "MC",
    rating: 5,
  },
  {
    id: 3,
    quote: "Professional, creative, and incredibly responsive. They delivered our SaaS platform ahead of schedule with amazing quality.",
    name: "Emily Rodriguez",
    title: "Founder, HealthHub",
    initials: "ER",
    rating: 5,
  },
  {
    id: 4,
    quote: "The team truly understood our vision and brought it to life. Our portfolio site is exactly what we dreamed of and more.",
    name: "David Park",
    title: "Creative Director, Artisan Studio",
    initials: "DP",
    rating: 5,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 lg:py-32" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2 border border-primary/30 bg-primary/10">
            Testimonials
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4" data-testid="text-testimonials-title">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it—hear from the businesses we've helped succeed.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <Card 
                className="h-full border-border/50 hover:border-primary/30 transition-all duration-300"
                data-testid={`card-testimonial-${testimonial.id}`}
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>

                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                    <p 
                      className="text-foreground leading-relaxed pl-6"
                      data-testid={`text-testimonial-quote-${testimonial.id}`}
                    >
                      "{testimonial.quote}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 border-2 border-primary/20">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white font-medium">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold" data-testid={`text-testimonial-name-${testimonial.id}`}>{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground" data-testid={`text-testimonial-title-${testimonial.id}`}>{testimonial.title}</p>
                    </div>
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
