import React from 'react';
import { Send, Eye, EyeOff } from 'lucide-react';

const CreateMessage = ({
  message,
  setMessage,
  secretKey,
  setSecretKey,
  showSecretKey,
  setShowSecretKey,
  createMessage,
  loading
}) => (
  <div className="bg-white/90 rounded-xl border border-primary-light shadow-lg p-8">
    <h2 className="text-2xl font-bold text-accent mb-6 flex items-center gap-2">
      <Send className="w-6 h-6 text-accent" />
      Crear Nuevo Mensaje
    </h2>
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-black mb-2">
          Mensaje
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escribe tu mensaje aquí..."
          className="w-full p-4 border border-soft rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent resize-none bg-soft text-primary"
          rows={4}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-black mb-2">
          Clave Secreta
        </label>
        <div className="relative">
          <input
            type={showSecretKey ? 'text' : 'password'}
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
            placeholder="Ingresa tu clave secreta"
            className="w-full p-4 pr-12 border border-soft rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-soft text-primary"
            required
          />
          <button
            type="button"
            onClick={() => setShowSecretKey(!showSecretKey)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-accent hover:text-primary-dark"
          >
            {showSecretKey ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
      </div>
      <button
        type="button"
        onClick={createMessage}
        disabled={loading}
        className="w-full bg-accent text-white py-4 px-6 rounded-lg hover:bg-primary focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-colors duration-200 font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <Send className="w-5 h-5" />
        )}
        {loading ? 'Enviando...' : 'Enviar Mensaje'}
      </button>
    </div>
  </div>
);

export default CreateMessage;
