import React from 'react';
import { DocumentDuplicateIcon } from '@heroicons/react/20/solid';
import { FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';
import logoImage from '../Images/talemAlternateLogo.png';

export default function Footer() {
  return (
    <footer className="bg-indigo-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-x-6">
          <div className="flex items-center">
            <img src={logoImage} alt="Logo" className="h-8 w-8 mr-2" />
            <span className="text-white text-xl font-outfit">Talem</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-300 hover:text-white" title="Twitter" onClick={() => alert("Coming Soon...")}>
                <FaTwitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white" title="Instagram" onClick={() => alert("Coming Soon...")}>
                <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white" title="Discord" onClick={() => alert("Coming Soon...")}>
                <FaDiscord className="h-6 w-6" />   
            </a>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-center text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
