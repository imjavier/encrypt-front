import React from 'react';
import { Lock } from 'lucide-react';

const Header = () => (
  <div className="text-center mb-8">
    <div className="flex justify-center mb-4">
      <div className="bg-indigo-600 p-4 rounded-full">
        <Lock className="w-8 h-8 text-white" />
      </div>
    </div>
    <h1 className="text-4xl font-bold text-gray-800 mb-2">C R Y P T O K E Y</h1>
    <p className="text-gray-700">Escribe y guarda mensajes de forma segura</p>
  </div>
);

export default Header;
