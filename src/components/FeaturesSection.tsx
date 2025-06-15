import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, TrendingUp, Target } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Why SignalThread?</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stop guessing what your users want. Start capturing real demand signals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center">
            <CardHeader>
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Capture Demand Signals</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Automatically detect and analyze user requests, feature demands, and market signals 
                from multiple channels in real-time.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>AI-Powered Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Transform raw signals into actionable insights with advanced AI analysis, 
                trend detection, and predictive modeling.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Data-Driven Decisions</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Make confident product decisions backed by real user data, 
                market validation, and comprehensive analytics.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
