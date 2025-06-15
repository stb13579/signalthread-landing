import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ModeToggle } from "@/components/ModeToggle";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Favicon */}
          <div className="flex items-center gap-2">
            <img
              src="/signalthread.svg"
              alt="SignalThread logo"
              className="h-8 w-8"
            />
            <span className="font-bold text-lg">SignalThread</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Button variant="ghost" className="font-medium">
              Product
            </Button>
            <Button variant="ghost" className="font-medium">
              Company
            </Button>
            <Button variant="ghost" className="font-medium">
              Pricing
            </Button>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="hidden sm:flex">
              Early Access
            </Badge>
            <Button size="sm">
              Get Started
            </Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
