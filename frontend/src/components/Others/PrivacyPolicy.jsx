import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="header w-full h-16 bg-[#3498DB] rounded-t-lg shadow-md flex items-center px-6 mb-4">
          <button onClick={handleBack} className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors" aria-label="Go back">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-white hover:text-gray-800"
            />
          </button>
          <div className="text-xl font-semibold text-white ml-4">Privacy Policy</div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Privacy Policy for VeeraVox</h2>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Information We Collect</h3>
            <div className="space-y-2 text-gray-600">
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6">
                <li>Account information (name, email, phone number)</li>
                <li>Profile information and preferences</li>
                <li>Communications and messages within the app</li>
                <li>Usage data and interaction with our services</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">How We Use Your Information</h3>
            <div className="space-y-2 text-gray-600">
              <p>We use the collected information to:</p>
              <ul className="list-disc pl-6">
                <li>Provide and maintain our services</li>
                <li>Improve user experience</li>
                <li>Process and deliver messages</li>
                <li>Protect against misuse and unauthorized access</li>
                <li>Send important updates and notifications</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Data Security</h3>
            <p className="text-gray-600">
              We implement appropriate security measures to protect your personal information. This includes encryption of messages and secure storage of user data. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Third-Party Services</h3>
            <p className="text-gray-600">
              We may use third-party services to support our application. These services have their own privacy policies and may collect information as specified in their respective privacy policies.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Your Rights</h3>
            <div className="space-y-2 text-gray-600">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Data portability</li>
              </ul>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Contact Us</h3>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="space-y-2 text-gray-600">
              <p>Email: privacy@veeravox.com</p>
              <p>Phone: +91 8919964929</p>
              <p>Address: Guntur, AndhraPradesh, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
