import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-teal-800 text-white px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        <div>
          <h3 className="text-lg font-semibold mb-2">About EasyLabour</h3>
          <p className="text-sm text-teal-100">
            EasyLabour connects individuals with trusted labour help for daily needs—electricians, plumbers, cleaners, and more.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">For Customers</h3>
          <ul className="space-y-1 text-sm text-teal-100">
            <li><a href="#">Book a Helper</a></li>
            <li><a href="#">View Services</a></li>
            <li><a href="#">Help & Support</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">For Professionals</h3>
          <ul className="space-y-1 text-sm text-teal-100">
            <li>
              <Link href="/register-worker" passHref>
                <span className="hover:underline cursor-pointer">Register as a Labour</span>
              </Link>
            </li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Connect with Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#"><img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" /></a>
            <a href="#"><img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" /></a>
            <a href="#"><img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" /></a>
            <a href="#"><img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-teal-700 pt-4 text-center text-sm text-teal-200">
        <p>© 2025 EasyLabour. Empowering local workers with digital opportunity.</p>
      </div>
    </footer>
  );
}
