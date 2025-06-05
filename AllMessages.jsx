import React from 'react';
import { MessageSquare, Lock } from 'lucide-react';

const AllMessages = ({
  allMessages,
  loading,
  fetchAllMessages
}) => (
  <div className="bg-white/90 rounded-xl border border-primary-light shadow-lg p-8">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
        <MessageSquare className="w-6 h-6 text-accent" />
        Todos los Mensajes ({allMessages.length})
      </h2>
      <button
        onClick={fetchAllMessages}
        disabled={loading}
        className="bg-accent-light text-primary-dark px-4 py-2 rounded-lg hover:bg-primary transition-colors duration-200 hover:text-white disabled:opacity-50"
      >
        Actualizar
      </button>
    </div>
    <div className="space-y-4 max-h-96 overflow-y-auto">
      {loading ? (
        <div className="text-center py-8">
          <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-primary">Cargando mensajes...</p>
        </div>
      ) : allMessages.length === 0 ? (
        <div className="text-center py-8 text-primary">
          <MessageSquare className="w-12 h-12 mx-auto mb-4 text-soft" />
          <p>No hay mensajes disponibles</p>
        </div>
      ) : (
        allMessages.map((msg, index) => (
          <div key={index} className="bg-soft p-4 rounded-lg border border-primary-dark">
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-primary-dark mt-1" />
              <div className="flex-1">
                <p className="text-gray-700 font-mono text-sm break-all">
                  {msg.message}
                </p>
                {msg.createdAt && (
                  <p className="text-xs text-primary-dark font-semibold mt-2">
                    {new Date(msg.createdAt).toLocaleString()}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  </div>
);

export default AllMessages;
