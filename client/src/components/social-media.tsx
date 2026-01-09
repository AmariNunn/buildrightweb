import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  MessageCircle,
  BarChart3,
  Calendar,
  Target,
  ArrowRight
} from "lucide-react";
import { SiInstagram, SiLinkedin, SiX, SiFacebook, SiTiktok, SiYoutube } from "react-icons/si";

import { Link } from "wouter";

const CONSULTATION_URL = "/book";

const features = [
  { icon: Calendar, text: "Content Strategy & Planning" },
  { icon: Users, text: "Community Management" },
  { icon: BarChart3, text: "Analytics & Reporting" },
  { icon: Target, text: "Paid Advertising Campaigns" },
  { icon: MessageCircle, text: "Engagement & Response" },
  { icon: TrendingUp, text: "Growth Optimization" },
];

const platforms = [
  { icon: SiInstagram, name: "Instagram", color: "from-pink-500 to-purple-500" },
  { icon: SiLinkedin, name: "LinkedIn", color: "from-blue-600 to-blue-700" },
  { icon: SiX, name: "X (Twitter)", color: "from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-400" },
  { icon: SiFacebook, name: "Facebook", color: "from-blue-500 to-blue-600" },
  { icon: SiTiktok, name: "TikTok", color: "from-pink-500 to-cyan-500" },
  { icon: SiYoutube, name: "YouTube", color: "from-red-500 to-red-600" },
];

const stats = [
  { value: "300%", label: "Avg. Engagement Increase" },
  { value: "2M+", label: "Impressions Generated" },
  { value: "50K+", label: "Followers Grown" },
];

export function SocialMedia() {
  return (
    <section className="relative py-20 lg:py-32 bg-muted/30" data-testid="section-social-media">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4 px-4 py-2 border border-accent/30 bg-accent/10">
              Social Media Marketing
            </Badge>
            
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4" data-testid="text-social-title">
              Amplify Your Brand's Voice Online
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We don't just post content—we build communities. Our data-driven social media 
              strategies help you connect with your audience and turn followers into loyal customers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                  data-testid={`row-feature-${index}`}
                >
                  <div className="w-8 h-8 rounded-md bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm font-medium" data-testid={`text-feature-${index}`}>{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-accent to-primary hover:opacity-90 transition-opacity group"
              data-testid="button-social-cta"
            >
              <Link href={CONSULTATION_URL}>
                <Calendar className="w-4 h-4 mr-2" />
                Grow Your Social Presence
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <Card className="border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-card via-card to-muted p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Social Dashboard</h3>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-600 dark:text-green-400 border-0">
                      <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse" />
                      Live
                    </Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                        className="text-center p-4 rounded-md bg-background/50"
                      >
                        <p className="text-2xl font-bold font-mono text-primary">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Engagement Rate</span>
                      <span className="font-semibold">8.4%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "84%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>

                  <div className="border-t border-border/50 pt-6">
                    <p className="text-sm text-muted-foreground mb-4">Platforms We Manage</p>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                      {platforms.map((platform, index) => (
                        <motion.div
                          key={platform.name}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                          className="flex flex-col items-center gap-2 p-3 rounded-md bg-background/50 hover-elevate cursor-pointer"
                          title={platform.name}
                          data-testid={`badge-platform-${platform.name.toLowerCase().replace(/[\s()]/g, '')}`}
                        >
                          <div className={`w-8 h-8 rounded-md bg-gradient-to-br ${platform.color} flex items-center justify-center`}>
                            <platform.icon className="w-4 h-4 text-white" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
