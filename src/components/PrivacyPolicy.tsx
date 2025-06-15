import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const PrivacyPolicy = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="link" className="p-0 h-auto text-xs text-muted-foreground underline">
          Privacy Policy
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-sm">
          <section>
            <h3 className="font-semibold mb-2">Data Collection</h3>
            <p>We collect the following information when you submit our contact form:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Email address (required)</li>
              <li>Company name (required)</li>
              <li>Job role (optional)</li>
              <li>Use case information (optional)</li>
            </ul>
          </section>
          
          <section>
            <h3 className="font-semibold mb-2">How We Use Your Data</h3>
            <p>Your data is used exclusively to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Contact you about our early access program</li>
              <li>Provide you with relevant product information</li>
              <li>Improve our services based on your feedback</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold mb-2">Data Retention</h3>
            <p>We retain your data only as long as necessary to fulfill the purposes outlined above. You can request deletion of your data at any time.</p>
          </section>

          <section>
            <h3 className="font-semibold mb-2">Your Rights</h3>
            <p>Under GDPR, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold mb-2">Contact</h3>
            <p>For any privacy-related questions or to exercise your rights, contact us at privacy@signalthread.com</p>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
};
