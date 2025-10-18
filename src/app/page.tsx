import { Card } from "@/components/ui/card";

const WaveIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className="text-white"
  >
    <path
      d="M3 12C3 12 5.5 7 12 7C18.5 7 21 12 21 12C21 12 18.5 17 12 17C5.5 17 3 12 3 12Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2"/>
    <path
      d="M2 6L4 8M20 6L18 8M6 2L8 4M16 2L18 4M2 18L4 16M20 18L18 16M6 22L8 20M16 22L18 20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default function Home() {
  const apps = [
    {
      icon: "⚫",
      name: "Pixi Chat",
      description: "One app, every model",
    },
    {
      icon: "🎵",
      name: "Cue",
      description: "Audio companion",
    },
    {
      icon: "✌️",
      name: "Deep",
      description: "Coming soon",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1b3a] via-[#0f1022] to-[#0a0b1e] text-white font-sans">
      <div className="max-w-2xl mx-auto px-6 py-16 flex flex-col items-center text-center">

        {/* Logo and Navigation */}
        <div className="flex items-center gap-2 mb-12">
          <WaveIcon />
          <span className="text-xl font-medium">44pixels</span>
        </div>

        {/* Main Content */}
        <div className="space-y-8 mb-16">
          <p className="text-gray-300 text-lg leading-relaxed">
            We're a team of product specialists building the next wave of
            <br />
            everyday mobile products—powered by AI.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Since launching in summer 2024, our apps are already in the
            <br />
            hands of millions of people worldwide.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Based in London, our team were previously building at
            <br />
            companies like Meta, X, Google, Unity, and Monzo. We're
            <br />
            actively hiring roles across product, marketing, and data.
          </p>

          <p className="text-gray-300 text-lg">
            If you're curious about what we're building,{" "}
            <a
              href="#"
              className="text-white underline decoration-gray-400 underline-offset-4 hover:decoration-white transition-colors"
            >
              drop us an email
            </a>
            .
          </p>
        </div>

        {/* Apps Grid */}
        <div className="space-y-4 w-full max-w-sm mb-16">
          {apps.map((app, index) => (
            <Card
              key={index}
              className="bg-gray-800/40 border-gray-700/50 backdrop-blur-sm hover:bg-gray-700/50 transition-colors cursor-pointer"
            >
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center text-sm">
                    {app.icon}
                  </div>
                  <span className="text-white font-medium">{app.name}</span>
                </div>
                <span className="text-gray-400 text-sm">{app.description}</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Help Section */}
        <p className="text-gray-400 text-sm mb-8">
          Need help with one of our apps?
        </p>

        {/* Footer Links */}
        <div className="flex gap-4 text-sm">
          <a
            href="#"
            className="text-gray-400 underline decoration-gray-600 underline-offset-4 hover:text-gray-300 hover:decoration-gray-400 transition-colors"
          >
            Pixi Support
          </a>
          <span className="text-gray-600">•</span>
          <a
            href="#"
            className="text-gray-400 underline decoration-gray-600 underline-offset-4 hover:text-gray-300 hover:decoration-gray-400 transition-colors"
          >
            Cue Support
          </a>
        </div>
      </div>
    </div>
  );
}
