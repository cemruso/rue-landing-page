import { Card } from "@/components/ui/card";
import Image from "next/image";
import RueLayout from "@/components/RueLayout";

export default function Home() {
  return (
    <RueLayout>
      {/* Main Content */}
      <div className="space-y-8 mb-16">
        <p className="text-base-700 text-lg leading-relaxed">
          We create transformative mobile experiences that help you
          <br />
          understand yourself and unlock your potential.
        </p>

        <p className="text-base-700 text-lg leading-relaxed">
          Our flagship app brings the ancient wisdom of Human Design
          <br />
          to modern life with AI-powered insights and personalized guidance.
        </p>

        <p className="text-base-700 text-lg leading-relaxed">
          Built with care for seekers, creators, and anyone curious
          <br />
          about their unique energetic blueprint in this world.
        </p>

        <p className="text-base-700 text-lg">
          Ready to discover your design?{" "}
          <a
            href="https://apps.apple.com/app/rue-human-design/id6670526055"
            className="text-primary-700 underline decoration-primary-400 underline-offset-4 hover:decoration-primary-700 transition-colors font-medium"
          >
            Download now
          </a>
          .
        </p>
      </div>

      {/* App Showcase */}
      <div className="w-full max-w-sm mb-16">
        <Card className="bg-card border-border hover:shadow-lg transition-shadow">
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                <Image
                  src="/rue-icon.png"
                  alt="Rue Human Design"
                  width={24}
                  height={24}
                  className="rounded-lg"
                />
              </div>
              <div className="text-left">
                <h3 className="text-foreground font-semibold">
                  Rue Human Design
                </h3>
                <p className="text-muted-foreground text-sm">
                  Discover your energetic blueprint
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Help Section */}
      <p className="text-base-600 text-sm mb-8">
        Questions about Human Design or need support?
      </p>
    </RueLayout>
  );
}
