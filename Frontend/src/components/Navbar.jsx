import React from "react";
import { Link } from "react-router-dom";
import { Wallet2 } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-crypto-dark/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img
              src="./images/unipay2real.png" // Make sure this is the correct path
              alt="Custom Wallet"
              className="w-10 h-10 object-contain"
            />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Unipay
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              How It Works
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              Technology
            </a>
            <a
              href="#pricing"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-indigo-400 transition-colors"
            >
              Contact
            </a>
            <Link
              to="/auth?mode=login"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-indigo-500/20 transition-all"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
