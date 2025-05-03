const Footer = () => {
  return (
    <div>
        <div className="footer bg-gray-800 text-white py-8 px-4 bottom-0 w-full">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
                <div className="footer-about">
                    <h2 className="text-xl font-bold mb-4">About VeeraVox</h2>
                    <p className="text-gray-300">
                        VeeraVox is a chat application that helps connect people around the world. Whether you want to chat with friends or meet new people, our platform makes communication seamless and accessible. Stay connected with your loved ones and build meaningful relationships through our user-friendly chat interface.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="footer-links">
                        <h2 className="text-xl font-bold mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            <li><a href="/about" className="text-gray-300 hover:text-white">About</a></li>
                            <li><a href="/talk" className="text-gray-300 hover:text-white">Talk with Strangers</a></li>
                            <li><a href="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
                            <li><a href="/terms" className="text-gray-300 hover:text-white">Terms of Service</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h2 className="text-xl font-bold mb-4">Contact Us</h2>
                        <ul className="space-y-2 text-gray-300">
                            <li>Phone: +91 8919964929</li>
                            <li>Email: support@veeravox.com</li>
                            <li>Address: Guntur, AndhraPradesh, India</li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h2 className="text-xl font-bold mb-4">Follow Us</h2>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white">Twitter</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">LinkedIn</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white">GitHub</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                <p className="text-gray-300">
                    Made with ❤️ by Veeranjaneyulu.V | &copy; {new Date().getFullYear()} VeeraVox. All rights reserved.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Footer