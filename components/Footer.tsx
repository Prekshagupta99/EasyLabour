export default function Footer() {
  return (
    <footer className="bg-teal-800 text-white px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        {/* About Column */}
        <div>
          <h3 className="text-lg font-semibold mb-2">About EasyLabour</h3>
          <p className="text-sm text-teal-100">
            EasyLabour connects individuals with trusted labour help for daily needs—electricians, plumbers,
            cleaners, and more—with minimal platform fees. We ensure fairness to workers while offering reliability
            to customers.
          </p>
        </div>

        {/* For Customers */}
        <div>
          <h3 className="text-lg font-semibold mb-2">For Customers</h3>
          <ul className="space-y-1 text-sm text-teal-100">
            <li><a href="#" className="hover:underline">Book a Helper</a></li>
            <li><a href="#" className="hover:underline">View Services</a></li>
            <li><a href="#" className="hover:underline">Help & Support</a></li>
          </ul>
        </div>

        {/* For Professionals */}
        <div>
          <h3 className="text-lg font-semibold mb-2">For Professionals</h3>
          <ul className="space-y-1 text-sm text-teal-100">
            <li><a href="#" className="hover:underline">Register as a Labour</a></li>
            <li><a href="#" className="hover:underline">How It Works</a></li>
            <li><a href="#" className="hover:underline">FAQs</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect with Us</h3>
          <div className="flex items-center space-x-4 mt-2">
            <a href="#"><img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6 hover:opacity-80 transition" /></a>
            <a href="#"><img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6 hover:opacity-80 transition" /></a>
            <a href="#"><img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6 hover:opacity-80 transition" /></a>
            <a href="#"><img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:opacity-80 transition" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-teal-700 pt-4 text-center text-sm text-teal-200">
        <p>© 2025 EasyLabour. Empowering local workers with digital opportunity.</p>
      </div>
    </footer>
  );
}
