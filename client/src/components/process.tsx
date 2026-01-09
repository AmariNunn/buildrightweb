import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Lightbulb, 
  Code2, 
  Rocket,
  ArrowRight 
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep into understanding your business, goals, and target audience to create a tailored strategy.",
    icon: MessageSquare,
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    title: "Design",
    description: "Our designers craft stunning, user-centric interfaces that align with your brand and engage your audience.",
    icon: Lightbulb,
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    title: "Development",
    description: "We build your project using cutting-edge technologies, ensuring performance, security, and scalability.",
    icon: Code2,
    color: "from-emerald-500 to-teal-500",
  },
  {
    number: "04",
    title: "Launch",
    description: "We deploy your project with comprehensive testing and provide ongoing support to ensure success.",
    icon: Rocket,
    color: "from-orange-500 to-red-500",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-20 lg:py-32 bg-muted/30 overflow-hidden" data-testid="section-process">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2 border border-primary/30 bg-primary/10">
            Our Process
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4" data-testid="text-process-title">
            From Concept to Launch in 4 Steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process ensures your project is delivered on time, on budget, 
            and exceeds expectations.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className={`w-16 h-16 rounded-md bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-4xl font-bold font-mono text-muted-foreground/30">
                      {step.number}
                    </span>
                    {index < steps.length - 1 && (
                      <ArrowRight className="hidden lg:block w-5 h-5 text-muted-foreground/30" />
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                  className="hidden lg:block absolute top-8 left-8 w-0.5 h-full bg-gradient-to-b from-border to-transparent origin-top"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
