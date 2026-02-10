import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const CAL_EMBED_URL = "https://cal.com/skyiq/website-development";

export default function Book() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col pt-20 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8">
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
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight mb-6">
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

        <div className="flex-1 max-w-6xl mx-auto w-full bg-background rounded-xl border border-border/50 overflow-hidden shadow-2xl relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[700px]">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full border-4 border-primary/30 border-t-primary animate-spin mx-auto mb-4" />
                <p className="text-muted-foreground font-medium">Synchronizing with our calendar...</p>
              </div>
            </div>
          )}
          <iframe
            src="https://cal.com/skyiq/website-development"
            className="w-full h-full border-none min-h-[60vh] sm:min-h-[70vh] lg:min-h-[700px]"
            onLoad={() => setIsLoading(false)}
            title="Book a consultation"
            allow="payment"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
