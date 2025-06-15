import { Users } from "lucide-react";

export const SocialProofSection = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Users className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Trusted by innovative product teams
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>🚀 Startup Founders</span>
            <span>📊 Product Managers</span>
            <span>💡 Innovation Teams</span>
            <span>🎯 Growth Leaders</span>
          </div>
        </div>
      </div>
    </section>
  );
};
