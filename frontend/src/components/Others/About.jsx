import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const About = () => {
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
          <div className="text-xl font-semibold text-white ml-4">About VeeraVox</div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Welcome to VeeraVox</h2>
            <p className="text-gray-600">
              VeeraVox is a modern chat application designed to bring people together from all corners of the world. Our platform provides a seamless and intuitive way to connect, communicate, and build meaningful relationships.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-700">Real-time Chat</h4>
                <p className="text-gray-600">Instant messaging with real-time message delivery and read receipts</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-700">Voice & Video Calls</h4>
                <p className="text-gray-600">High-quality voice and video calling capabilities</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-700">Meet New People</h4>
                <p className="text-gray-600">Connect with strangers and make new friends worldwide</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-700">User Privacy</h4>
                <p className="text-gray-600">Strong privacy controls and end-to-end encryption</p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
            <p className="text-gray-600">
              At VeeraVox, we believe in the power of connection. Our mission is to break down communication barriers and create a platform where people can freely express themselves, share ideas, and build lasting relationships regardless of geographical boundaries.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Contact Information</h3>
            <div className="space-y-2 text-gray-600">
              <p>Email: support@veeravox.com</p>
              <p>Phone: +91 1234567890</p>
              <p>Location: Guntur, AndhraPradesh, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
