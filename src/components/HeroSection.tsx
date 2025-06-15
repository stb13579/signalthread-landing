import { Badge } from "@/components/ui/badge";
import { TrendingUp } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Reference */}
          <div className="mb-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-4">
              SignalThread
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <TrendingUp className="h-8 w-8 text-primary" />
              <span className="text-xl text-muted-foreground italic">Signal. Insight. Action.</span>
            </div>
          </div>

          <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-foreground">
            Transform Product Discovery with 
            <span className="text-primary"> AI-Powered Decision Intelligence</span>
          </h2>
          
          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Capture demand signals, analyze user behavior, and make data-informed product decisions 
            that drive growth. Join the future of product discovery.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge variant="secondary" className="text-sm">Early Access</Badge>
            <Badge variant="secondary" className="text-sm">AI-Powered</Badge>
            <Badge variant="secondary" className="text-sm">Real-time Signals</Badge>
          </div>
        </div>
      </div>
    </section>
  );
};
