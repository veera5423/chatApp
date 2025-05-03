import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center">Terms of Use & Service</h1>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using VeeraVox, you agree to be bound by these Terms of Use and Service. If you do not agree to these terms, please do not use our application.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">2. User Accounts</h2>
            <div className="space-y-2 text-gray-600">
              <p>Users must:</p>
              <ul className="list-disc pl-6">
                <li>Be at least 13 years old to create an account</li>
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of their account credentials</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">3. User Conduct</h2>
            <div className="space-y-2 text-gray-600">
              <p>Users agree not to:</p>
              <ul className="list-disc pl-6">
                <li>Share harmful or inappropriate content</li>
                <li>Harass or bully other users</li>
                <li>Impersonate others</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Attempt to breach the application's security</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">4. Content Guidelines</h2>
            <p className="text-gray-600">
              Users are responsible for all content they share. We reserve the right to remove any content that violates our guidelines or terms of service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">5. Intellectual Property</h2>
            <p className="text-gray-600">
              All content and materials available through VeeraVox are protected by intellectual property rights. Users may not copy, modify, or distribute our content without permission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">6. Service Modifications</h2>
            <p className="text-gray-600">
              We reserve the right to modify or discontinue our service at any time. We will provide reasonable notice of any significant changes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">7. Limitation of Liability</h2>
            <p className="text-gray-600">
              VeeraVox is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of our service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">8. Contact Information</h2>
            <div className="space-y-2 text-gray-600">
              <p>For questions about these terms, contact us at:</p>
              <p>Email: terms@veeravox.com</p>
              <p>Phone: +91 8919964929</p>
              <p>Address: Guntur, AndhraPradesh, India</p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">9. Changes to Terms</h2>
            <p className="text-gray-600">
              We may update these terms periodically. Continued use of VeeraVox after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <div className="text-sm text-gray-500 text-center mt-8">
            Last updated: January 2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
