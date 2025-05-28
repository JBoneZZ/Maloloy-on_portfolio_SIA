
import React from 'react';
import { Code, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg">
            <Code className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Jerahmel Jade J. Maloloy-on</h1>
            <p className="text-gray-600">Developer Portfolio</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
