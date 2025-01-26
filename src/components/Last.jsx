import React from "react";
import { Instagram, Twitter, Dribbble } from "lucide-react";

function Last() {
  return (
    <footer className="bg-white py-10 border-t">
      {/* Main Footer Content */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
        {/* Logo and Social Links */}
        <div className="flex flex-col items-start space-y-4">
          <h1 className="font-bold text-lg">øliv</h1>
          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <Dribbble className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="flex flex-wrap gap-10">
          <div>
            <h2 className="text-sm font-semibold mb-4 text-gray-700">Pages</h2>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold mb-4 text-gray-700">CMS</h2>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#">Work</a>
              </li>
              <li>
                <a href="#">Work Single</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Blog Single</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Shop Single</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold mb-4 text-gray-700">Utility Pages</h2>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#">404 Error Page</a>
              </li>
              <li>
                <a href="#">Password Protected</a>
              </li>
              <li>
                <a href="#">Styleguide</a>
              </li>
              <li>
                <a href="#">Licensing</a>
              </li>
              <li>
                <a href="#">Changelog</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="container mx-auto mt-10 border-t pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>
          © Made by{" "}
          <a href="#" className="text-gray-700 underline">
            Pawel Gola
          </a>{" "}
          - Powered by Webflow
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Imprint
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Last;