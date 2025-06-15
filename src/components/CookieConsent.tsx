import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <Card>
        <CardContent className="p-4">
          <div className="flex justify-between items-start mb-3">
            <h3 className="font-semibold text-sm">Cookie Consent</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={rejectCookies}
              className="h-6 w-6 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            We use essential cookies to make our site work. We'd also like to use analytics cookies to understand how you use our service and improve your experience.
          </p>
          <div className="flex gap-2">
            <Button size="sm" onClick={acceptCookies}>
              Accept All
            </Button>
            <Button variant="outline" size="sm" onClick={rejectCookies}>
              Essential Only
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
