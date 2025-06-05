import React from 'react';
import { Unlock, Eye, EyeOff, Key } from 'lucide-react';

const MyMessages = ({
  myMessages,
  loading,
  viewSecretKey,
  setViewSecretKey,
  showViewKey,
  setShowViewKey,
  fetchMyMessages
}) => (
  <div className="bg-white/90 rounded-xl border border-primary-light shadow-lg p-8">
    <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
      <Unlock className="w-6 h-6 text-accent" />
      Mis Mensajes Desencriptados
    </h2>
    <div className="mb-6">
      <label className="block text-sm font-medium text-black mb-2">
        Clave Secreta para Ver Tus Mensajes
      </label>
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <input
            type={showViewKey ? 'text' : 'password'}
            value={viewSecretKey}
            onChange={(e) => setViewSecretKey(e.target.value)}
            placeholder="Ingresa tu clave secreta"
            className="w-full p-4 pr-12 border border-soft rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent bg-soft text-primary"
            onKeyPress={(e) => e.key === 'Enter' && fetchMyMessages()}
          />
          <button
            type="button"
            onClick={() => setShowViewKey(!showViewKey)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-accent hover:text-primary-dark"
          >
            {showViewKey ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
        <button
          onClick={fetchMyMessages}
          disabled={loading}
          className="bg-accent text-white px-6 py-4 rounded-lg hover:bg-primary focus:ring-2 focus:ring-accent focus:ring-offset-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-primary-dark/30 border-t-primary-dark rounded-full animate-spin" />
          ) : (
            <Key className="w-5 h-5 text-white" />
          )}
          Ver
        </button>
      </div>
    </div>
    <div className="space-y-4 max-h-96 overflow-y-auto">
      {myMessages.length === 0 && viewSecretKey ? (
        <div className="text-center py-8 text-primary">
          <Unlock className="w-12 h-12 mx-auto mb-4 text-soft" />
          <p>No se encontraron mensajes con esta clave</p>
        </div>
      ) : myMessages.length === 0 ? (
        <div className="text-center py-8 text-primary">
          <Key className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <p>Ingresa tu clave secreta para ver tus mensajes</p>
        </div>
      ) : (
        myMessages.map((msg, index) => (
          <div key={index} className="bg-soft p-4 rounded-lg border border-primary-dark">
            <div className="flex items-start gap-3">
              <Unlock className="w-5 h-5 text-primary-dark mt-1" />
              <div className="flex-1">
                <p className="text-gray-700 font-mono text-sm break-all">
                  {msg}
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  </div>
);

export default MyMessages;
