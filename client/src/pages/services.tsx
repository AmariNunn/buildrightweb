import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ChevronDown, 
  Globe, 
  Palette, 
  Code, 
  Search, 
  Shield, 
  Server, 
  Smartphone, 
  MessageSquare,
  BarChart3,
  Share2,
  Mail,
  Database, 
  Zap,
  Accessibility,
  GraduationCap,
  ShoppingCart,
  Calendar,
  Video,
  TrendingUp,
  Users,
  FileText,
  Megaphone,
  Camera,
  Package,
  Shirt,
  Pen,
  Gift,
  ArrowRight
} from "lucide-react";
import { Link } from "wouter";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const CONSULTATION_URL = "/book";

interface ServiceItem {
  name: string;
  price: string;
  description: string;
  icon: typeof Globe;
}

const webServices: ServiceItem[] = [
  { name: "Base Website", price: "$500", description: "A simple start page with your info. Perfect for a home or landing spot to tell people who you are.", icon: Globe },
  { name: "Extra Pages", price: "$150/page", description: "Add more pages like About Us, Services, or Contact. Each page helps share more about what you do.", icon: FileText },
  { name: "International Setup", price: "$300", description: "Add languages or time zones so your site works for people in other countries around the world.", icon: Globe },
  { name: "Chatbot Tool", price: "$400", description: "A smart chat box on your site that answers questions. Like a helpful robot friend for your visitors.", icon: MessageSquare },
  { name: "Domain Name Register", price: "$50/year", description: "We help pick and buy your web address (like yourname.com) and set it up right.", icon: Globe },
  { name: "Site Maintenance", price: "$100/month", description: "Keep your site safe and fresh with updates, fixes, and checks each month.", icon: Shield },
  { name: "Mobile Friendly Design", price: "Included", description: "Your site looks good and works easy on phones and tablets. No extra cost!", icon: Smartphone },
  { name: "Search", price: "$250", description: "Special tricks so Google and other searches find your site faster. More people see you!", icon: Search },
  { name: "Security Lock (SSL)", price: "$75/year", description: "A safe lock on your site to protect info and make browsers show the green padlock.", icon: Shield },
  { name: "Hosting Home", price: "$20/month", description: "A place online where your site lives and runs fast. We find and set it up for you.", icon: Server },
  { name: "Custom Looks", price: "$200", description: "Special colors, logos, or pictures made just for you to match your style.", icon: Palette },
  { name: "Words and Photos", price: "$300", description: "Good text and nice images or videos written and picked for your site.", icon: Camera },
  { name: "Visitor Tracker", price: "$100", description: "Tools like Google Analytics to see who visits your site and what they do.", icon: BarChart3 },
  { name: "Social Media Links", price: "$50", description: "Connect your site to Facebook, X, or Instagram for easy sharing.", icon: Share2 },
  { name: "Email Signup Forms", price: "$75", description: "Spots where people can sign up for news or contact you directly.", icon: Mail },
  { name: "Backup Safety", price: "$50/month", description: "Auto saves so your site info doesn't get lost if something goes wrong.", icon: Database },
  { name: "Speed Boost", price: "$150", description: "Make your site load super quick so people don't wait and leave.", icon: Zap },
  { name: "Easy for Everyone", price: "$200", description: "Features so blind or hard-hearing people can use your site too.", icon: Accessibility },
  { name: "Training Guide", price: "$150", description: "We teach you how to change or add stuff to your site yourself.", icon: GraduationCap },
  { name: "Shop Setup", price: "$800", description: "Add ways to sell things online, like a small store with payments.", icon: ShoppingCart },
];

const socialServices: ServiceItem[] = [
  { name: "Light Posting", price: "$200/month", description: "Easy posts to keep your online spot active and seen. Great to start!", icon: FileText },
  { name: "Maintain Presence", price: "$150/month", description: "Help your account stay online and noticed without much work from you.", icon: Users },
  { name: "One Platform", price: "$250/month", description: "We work on just one social site for you, like Instagram or X.", icon: Share2 },
  { name: "Posts Per Month", price: "$300/month", description: "We make 8 posts each month. Good for staying active.", icon: Calendar },
  { name: "Posts Per Month", price: "$500/month", description: "We make 12 to 16 posts each month. More content, more eyes on you!", icon: Calendar },
  { name: "Stay Visible", price: "$175/month", description: "Keep your profile easy to find and fresh for people to see.", icon: TrendingUp },
  { name: "Built for Leaders", price: "$600/month", description: "Content that fits bosses or top people in business. Look like the expert you are.", icon: Users },
  { name: "Per Platform Content", price: "$400/month", description: "Bespoke content creation tailored specifically for each social platform's unique algorithm and audience behavior to maximize organic reach and engagement.", icon: Share2 },
  { name: "Thought Leadership", price: "$500/month", description: "Share smart ideas and tips to show you're an expert in your field.", icon: GraduationCap },
  { name: "Articles", price: "$150/each", description: "Longer reads with facts and stories. Great for deep dives on topics.", icon: FileText },
  { name: "Multiple Platforms", price: "$600/month", description: "Handle posts on 3 social sites at once. Reach more people!", icon: Share2 },
  { name: "Multiple Platforms", price: "$900/month", description: "Handle posts on up to 5 social sites. Maximum reach!", icon: Share2 },
  { name: "Boosted Ad", price: "$100 + ad spend", description: "Pay to make one post show up more. Reaches extra people fast.", icon: Megaphone },
  { name: "Daily Posting", price: "$1,200/month", description: "New posts every day on your chosen sites. Maximum visibility!", icon: Calendar },
  { name: "Video Reels", price: "$200/each", description: "Short fun videos to share, like quick clips or stories.", icon: Video },
  { name: "Email Marketing", price: "$300/month", description: "Send emails to people to tell them about your stuff or news.", icon: Mail },
  { name: "Ad Spend Management", price: "$150/month", description: "We use your money to buy ads that help more eyes see you.", icon: Megaphone },
  { name: "Ad Spend Management", price: "$400/month", description: "We use your money to buy ads. Big reach for growing brands!", icon: Megaphone },
  { name: "Detailed Analytics", price: "$200/month", description: "Check numbers and reports to see how well your posts are doing.", icon: BarChart3 },
  { name: "Full-Service Digital Marketing", price: "Custom Quote", description: "All kinds of online promo work from start to end. The whole package!", icon: TrendingUp },
  { name: "Video Shoots", price: "$500/session", description: "Film real videos with cameras for better, professional content.", icon: Camera },
  { name: "SEO", price: "$250/month", description: "Tricks so search engines find your stuff easier online.", icon: Search },
];

const promoProducts: ServiceItem[] = [
  { name: "Custom T-Shirts", price: "$15-25/each", description: "Shirts with your logo or design. Great for teams, events, or selling.", icon: Shirt },
  { name: "Branded Pens", price: "$1-3/each", description: "Pens with your name on them. People use them and see your brand daily.", icon: Pen },
  { name: "Promotional Bags", price: "$5-15/each", description: "Tote bags or backpacks with your logo. Useful and gets seen everywhere.", icon: Package },
  { name: "Custom Mugs", price: "$8-15/each", description: "Coffee mugs with your design. Perfect for gifts or office use.", icon: Gift },
  { name: "Business Cards", price: "$50/500", description: "Professional cards with your info. First impressions matter!", icon: FileText },
  { name: "Branded Hats", price: "$12-25/each", description: "Caps or beanies with your logo. Wearable advertising!", icon: Package },
  { name: "Stickers & Decals", price: "$50/100", description: "Fun stickers people put everywhere. Spreads your brand around.", icon: Package },
  { name: "Promotional Flyers", price: "$75/500", description: "Paper flyers to hand out or mail. Tell people about your business.", icon: FileText },
  { name: "Banners & Signs", price: "$100-300", description: "Big signs for events or stores. Stand out and get noticed!", icon: Package },
  { name: "Gift Boxes", price: "$25-75/each", description: "Custom gift sets with branded items. Great for clients or employees.", icon: Gift },
];

function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Card 
        className="hover-elevate cursor-pointer transition-all"
        onClick={() => setIsOpen(!isOpen)}
        data-testid={`card-service-${index}`}
      >
        <CardContent className="p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium truncate">{service.name}</span>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <TrendingUp className="w-4 h-4" />
              </div>
              <ChevronDown 
                className={`w-5 h-5 text-muted-foreground transition-transform ${isOpen ? 'rotate-180' : ''}`} 
              />
            </div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="text-muted-foreground mt-4 pt-4 border-t border-border/50 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function ServiceSection({ 
  title, 
  subtitle, 
  services, 
  icon: Icon,
  gradient 
}: { 
  title: string; 
  subtitle: string; 
  services: ServiceItem[]; 
  icon: typeof Globe;
  gradient: string;
}) {
  return (
    <section className="py-16 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${gradient} mb-6`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">{title}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
      </motion.div>

      <div className="grid gap-3 md:grid-cols-2">
        {services.map((service, index) => (
          <ServiceCard key={service.name} service={service} index={index} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-10"
      >
        <Button size="lg" asChild className="group" data-testid="button-section-cta">
          <Link href={CONSULTATION_URL}>
            Get a Free Quote
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}

export default function Services() {
  const [activeTab, setActiveTab] = useState<"web" | "social" | "promo">("web");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-5xl mx-auto px-6 lg:px-8 pt-20">
        <section className="py-16 lg:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-6 px-4 py-2 border border-primary/30 bg-primary/10">
              Our Services
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6" data-testid="text-services-title">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Grow Online
              </span>
            </h1>
            
            <div className="flex flex-col items-center gap-8">
              <div className="inline-flex p-1 bg-muted rounded-xl border border-border/50 shadow-sm overflow-x-auto max-w-full">
                <button
                  onClick={() => setActiveTab("web")}
                  className={cn(
                    "flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap",
                    activeTab === "web" 
                      ? "bg-background text-foreground shadow-sm" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Code className={cn("w-4 h-4", activeTab === "web" ? "text-primary" : "")} />
                  Web Development
                </button>
                <button
                  onClick={() => setActiveTab("social")}
                  className={cn(
                    "flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap",
                    activeTab === "social" 
                      ? "bg-background text-foreground shadow-sm" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Share2 className={cn("w-4 h-4", activeTab === "social" ? "text-primary" : "")} />
                  Social Media
                </button>
                <button
                  onClick={() => setActiveTab("promo")}
                  className={cn(
                    "flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap",
                    activeTab === "promo" 
                      ? "bg-background text-foreground shadow-sm" 
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <Package className={cn("w-4 h-4", activeTab === "promo" ? "text-primary" : "")} />
                  Promotional
                </button>
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed h-16"
                >
                  {activeTab === "web" && "Build a website that works for you. From simple pages to full online stores. Click on any service to learn more."}
                  {activeTab === "social" && "Get more followers and turn them into customers. We handle the posting so you can focus on your business."}
                  {activeTab === "promo" && "Real things people can touch and use. Put your brand on items that stick around and make an impact."}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>
        </section>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid gap-3 md:grid-cols-2">
              {activeTab === "web" && webServices.map((service, index) => (
                <ServiceCard key={service.name} service={service} index={index} />
              ))}
              {activeTab === "social" && socialServices.map((service, index) => (
                <ServiceCard key={service.name} service={service} index={index} />
              ))}
              {activeTab === "promo" && promoProducts.map((service, index) => (
                <ServiceCard key={service.name} service={service} index={index} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <section className="py-16 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-8 lg:p-12">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4">Not Sure What You Need?</h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Book a free call with us. We'll listen to your goals and suggest the best services 
                  for your budget. No pressure, just helpful advice.
                </p>
                <Button size="lg" asChild className="group" data-testid="button-final-cta">
                  <Link href={CONSULTATION_URL}>
                    Book a Free Consultation
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
