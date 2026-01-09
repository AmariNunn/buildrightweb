import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, ExternalLink, CheckCircle, Clock, Video, ArrowRight } from "lucide-react";

const CONSULTATION_URL = "https://cal.com/skyiq/website-development";

const benefits = [
  { icon: Clock, text: "30-minute strategy session" },
  { icon: Video, text: "Video call with our experts" },
  { icon: CheckCircle, text: "Custom recommendations for your project" },
];

export function BookingSection() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section id="book" className="relative py-20 lg:py-32 bg-muted/30" data-testid="section-booking">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-2 border border-primary/30 bg-primary/10">
            <Calendar className="w-4 h-4 mr-2" />
            Book a Consultation
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4" data-testid="text-booking-title">
            Let's Talk About{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Your Project
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule a free consultation to discuss your goals and discover how we can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">What to Expect</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-md bg-background border border-border/50"
                  data-testid={`row-booking-benefit-${index}`}
                >
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
            <Button
              size="lg"
              asChild
              className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity group lg:hidden"
              data-testid="button-booking-mobile-cta"
            >
              <a href={CONSULTATION_URL} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-2" />
                Book on Cal.com
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2 relative"
          >
            <div className="bg-background rounded-md border border-border/50 overflow-hidden shadow-lg">
              <div className="bg-muted/50 px-4 py-3 border-b border-border/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="font-medium text-sm">Schedule a Consultation</span>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  asChild
                  className="text-muted-foreground hover:text-foreground"
                  data-testid="button-open-calcom"
                >
                  <a href={CONSULTATION_URL} target="_blank" rel="noopener noreferrer">
                    Open in Cal.com
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </Button>
              </div>
              
              <div className="relative" style={{ height: "700px" }}>
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-background">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin mx-auto mb-4" />
                      <p className="text-muted-foreground">Loading booking calendar...</p>
                    </div>
                  </div>
                )}
                <iframe
                  src={`${CONSULTATION_URL}?embed=true&layout=month_view&hideBranding=true`}
                  className="w-full"
                  style={{ border: "none", height: "700px", overflow: "hidden" }}
                  onLoad={() => setIsLoading(false)}
                  title="Book a consultation"
                  scrolling="no"
                  data-testid="iframe-calcom"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
