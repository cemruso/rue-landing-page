import { Card } from "@/components/ui/card";
import Image from "next/image";
import RueLayout from "@/components/RueLayout";

export default function Home() {
  return (
    <RueLayout>
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        {/* Hero Section */}
        <div className="space-y-12 mb-20 animate-fade-in-up">
          {/* Tagline */}
          <div className="space-y-6 max-w-2xl">
            <h1 className="text-foreground/90 text-xl sm:text-2xl leading-relaxed font-light tracking-wide text-center">
              We create transformative mobile experiences<br className="hidden sm:block" /> that help you understand yourself<br className="hidden sm:block" /> and unlock your potential.
            </h1>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center my-12">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          {/* Description */}
          <div className="space-y-8 max-w-xl">
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed text-center font-light">
              Our flagship app brings the ancient wisdom<br className="hidden sm:block" /> of Human Design to modern life with<br className="hidden sm:block" /> AI-powered insights and personalized guidance.
            </p>

            <p className="text-muted-foreground/80 text-sm sm:text-base leading-relaxed text-center font-light">
              Built with care for seekers, creators,<br className="hidden sm:block" /> and anyone curious about their unique<br className="hidden sm:block" /> energetic blueprint in this world.
            </p>
          </div>
        </div>

        {/* App Showcase Card */}
        <div className="w-full max-w-md mb-16 animate-fade-in-up animation-delay-200">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-border hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group">
            <div className="p-8 flex items-center gap-5">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src="/rue-icon.png"
                    alt="Rue Human Design"
                    width={32}
                    height={32}
                    className="rounded-xl"
                  />
                </div>
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-foreground font-medium text-lg mb-1 group-hover:text-foreground/90 transition-colors">
                  Rue Human Design
                </h3>
                <p className="text-muted-foreground text-sm font-light">
                  Discover your energetic blueprint
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4 mb-12 animate-fade-in-up animation-delay-400">
          <p className="text-foreground/70 text-sm sm:text-base font-light">
            Ready to discover your design?
          </p>
          <a
            href="https://apps.apple.com/app/rue-human-design/id6670526055"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-foreground/20"
          >
            Download now
          </a>
        </div>

        {/* Help Text */}
        <p className="text-muted-foreground/60 text-xs sm:text-sm font-light animate-fade-in-up animation-delay-600">
          Questions about Human Design or need support?
        </p>
      </div>
    </RueLayout>
  );
}
