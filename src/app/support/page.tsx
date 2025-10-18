import { Card } from "@/components/ui/card";
import Link from "next/link";

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

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1b3a] via-[#0f1022] to-[#0a0b1e] text-white font-sans">
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <WaveIcon />
            <span className="text-xl font-medium">44pixels</span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="space-y-12">

          {/* Support Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Support & Help</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Get help with our apps, understand our policies, and find answers to common questions.
            </p>
          </div>

          {/* Contact Information */}
          <Card className="bg-gray-800/40 border-gray-700/50 backdrop-blur-sm">
            <div className="p-8 space-y-6">
              <h2 className="text-2xl font-bold">Contact Us</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">General Support</h3>
                  <p className="text-gray-300">Email: support@44pixels.ai</p>
                  <p className="text-gray-300">We typically respond within 24-48 hours.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Business Inquiries</h3>
                  <p className="text-gray-300">Email: hello@44pixels.ai</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Address</h3>
                  <p className="text-gray-300">44pixels Ltd.<br />London, United Kingdom</p>
                </div>
              </div>
            </div>
          </Card>

          {/* App-Specific Support */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gray-800/40 border-gray-700/50 backdrop-blur-sm">
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center">⚫</div>
                  <h3 className="text-xl font-bold">Pixi Chat Support</h3>
                </div>
                <p className="text-gray-300">
                  Get help with Pixi Chat features, troubleshooting, and account management.
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>• Chat history and sync issues</p>
                  <p>• Model selection and preferences</p>
                  <p>• Account and subscription support</p>
                  <p>• Technical troubleshooting</p>
                </div>
              </div>
            </Card>

            <Card className="bg-gray-800/40 border-gray-700/50 backdrop-blur-sm">
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center">🎵</div>
                  <h3 className="text-xl font-bold">Cue Support</h3>
                </div>
                <p className="text-gray-300">
                  Audio companion app support and troubleshooting assistance.
                </p>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>• Audio playback issues</p>
                  <p>• Sync and connectivity problems</p>
                  <p>• Feature requests and feedback</p>
                  <p>• Performance optimization</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Privacy Policy */}
          <Card className="bg-gray-800/40 border-gray-700/50 backdrop-blur-sm">
            <div className="p-8 space-y-6">
              <h2 className="text-2xl font-bold">Privacy Policy</h2>
              <div className="space-y-4 text-gray-300">
                <p><strong>Last Updated:</strong> October 2024</p>

                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Information We Collect</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Usage data and app analytics to improve our services</li>
                    <li>Device information for compatibility and performance optimization</li>
                    <li>Optional account information if you choose to create an account</li>
                    <li>Crash reports and diagnostic data to fix bugs and improve stability</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">How We Use Your Information</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Provide and maintain our mobile applications</li>
                    <li>Improve app functionality and user experience</li>
                    <li>Respond to support requests and customer service inquiries</li>
                    <li>Send important updates about our services (with your consent)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Data Protection</h3>
                  <p className="text-sm">
                    We implement appropriate security measures to protect your personal information.
                    We do not sell, trade, or share your personal data with third parties without your consent,
                    except as required by law or to provide our services.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Your Rights</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Request access to your personal data</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Opt-out of marketing communications</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          {/* Terms of Service */}
          <Card className="bg-gray-800/40 border-gray-700/50 backdrop-blur-sm">
            <div className="p-8 space-y-6">
              <h2 className="text-2xl font-bold">Terms of Service</h2>
              <div className="space-y-4 text-gray-300">
                <p><strong>Last Updated:</strong> October 2024</p>

                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Acceptance of Terms</h3>
                  <p className="text-sm">
                    By downloading, installing, or using our mobile applications, you agree to be bound by these Terms of Service.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Use of Our Services</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>You must be at least 13 years old to use our applications</li>
                    <li>You agree to use our services only for lawful purposes</li>
                    <li>You will not attempt to reverse engineer or modify our applications</li>
                    <li>You will not use our services to transmit harmful or illegal content</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Intellectual Property</h3>
                  <p className="text-sm">
                    Our applications, including all content, features, and functionality, are owned by 44pixels Ltd.
                    and are protected by international copyright, trademark, and other intellectual property laws.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Limitation of Liability</h3>
                  <p className="text-sm">
                    44pixels Ltd. shall not be liable for any indirect, incidental, special, consequential, or punitive damages
                    resulting from your use of our applications. Our total liability shall not exceed the amount you paid for our services.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Modifications</h3>
                  <p className="text-sm">
                    We reserve the right to modify these terms at any time. We will notify users of significant changes
                    through our applications or website.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* App Store Compliance */}
          <Card className="bg-gray-800/40 border-gray-700/50 backdrop-blur-sm">
            <div className="p-8 space-y-6">
              <h2 className="text-2xl font-bold">App Store Compliance</h2>
              <div className="space-y-4 text-gray-300">

                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Age Rating</h3>
                  <p className="text-sm">
                    Our applications are rated 4+ and are appropriate for all ages. We do not knowingly collect
                    personal information from children under 13 without parental consent.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Content Guidelines</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>All content in our apps complies with App Store guidelines</li>
                    <li>We do not display objectionable content</li>
                    <li>AI-generated content is clearly marked and filtered for appropriateness</li>
                    <li>User-generated content is moderated and filtered</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Subscriptions & Purchases</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>All in-app purchases are processed through official app stores</li>
                    <li>Subscription terms are clearly displayed before purchase</li>
                    <li>Users can manage subscriptions through their device settings</li>
                    <li>Refunds are handled according to app store policies</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Data Security</h3>
                  <p className="text-sm">
                    We implement industry-standard security measures and comply with relevant data protection regulations
                    including GDPR and CCPA where applicable.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* FAQ */}
          <Card className="bg-gray-800/40 border-gray-700/50 backdrop-blur-sm">
            <div className="p-8 space-y-6">
              <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
              <div className="space-y-4">

                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">How do I delete my account?</h3>
                  <p className="text-gray-300 text-sm">
                    You can delete your account by contacting our support team at support@44pixels.ai.
                    We will process your request within 30 days and permanently delete your data.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Do you store my conversations?</h3>
                  <p className="text-gray-300 text-sm">
                    Conversations may be temporarily stored to provide continuity within the app session.
                    We do not permanently store personal conversations unless you explicitly save them.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">How can I report inappropriate content?</h3>
                  <p className="text-gray-300 text-sm">
                    If you encounter inappropriate content, please contact us immediately at support@44pixels.ai
                    with details. We take content moderation seriously and will investigate promptly.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">Can I use the app offline?</h3>
                  <p className="text-gray-300 text-sm">
                    Some features require an internet connection for AI processing. Basic functionality
                    may be available offline, but full features require connectivity.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Footer */}
          <div className="text-center pt-12 border-t border-gray-700/50">
            <p className="text-gray-400 text-sm mb-4">
              © 2024 44pixels Ltd. All rights reserved.
            </p>
            <div className="flex justify-center gap-6 text-sm">
              <Link href="/" className="text-gray-400 hover:text-gray-300 transition-colors">
                Home
              </Link>
              <span className="text-gray-600">•</span>
              <a href="mailto:support@44pixels.ai" className="text-gray-400 hover:text-gray-300 transition-colors">
                Contact
              </a>
              <span className="text-gray-600">•</span>
              <a href="#privacy" className="text-gray-400 hover:text-gray-300 transition-colors">
                Privacy
              </a>
              <span className="text-gray-600">•</span>
              <a href="#terms" className="text-gray-400 hover:text-gray-300 transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}