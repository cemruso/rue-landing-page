import { Card } from "@/components/ui/card";
import Image from "next/image";
import RueLayout from "@/components/RueLayout";

export default function Home() {
  return (
    <RueLayout>
      {/* Main Content */}
      <div className="space-y-12 mb-20">
        <p className="text-base-800 text-xl leading-loose font-light tracking-wide max-w-2xl mx-auto">
          We create transformative mobile experiences that help you
          <br />
          understand yourself and unlock your potential.
        </p>

        <p className="text-base-700 text-lg leading-loose tracking-wide max-w-2xl mx-auto">
          Our flagship app brings the ancient wisdom of Human Design
          <br />
          to modern life with AI-powered insights and personalized guidance.
        </p>

        <p className="text-base-600 text-base leading-loose tracking-wide max-w-2xl mx-auto">
          Built with care for seekers, creators, and anyone curious
          <br />
          about their unique energetic blueprint in this world.
        </p>
      </div>

      {/* App Showcase */}
      <div className="w-full max-w-md mx-auto mb-20">
        <Card className="bg-card border-border hover:shadow-xl transition-all duration-300">
          <div className="p-8 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-xl bg-primary-100 flex items-center justify-center">
                <Image
                  src="/rue-icon.png"
                  alt="Rue Human Design"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
              </div>
              <div className="text-left">
                <h3 className="text-foreground font-semibold text-lg tracking-tight">
                  Rue Human Design
                </h3>
                <p className="text-muted-foreground text-sm tracking-wide mt-1">
                  Discover your energetic blueprint
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="space-y-8">
        <p className="text-base-800 text-lg font-light tracking-wide">
          Ready to discover your design?
        </p>
        
        <a
          href="https://apps.apple.com/app/rue-human-design/id6670526055"
          className="inline-block text-primary-700 underline decoration-primary-400 underline-offset-8 hover:decoration-primary-700 transition-colors text-lg font-medium tracking-wide"
        >
          Download now
        </a>
      </div>

      {/* Help Section */}
      <p className="text-base-500 text-sm tracking-wide mt-20">
        Questions about Human Design or need support?
      </p>
    </RueLayout>
  );
}
