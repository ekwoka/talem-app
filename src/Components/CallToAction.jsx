import React from 'react';

export default function CallToAction() {
  return (
    <div className="bg-indigo-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to get started?
          </h2>
          <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:justify-center">
            <a
              href="/extracurriculars"
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-indigo-600 bg-white hover:bg-indigo-50 sm:w-auto">
              Explore the Database
            </a>
            <a
              href="https://forms.gle/ANQkUHa44R3ZM7ks5"
              target="_blank"
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 sm:w-auto mt-3 sm:mt-0 sm:ml-3"
              rel="noreferrer">
              Submit an Activity
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
