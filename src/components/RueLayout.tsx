import Image from "next/image";
import Link from "next/link";

export default function RueLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary-50/30 text-foreground font-sans relative overflow-hidden">
      {/* Subtle background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-4 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl animate-pulse animation-delay-1000" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 py-12 sm:py-20 flex flex-col items-center text-center">
        {/* Logo and Header */}
        <div className="flex items-center gap-3 mb-16 sm:mb-20 animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-xl blur-lg" />
            <Image
              src="/rue-icon.png"
              alt="Rue"
              width={36}
              height={36}
              className="rounded-xl relative shadow-sm"
            />
          </div>
          <Link
            href="/"
            className="text-2xl sm:text-3xl font-light text-foreground/90 hover:text-foreground transition-colors tracking-tight"
          >
            Rue Studios
          </Link>
        </div>

        {/* Main Content */}
        <div className="w-full">{children}</div>

        {/* Footer Links */}
        <div className="mt-20 sm:mt-24 flex items-center gap-6 text-xs sm:text-sm animate-fade-in animation-delay-800">
          <Link
            href="/support"
            className="text-muted-foreground hover:text-foreground transition-colors font-light"
          >
            App Support
          </Link>
          <span className="text-border">•</span>
          <Link
            href="/privacy"
            className="text-muted-foreground hover:text-foreground transition-colors font-light"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Footer Text */}
        <p className="mt-8 text-muted-foreground/50 text-xs font-light tracking-wide">
          © {new Date().getFullYear()} Rue Studios. All rights reserved.
        </p>
      </div>
    </div>
  );
}
