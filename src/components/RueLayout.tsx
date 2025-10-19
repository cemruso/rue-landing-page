import Image from "next/image";
import Link from "next/link";

export default function RueLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cream text-foreground font-sans flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-8 py-20 flex flex-col items-center text-center">
        {/* Logo and Header */}
        <div className="flex items-center gap-4 mb-20">
          <Image
            src="/rue-icon.png"
            alt="Rue"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <Link
            href="/"
            className="text-3xl font-light tracking-tight text-base-950 hover:opacity-80 transition-opacity"
          >
            Rue Studios
          </Link>
        </div>

        {/* Main Content */}
        <div className="w-full">{children}</div>

        {/* Footer Links */}
        <div className="mt-24 flex gap-6 text-sm">
          <Link
            href="/support"
            className="text-base-600 underline decoration-base-300 underline-offset-4 hover:text-base-800 hover:decoration-base-500 transition-colors"
          >
            App Support
          </Link>
          <span className="text-base-400">•</span>
          <Link
            href="/privacy"
            className="text-base-600 underline decoration-base-300 underline-offset-4 hover:text-base-800 hover:decoration-base-500 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Footer Text */}
        <p className="mt-10 text-base-500 text-xs tracking-wide">
          © {new Date().getFullYear()} Rue Studios. All rights reserved.
        </p>
      </div>
    </div>
  );
}
