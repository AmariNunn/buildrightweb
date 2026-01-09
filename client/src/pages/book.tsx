import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Calendar, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const CAL_EMBED_URL = "https://cal.com/skyiq/website-development";

export default function Book() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border/50 bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg">Build Right Web</span>
          </Link>
          <Link href="/services">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col py-12 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto w-full mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="secondary" className="mb-4 px-4 py-2 border border-primary/30 bg-primary/10">
              <Calendar className="w-4 h-4 mr-2" />
              Secure Your Growth
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6">
              Strategic{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Collaboration
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Precision planning leads to exponential results. Select a time below to align our 
              expertise with your vision and architect your next phase of digital dominance.
            </p>
          </motion.div>
        </div>

        <div className="flex-1 max-w-6xl mx-auto w-full bg-background rounded-xl border border-border/50 overflow-hidden shadow-2xl relative" style={{ minHeight: "800px" }}>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin mx-auto mb-4" />
                <p className="text-muted-foreground font-medium">Synchronizing with our calendar...</p>
              </div>
            </div>
          )}
          <div className="w-full h-full flex items-start justify-center overflow-hidden">
            <iframe
              src={`${CAL_EMBED_URL}?embed=true&layout=month_view&hideBranding=true`}
              className="w-[180%] h-[180%] origin-top border-none"
              style={{ 
                transform: "scale(0.55)",
                marginTop: "-250px"
              }}
              onLoad={() => setIsLoading(false)}
              title="Book a consultation"
              scrolling="no"
            />
          </div>
        </div>
      </main>

      <footer className="border-t border-border/50 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Build Right Web. Accelerating Digital Evolution.
        </div>
      </footer>
    </div>
  );
}
