'use client';

import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900 flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
       
        <div className="relative mb-8">
          <h1 className="text-[12rem] font-bold text-gray-200 dark:text-gray-800 select-none">
            404
          </h1>
      
        </div>

       
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
          Oops! Page not found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>

       
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl font-medium transition-all active:scale-95"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className=" bg-white flex items-center justify-center gap-2 border border-gray-300 dark:border-gray-700 hover:bg-primary dark:hover:bg-primary px-8 py-3.5 rounded-xl font-medium transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

    
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            Looking for something specific?
          </p>
          <div className="relative max-w-xs mx-auto">
            <input
              type="text"
              placeholder="Search the site..."
              className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full py-3 pl-12 pr-5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
          </div>
        </div>

       
        <p className="mt-12 text-xs text-gray-400 dark:text-gray-600">
          Lost in the digital wilderness?
        </p>
      </div>
    </div>
  );
}