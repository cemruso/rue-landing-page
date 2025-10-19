import Image from "next/image";
import Link from "next/link";

export default function RueLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cream text-foreground font-sans">
      <div className="max-w-2xl mx-auto px-6 py-16 flex flex-col items-center text-center">
        {/* Logo and Header */}
        <div className="flex items-center gap-3 mb-12">
          <Image
            src="/rue-icon.png"
            alt="Rue"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <Link
            href="/"
            className="text-2xl font-medium text-base-950 hover:opacity-80 transition-opacity"
          >
            Rue Studios
          </Link>
        </div>

        {/* Main Content */}
        <div className="w-full">{children}</div>

        {/* Footer Links */}
        <div className="mt-16 flex gap-4 text-sm">
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
        <p className="mt-8 text-base-500 text-xs">
          © {new Date().getFullYear()} Rue Studios. All rights reserved.
        </p>
      </div>
    </div>
  );
}
