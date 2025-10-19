import RueLayout from "@/components/RueLayout";
import { Card } from "@/components/ui/card";

export default function SupportPage() {
  return (
    <RueLayout>
      <div className="space-y-12 text-left max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-base-950">App Support</h1>
          <p className="text-base-700 text-lg">
            Get help with Rue Human Design and find answers to common questions.
          </p>
        </div>

        {/* Contact Information */}
        <Card className="bg-card border-border">
          <div className="p-8 space-y-6">
            <h2 className="text-2xl font-bold text-base-950">Contact Us</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-base-900 mb-2">
                  General Support
                </h3>
                <p className="text-base-700">
                  Email:{" "}
                  <a
                    href="mailto:support@ruestudios.app"
                    className="text-primary-700 underline decoration-primary-400 underline-offset-4 hover:decoration-primary-700 transition-colors"
                  >
                    support@ruestudios.app
                  </a>
                </p>
                <p className="text-base-600 text-sm mt-1">
                  We typically respond within 24-48 hours.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-base-900 mb-2">
                  Business Inquiries
                </h3>
                <p className="text-base-700">
                  Email:{" "}
                  <a
                    href="mailto:hello@ruestudios.app"
                    className="text-primary-700 underline decoration-primary-400 underline-offset-4 hover:decoration-primary-700 transition-colors"
                  >
                    hello@ruestudios.app
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* App Information */}
        <Card className="bg-card border-border">
          <div className="p-8 space-y-6">
            <h2 className="text-2xl font-bold text-base-950">
              About Rue Human Design
            </h2>
            <div className="space-y-4">
              <p className="text-base-700">
                Rue Human Design is your personal guide to understanding your
                unique energetic blueprint. Our app combines the ancient wisdom
                of Human Design with modern AI technology to provide
                personalized insights and guidance for your journey of
                self-discovery.
              </p>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-base-900">
                  Key Features:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-base-700">
                  <li>
                    Personalized Human Design chart based on your birth
                    information
                  </li>
                  <li>AI-powered insights tailored to your unique design</li>
                  <li>Daily guidance and decision-making support</li>
                  <li>Learn about your Type, Strategy, Authority, and more</li>
                  <li>
                    Beautifully designed interface with intuitive navigation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* FAQ Section */}
        <Card className="bg-card border-border">
          <div className="p-8 space-y-6">
            <h2 className="text-2xl font-bold text-base-950">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-base-900 mb-2">
                  How do I get started with Rue?
                </h3>
                <p className="text-base-700 text-sm">
                  Simply download the app from the App Store, enter your birth
                  information (date, time, and location), and Rue will generate
                  your personalized Human Design chart. From there, you can
                  explore your design and receive AI-powered insights tailored
                  to you.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-base-900 mb-2">
                  What is Human Design?
                </h3>
                <p className="text-base-700 text-sm">
                  Human Design is a system that combines ancient wisdom
                  traditions (including the I Ching, astrology, Kabbalah, and
                  chakras) with modern science. It provides a unique blueprint
                  of your energetic makeup, helping you understand how
                  you&apos;re designed to interact with the world.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-base-900 mb-2">
                  Do I need to know my exact birth time?
                </h3>
                <p className="text-base-700 text-sm">
                  Yes, your exact birth time is important for an accurate Human
                  Design chart. If you don&apos;t know your birth time, you can
                  often find it on your birth certificate or by contacting the
                  hospital where you were born.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-base-900 mb-2">
                  Is my data private and secure?
                </h3>
                <p className="text-base-700 text-sm">
                  Absolutely. We take your privacy seriously. Your birth
                  information and personal data are encrypted and stored
                  securely. We never share your personal information with third
                  parties. See our{" "}
                  <a
                    href="/privacy"
                    className="text-primary-700 underline decoration-primary-400 underline-offset-4 hover:decoration-primary-700 transition-colors"
                  >
                    Privacy Policy
                  </a>{" "}
                  for more details.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-base-900 mb-2">
                  How do I delete my account?
                </h3>
                <p className="text-base-700 text-sm">
                  You can delete your account at any time by contacting us at
                  support@ruestudios.app. We will process your request within 30
                  days and permanently delete all your personal data.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-base-900 mb-2">
                  Do you offer subscriptions?
                </h3>
                <p className="text-base-700 text-sm">
                  The app offers both free and premium features. Premium
                  subscriptions unlock advanced insights, unlimited AI
                  interactions, and exclusive content. All subscriptions are
                  managed through your Apple ID and can be canceled at any time
                  in your device settings.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-base-900 mb-2">
                  How do I cancel my subscription?
                </h3>
                <p className="text-base-700 text-sm">
                  To cancel your subscription, go to Settings → [Your Name] →
                  Subscriptions on your iOS device, find Rue Human Design, and
                  select &ldquo;Cancel Subscription.&rdquo; You&apos;ll continue
                  to have access to premium features until the end of your
                  current billing period.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-base-900 mb-2">
                  The app isn&apos;t working properly. What should I do?
                </h3>
                <p className="text-base-700 text-sm">
                  First, try restarting the app or your device. If issues
                  persist, please email us at support@ruestudios.app with
                  details about the problem (including your device model and iOS
                  version), and we&apos;ll help you resolve it as quickly as
                  possible.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-base-900 mb-2">
                  How do I request a refund?
                </h3>
                <p className="text-base-700 text-sm">
                  All purchases are processed through the Apple App Store. To
                  request a refund, please visit Apple&apos;s Request a Refund
                  page at reportaproblem.apple.com. Refunds are subject to
                  Apple&apos;s refund policy.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Age Rating & Content */}
        <Card className="bg-card border-border">
          <div className="p-8 space-y-6">
            <h2 className="text-2xl font-bold text-base-950">
              Age Rating & Content Guidelines
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-base-900 mb-2">
                  Age Rating: 4+
                </h3>
                <p className="text-base-700 text-sm">
                  Rue Human Design is rated for ages 4 and up and contains no
                  objectionable content. The app provides educational and
                  inspirational content based on Human Design principles.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-base-900 mb-2">
                  Content Safety
                </h3>
                <ul className="list-disc list-inside space-y-1 text-base-700 text-sm">
                  <li>No violent, graphic, or objectionable content</li>
                  <li>AI-generated content is filtered for appropriateness</li>
                  <li>No advertisements or third-party tracking</li>
                  <li>Family-friendly and educational focus</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Technical Support */}
        <Card className="bg-card border-border">
          <div className="p-8 space-y-6">
            <h2 className="text-2xl font-bold text-base-950">
              Technical Requirements
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-base-900 mb-2">
                  System Requirements
                </h3>
                <ul className="list-disc list-inside space-y-1 text-base-700 text-sm">
                  <li>iOS 15.0 or later</li>
                  <li>iPhone, iPad, or iPod touch</li>
                  <li>Internet connection required for AI features</li>
                  <li>Approximately 50MB of storage space</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-base-900 mb-2">
                  Supported Languages
                </h3>
                <p className="text-base-700 text-sm">
                  Currently available in English, with more languages coming
                  soon.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Feedback */}
        <Card className="bg-card border-border">
          <div className="p-8 space-y-4">
            <h2 className="text-2xl font-bold text-base-950">
              We&apos;d Love to Hear From You
            </h2>
            <p className="text-base-700">
              Have suggestions, feedback, or feature requests? We&apos;re
              constantly improving Rue based on user feedback. Please reach out
              to us at{" "}
              <a
                href="mailto:hello@ruestudios.app"
                className="text-primary-700 underline decoration-primary-400 underline-offset-4 hover:decoration-primary-700 transition-colors"
              >
                hello@ruestudios.app
              </a>
              .
            </p>
            <p className="text-base-700">
              If you love using Rue, please consider leaving us a review on the
              App Store. Your reviews help others discover the app and support
              our small team!
            </p>
          </div>
        </Card>
      </div>
    </RueLayout>
  );
}
