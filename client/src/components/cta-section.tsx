import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { 
  ArrowRight, 
  Mail, 
  MessageSquare, 
  User,
  CheckCircle,
  Loader2,
  Shield,
  Clock,
  Headphones,
  Calendar,
  ExternalLink
} from "lucide-react";

import { Link } from "wouter";

const CONSULTATION_URL = "/book";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const benefits = [
  { icon: Shield, text: "100% Satisfaction Guaranteed" },
  { icon: Clock, text: "Response Within 24 Hours" },
  { icon: Headphones, text: "Dedicated Support Team" },
];

export function CTASection() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
    },
    onError: () => {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-32 overflow-hidden" data-testid="section-contact">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4 px-4 py-2 border border-primary/30 bg-primary/10">
              Get In Touch
            </Badge>
            
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4" data-testid="text-cta-title">
              Ready to Build{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Something Amazing?
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Let's discuss your project and explore how we can help bring your vision to life. 
              Whether it's a website, social media strategy, or both—we're here to help.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="p-6 rounded-md bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20"
            >
              <p className="text-sm text-muted-foreground mb-3">Prefer to talk live?</p>
              <Button
                size="lg"
                asChild
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity group"
                data-testid="button-cta-book"
              >
                <Link href={CONSULTATION_URL}>
                  <Calendar className="w-4 h-4 mr-2" />
                  Book a Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
