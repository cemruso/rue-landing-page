import { Card } from "@/components/ui/card";
import Image from "next/image";
import RueLayout from "@/components/RueLayout";

export default function Home() {
  return (
    <RueLayout>
      {/* Main Content - Progressive visual rhythm with decreasing weights */}
      <div className="space-y-16 mb-24 max-w-xl mx-auto">
        <p className="text-base-900 text-2xl leading-relaxed font-normal tracking-tight">
          We create transformative mobile experiences that help you understand yourself and unlock your potential.
        </p>

        <p className="text-base-700 text-lg leading-loose font-extralight">
          Our flagship app brings the ancient wisdom of Human Design to modern life with AI-powered insights and personalized guidance.
        </p>

        <p className="text-base-500 text-base leading-relaxed font-extralight">
          Built with care for seekers, creators, and anyone curious about their unique energetic blueprint in this world.
        </p>
      </div>

      {/* App Showcase - Centered visual anchor */}
      <div className="w-full max-w-sm mx-auto mb-24">
        <Card className="bg-card border-border hover:shadow-lg transition-shadow">
          <div className="p-10 flex items-center justify-center">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-xl bg-primary-100 flex items-center justify-center shrink-0">
                <Image
                  src="/rue-icon.png"
                  alt="Rue Human Design"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
              </div>
              <div className="text-left">
                <h3 className="text-foreground font-semibold text-base mb-1.5">
                  Rue Human Design
                </h3>
                <p className="text-muted-foreground text-sm font-light leading-snug">
                  Discover your energetic blueprint
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* CTA Section - Strong visual weight */}
      <div className="space-y-10 mb-28">
        <p className="text-base-900 text-xl font-light">
          Ready to discover your design?
        </p>
        
        <a
          href="https://apps.apple.com/app/rue-human-design/id6670526055"
          className="inline-block text-primary-700 underline decoration-primary-400 underline-offset-8 hover:decoration-primary-700 transition-colors text-xl font-semibold"
        >
          Download now
        </a>
      </div>

      {/* Help Section - De-emphasized */}
      <p className="text-base-400 text-sm font-extralight">
        Questions about Human Design or need support?
      </p>
    </RueLayout>
  );
}
