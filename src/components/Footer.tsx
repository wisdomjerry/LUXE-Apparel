import { InstagramIcon, FacebookIcon, TwitterIcon } from 'lucide-react';
export function Footer() {
  return <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-serif mb-4">LUXÉ</h3>
            <p className="text-sm text-gray-600 mb-4">
              Luxury fashion for the modern individual. Timeless pieces crafted
              with exceptional quality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <TwitterIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Shop</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Women
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Men
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Sale
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Help</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Customer Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">About</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            © 2023 LUXÉ Apparel. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-xs text-gray-500 hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-900">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-gray-500 hover:text-gray-900">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>;
}