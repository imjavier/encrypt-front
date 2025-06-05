import React from 'react';
import { Send, MessageSquare, Unlock } from 'lucide-react';

const tabs = [
  {
    key: 'create',
    label: 'Crear Mensaje',
    Icon: Send,
  },
  {
    key: 'all',
    label: 'Todos los Mensajes',
    Icon: MessageSquare,
  },
  {
    key: 'my',
    label: 'Mis Mensajes',
    Icon: Unlock,
  },
];

const Tabs = ({ activeTab, setActiveTab }) => (
  <div className="flex flex-wrap justify-center mb-8 bg-white rounded-lg p-2 shadow-md">
    {tabs.map(({ key, label, Icon }) => (
      <button
        key={key}
        onClick={() => setActiveTab(key)}
        className={`px-6 py-3 rounded-md font-medium transition-all duration-200 flex items-center gap-2 ${
          activeTab === key
            ? 'bg-accent text-white shadow-md'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        <Icon className="w-4 h-4" />
        {label}
      </button>
    ))}
  </div>
);

export default Tabs;
