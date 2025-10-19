import Image from "next/image";
import Link from "next/link";

export default function RueLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-cream text-foreground font-sans flex flex-col">
      {/* Main content area - vertically centered */}
      <div className="flex-1 flex items-center justify-center">
        <div className="max-w-3xl w-full mx-auto px-8 py-20 flex flex-col items-center text-center">
          {/* Logo and Header - Strong hierarchy with weight */}
          <div className="flex items-center gap-4 mb-24">
            <Image
              src="/rue-icon.png"
              alt="Rue"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <Link
              href="/"
              className="text-4xl font-light tracking-tight text-base-950 hover:opacity-70 transition-opacity"
            >
              Rue Studios
            </Link>
          </div>

          {/* Main Content */}
          <div className="w-full">{children}</div>
        </div>
      </div>

      {/* Footer - Grouped using proximity principle */}
      <div className="pb-16 flex flex-col items-center gap-7">
        <div className="flex gap-6 text-sm">
          <Link
            href="/support"
            className="text-base-600 underline decoration-base-300 underline-offset-4 hover:text-base-800 hover:decoration-base-500 transition-colors font-light"
          >
            App Support
          </Link>
          <span className="text-base-300">•</span>
          <Link
            href="/privacy"
            className="text-base-600 underline decoration-base-300 underline-offset-4 hover:text-base-800 hover:decoration-base-500 transition-colors font-light"
          >
            Privacy Policy
          </Link>
        </div>

        <p className="text-base-400 text-xs font-extralight tracking-wider">
          © {new Date().getFullYear()} Rue Studios. All rights reserved.
        </p>
      </div>
    </div>
  );
}
