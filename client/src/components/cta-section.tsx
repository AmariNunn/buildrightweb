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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-border/50 backdrop-blur-sm">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Received!</h3>
                    <p className="text-muted-foreground mb-4">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setIsSubmitted(false)}
                      data-testid="button-send-another"
                    >
                      Send Another Message
                    </Button>
                  </motion.div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <Label className="flex items-center gap-2">
                              <User className="w-4 h-4 text-muted-foreground" />
                              Your Name
                            </Label>
                            <FormControl>
                              <Input
                                placeholder="John Doe"
                                className="mt-2"
                                data-testid="input-name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <Label className="flex items-center gap-2">
                              <Mail className="w-4 h-4 text-muted-foreground" />
                              Email Address
                            </Label>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="john@example.com"
                                className="mt-2"
                                data-testid="input-email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <Label className="flex items-center gap-2">
                              <MessageSquare className="w-4 h-4 text-muted-foreground" />
                              Tell Us About Your Project
                            </Label>
                            <FormControl>
                              <Textarea
                                placeholder="I'm looking for a modern website for my business..."
                                className="mt-2 min-h-[120px] resize-none"
                                data-testid="input-message"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity group"
                        disabled={mutation.isPending}
                        data-testid="button-submit-contact"
                      >
                        {mutation.isPending ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
