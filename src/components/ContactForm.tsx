import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";

export const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [useCase, setUseCase] = useState("");
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !company) {
      toast({
        title: "Missing Information",
        description: "Please provide your email and company name.",
        variant: "destructive",
      });
      return;
    }

    if (!privacyConsent) {
      toast({
        title: "Privacy Consent Required",
        description: "Please agree to our privacy policy to continue.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert({
          email,
          company,
          role: role || null,
          use_case: useCase || null,
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Interest Registered!",
        description: "Thank you for your interest. We'll be in touch soon with early access details.",
      });

      // Reset form
      setEmail("");
      setCompany("");
      setRole("");
      setUseCase("");
      setPrivacyConsent(false);
      setMarketingConsent(false);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your information. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Get Early Access</CardTitle>
              <CardDescription className="text-base">
                Be among the first to transform your product discovery process. 
                Limited early access spots available.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      placeholder="Your Company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input
                      id="role"
                      placeholder="Product Manager, CEO, etc."
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="useCase">Primary Use Case</Label>
                    <Input
                      id="useCase"
                      placeholder="Feature prioritization, market research, etc."
                      value={useCase}
                      onChange={(e) => setUseCase(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="privacy"
                      checked={privacyConsent}
                      onCheckedChange={(checked) => setPrivacyConsent(checked as boolean)}
                      className="mt-1"
                    />
                    <div className="text-sm leading-5">
                      <Label htmlFor="privacy" className="font-normal cursor-pointer">
                        I agree to the <PrivacyPolicy /> and consent to the processing of my personal data for the purpose of this inquiry. *
                      </Label>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="marketing"
                      checked={marketingConsent}
                      onCheckedChange={(checked) => setMarketingConsent(checked as boolean)}
                      className="mt-1"
                    />
                    <div className="text-sm leading-5">
                      <Label htmlFor="marketing" className="font-normal cursor-pointer">
                        I would like to receive product updates and marketing communications (optional)
                      </Label>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Request Early Access
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Join 500+ product teams already on the waitlist
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
