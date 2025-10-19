import RueLayout from "@/components/RueLayout";
import { Card } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <RueLayout>
      <div className="space-y-12 text-left max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-base-950">Privacy Policy</h1>
          <p className="text-base-700 text-lg">
            Last Updated: October 19, 2025
          </p>
        </div>

        {/* Introduction */}
        <Card className="bg-card border-border">
          <div className="p-8 space-y-4">
            <h2 className="text-2xl font-bold text-base-950">Introduction</h2>
            <p className="text-base-700">
              At Rue Studios, we take your privacy seriously. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you use our mobile application, Rue Human Design
              (the &ldquo;App&rdquo;).
            </p>
            <p className="text-base-700">
              Please read this privacy policy carefully. If you do not agree
              with the terms of this privacy policy, please do not access the
              App.
            </p>
          </div>
        </Card>

        {/* Information We Collect */}
        <Card className="bg-card border-border">
          <div className="p-8 space-y-6">
            <h2 className="text-2xl font-bold text-base-950">
              Information We Collect
            </h2>

            <div>
              <h3 className="text-lg font-semibold text-base-900 mb-3">
                Personal Information You Provide
              </h3>
              <p className="text-base-700 mb-2">
                When you use our App, we may collect the following personal
                information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base-700 text-sm ml-4">
                <li>
                  <strong>Birth Information:</strong> Date, time, and location
                  of birth to generate your Human Design chart
                </li>
                <li>
                  <strong>Account Information:</strong> Email address and
                  password if you create an account
                </li>
                <li>
                  <strong>Profile Information:</strong> Name or username,
                  profile picture (optional)
                </li>
                <li>
                  <strong>Communications:</strong> Information you provide when
                  contacting our support team
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-base-900 mb-3">
                Automatically Collected Information
              </h3>
              <p className="text-base-700 mb-2">
                When you use the App, we may automatically collect certain
                information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base-700 text-sm ml-4">
                <li>
                  <strong>Device Information:</strong> Device type, operating
                  system version, unique device identifiers
                </li>
                <li>
                  <strong>Usage Data:</strong> App features used, time spent in
                  the app, interactions with content
                </li>
                <li>
                  <strong>Diagnostic Data:</strong> Crash reports, performance
                  metrics, and error logs
                </li>
                <li>
                  <strong>Location Data:</strong> General location
                  (city/country) for chart calculations, with your permission
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-base-900 mb-3">
                AI Interaction Data
              </h3>
              <p className="text-base-700 text-sm">
                When you interact with AI features in the App, we may process
                your queries and responses to provide personalized insights.
                This data is processed securely and is not used to train
                third-party AI models.
              </p>
            </div>
          </div>
        </Card>

        {/* How We Use Your Information */}
        <Card className="bg-card border-border">
          <div className="p-8 space-y-6">
            <h2 className="text-2xl font-bold text-base-950">
              How We Use Your Information
            </h2>
            <p className="text-base-700 mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-base-700 text-sm ml-4">
              <li>
                <strong>Provide Services:</strong> Generate your Human Design
                chart and provide personalized insights
              </li>
              <li>
                <strong>Account Management:</strong> Create and manage your
                account, authenticate your identity
              </li>
              <li>
                <strong>Improve the App:</strong> Analyze usage patterns to
                enhance features and user experience
              </li>
              <li>
                <strong>Customer Support:</strong> Respond to your inquiries and
                provide technical assistance
              </li>
              <li>
                <strong>Communication:</strong> Send important updates, security
                alerts, and support messages
              </li>
              <li>
                <strong>Security:</strong> Detect, prevent, and address
                technical issues, fraud, or security vulnerabilities
              </li>
              <li>
                <strong>Legal Compliance:</strong> Comply with applicable laws,
                regulations, and legal processes
              </li>
              <li>
                <strong>Analytics:</strong> Understand how users interact with
                the App to improve functionality
              </li>
            </ul>
          </div>
        </Card>

        {/* Information Sharing */}
        <Card className="bg-card border-border">
          <div className="p-8 space-y-6">
            <h2 className="text-2xl font-bold text-base-950">
              How We Share Your Information
            </h2>
            <p className="text-base-700 mb-4">
              We do not sell, rent, or trade your personal information. We may
              share your information only in the following limited
              circumstances:
            </p>

            <div>
              <h3 className="text-lg font-semibold text-base-900 mb-2">
                Service Providers
              </h3>
              <p className="text-base-700 text-sm">
                We may share information with third-party service providers who
                perform services on our behalf, such as:
              </p>
              <ul className="list-disc list-inside space-y-1 text-base-700 text-sm ml-4 mt-2">
                <li>Cloud hosting services (for secure data storage)</li>
                <li>AI processing services (for personalized insights)</li>
                <li>Analytics providers (to understand app usage)</li>
                <li>Customer support tools</li>
              </ul>
              <p className="text-base-700 text-sm mt-2">
                These service providers are contractually bound to protect your
                information and use it only for the purposes we specify.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-base-900 mb-2">
                Legal Requirements
              </h3>
              <p className="text-base-700 text-sm">
                We may disclose your information if required to do so by law or
                in response to valid requests by public authorities (e.g., a
                court or government agency).
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-base-900 mb-2">
                Business Transfers
              </h3>
              <p className="text-base-700 text-sm">
                If we are involved in a merger, acquisition, or sale of assets,
                your information may be transferred as part of that transaction.
                We will notify you of any such change.
              </p>
            </div>
          </div>
        </Card>

        {/* Data Security */}
        <Card className="bg-card border-border">
          <div className="p-8 space-y-4">
            <h2 className="text-2xl font-bold text-base-950">Data Security</h2>
            <p className="text-base-700">
              We implement appropriate technical and organizational security
              measures to protect your personal information against unauthorized
              access, alteration, disclosure, or destruction.
            </p>
            <p className="text-base-700">Our security measures include:</p>
            <ul className="list-disc list-inside space-y-2 text-base-700 text-sm ml-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure authentication and access controls</li>
              <li>Regular security assessments and updates</li>
              <li>
                Limited access to personal information by authorized personnel
                only
              </li>
            </ul>
            <p className="text-base-700 text-sm mt-4">
              However, please be aware that no method of transmission over the
              internet or electronic storage is 100% secure. While we strive to
              protect your personal information, we cannot guarantee its
              absolute security.
            </p>
          </div>
        </Card>

        {/* Data Retention */}
        <Card className="bg-card border-border">
          <div className="p-8 space-y-4">
            <h2 className="text-2xl font-bold text-base-950">Data Retention</h2>
            <p className="text-base-700">
              We retain your personal information only for as long as necessary
              to fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required or permitted by law.
            </p>
            <p className="text-base-700">
              When you delete your account, we will delete or anonymize your
              personal information within 30 days, except where we are required
              to retain certain information for legal, accounting, or security
              purposes.
            </p>
          </div>
        </Card>

        {/* Your Rights */}
        <Card className="bg-card border-border">
          <div className="p-8 space-y-6">
            <h2 className="text-2xl font-bold text-base-950">
              Your Privacy Rights
            </h2>
            <p className="text-base-700 mb-4">
              Depending on your location, you may have the following rights
              regarding your personal information:
            </p>

            <ul className="list-disc list-inside space-y-2 text-base-700 text-sm ml-4">
              <li>
                <strong>Access:</strong> Request a copy of the personal
                information we hold about you
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate or
                incomplete information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal
                information
              </li>
              <li>
                <strong>Portability:</strong> Request transfer of your data to
                another service
              </li>
              <li>
                <strong>Objection:</strong> Object to certain processing of your
                personal information
              </li>
              <li>
                <strong>Restriction:</strong> Request restriction of processing
                in certain circumstances
              </li>
              <li>
                <strong>Withdrawal of Consent:</strong> Withdraw consent where
                processing is based on consent
              </li>
            </ul>

            <p className="text-base-700 mt-4">
              To exercise any of these rights, please contact us at{" "}
              <a
                href="mailto:support@ruestudios.app"
                className="text-primary-700 underline decoration-primary-400 underline-offset-4 hover:decoration-primary-700 transition-colors"
              >
                support@ruestudios.app
              </a>
              . We will respond to your request within 30 days.
            </p>
          </div>
        </Card>

        {/* Children's Privacy */}
        <Card className="bg-card border-border">
          <div className="p-8 space-y-4">
            <h2 className="text-2xl font-bold text-base-950">
              Children&apos;s Privacy
            </h2>
            <p className="text-base-700">
              Our App is not intended for children under the age of 13. We do
              not knowingly collect personal information from children under 13.
              If we become aware that we have collected personal information
              from a child under 13 without parental consent, we will take steps
              to delete that information.
            </p>
            <p className="text-base-700">
              If you are a parent or guardian and believe your child has
              provided us with personal information, please contact us at{" "}
              <a
                href="mailto:support@ruestudios.app"
                className="text-primary-700 underline decoration-primary-400 underline-offset-4 hover:decoration-primary-700 transition-colors"
              >
                support@ruestudios.app
              </a>
              .
            </p>
          </div>
        </Card>

        {/* California Privacy Rights */}
        <Card className="bg-card border-border">
          <div className="p-8 space-y-4">
            <h2 className="text-2xl font-bold text-base-950">
              California Privacy Rights (CCPA)
            </h2>
            <p className="text-base-700">
              If you are a California resident, you have additional rights under
              the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc list-inside space-y-2 text-base-700 text-sm ml-4">
              <li>
                Right to know what personal information we collect, use,
                disclose, and sell
              </li>
              <li>Right to request deletion of your personal information</li>
              <li>
                Right to opt-out of the sale of personal information (we do not
                sell personal information)
              </li>
              <li>
                Right to non-discrimination for exercising your privacy rights
              </li>
            </ul>
            <p className="text-base-700 mt-4 text-sm">
              To exercise these rights, please contact us at
              support@ruestudios.app with the subject line &ldquo;California
              Privacy Request.&rdquo;
            </p>
          </div>
        </Card>

        {/* GDPR Rights */}
        <Card className="bg-card border-border">
          <div className="p-8 space-y-4">
            <h2 className="text-2xl font-bold text-base-950">
              European Privacy Rights (GDPR)
            </h2>
            <p className="text-base-700">
              If you are located in the European Economic Area (EEA), United
              Kingdom, or Switzerland, you have additional rights under the
              General Data Protection Regulation (GDPR):
            </p>
            <ul className="list-disc list-inside space-y-2 text-base-700 text-sm ml-4">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure (&ldquo;right to be forgotten&rdquo;)</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to withdraw consent at any time</li>
              <li>Right to lodge a complaint with a supervisory authority</li>
            </ul>
            <p className="text-base-700 mt-4">
              Our legal basis for processing your personal data includes:
            </p>
            <ul className="list-disc list-inside space-y-1 text-base-700 text-sm ml-4">
              <li>Performance of a contract (providing the App services)</li>
              <li>Your consent (for certain processing activities)</li>
              <li>Legitimate interests (improving our services, security)</li>
              <li>Legal obligations (compliance with laws)</li>
            </ul>
          </div>
        </Card>

        {/* Third-Party Services */}
        <Card className="bg-card border-border">
          <div className="p-8 space-y-4">
            <h2 className="text-2xl font-bold text-base-950">
              Third-Party Services
            </h2>
            <p className="text-base-700">
              Our App may contain links to third-party websites or services. We
              are not responsible for the privacy practices of these third
              parties. We encourage you to read the privacy policies of any
              third-party services you access through our App.
            </p>
            <p className="text-base-700">
              The App uses the following third-party services:
            </p>
            <ul className="list-disc list-inside space-y-1 text-base-700 text-sm ml-4">
              <li>
                Apple App Store (for app distribution and in-app purchases)
              </li>
              <li>
                OpenAI/Anthropic (for AI-powered insights, processed securely)
              </li>
              <li>Cloud storage providers (for secure data storage)</li>
            </ul>
          </div>
        </Card>

        {/* Cookies and Tracking */}
        <Card className="bg-card border-border">
          <div className="p-8 space-y-4">
            <h2 className="text-2xl font-bold text-base-950">
              Cookies and Tracking Technologies
            </h2>
            <p className="text-base-700">
              Our App does not use cookies. However, we may use similar
              technologies such as local storage to maintain your app
              preferences and session information. These technologies help us
              provide a better user experience.
            </p>
            <p className="text-base-700">
              We use analytics tools to understand how users interact with the
              App. This helps us improve functionality and fix bugs. You can opt
              out of analytics in the App settings.
            </p>
          </div>
        </Card>

        {/* International Data Transfers */}
        <Card className="bg-card border-border">
          <div className="p-8 space-y-4">
            <h2 className="text-2xl font-bold text-base-950">
              International Data Transfers
            </h2>
            <p className="text-base-700">
              Your information may be transferred to and maintained on servers
              located outside of your state, province, country, or other
              governmental jurisdiction where data protection laws may differ
              from those in your jurisdiction.
            </p>
            <p className="text-base-700">
              We ensure that appropriate safeguards are in place to protect your
              information when it is transferred internationally, including the
              use of Standard Contractual Clauses approved by the European
              Commission.
            </p>
          </div>
        </Card>

        {/* Changes to Privacy Policy */}
        <Card className="bg-card border-border">
          <div className="p-8 space-y-4">
            <h2 className="text-2xl font-bold text-base-950">
              Changes to This Privacy Policy
            </h2>
            <p className="text-base-700">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by:
            </p>
            <ul className="list-disc list-inside space-y-1 text-base-700 text-sm ml-4">
              <li>
                Updating the &ldquo;Last Updated&rdquo; date at the top of this
                policy
              </li>
              <li>Posting a notice in the App</li>
              <li>Sending you an email notification (for material changes)</li>
            </ul>
            <p className="text-base-700 mt-4">
              Your continued use of the App after any changes indicates your
              acceptance of the updated Privacy Policy.
            </p>
          </div>
        </Card>

        {/* Contact Us */}
        <Card className="bg-card border-border">
          <div className="p-8 space-y-4">
            <h2 className="text-2xl font-bold text-base-950">Contact Us</h2>
            <p className="text-base-700">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="space-y-2 text-base-700 text-sm ml-4">
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:support@ruestudios.app"
                  className="text-primary-700 underline decoration-primary-400 underline-offset-4 hover:decoration-primary-700 transition-colors"
                >
                  support@ruestudios.app
                </a>
              </p>
              <p>
                <strong>Company:</strong> Rue Studios
              </p>
            </div>
            <p className="text-base-700 mt-4">
              We will respond to your inquiry within 30 days.
            </p>
          </div>
        </Card>
      </div>
    </RueLayout>
  );
}
