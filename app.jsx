import React, { useState, useEffect } from 'react';
import { Send, Lock, Unlock, Eye, EyeOff, MessageSquare, Key } from 'lucide-react';
import Header from './Header';
import Tabs from './Tabs';
import Notification from './Notification';
import CreateMessage from './CreateMessage';
import AllMessages from './AllMessages';
import MyMessages from './MyMessages';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // API Gateway URL

const EncryptedMessagesApp = () => {
  const [message, setMessage] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [viewSecretKey, setViewSecretKey] = useState('');
  const [allMessages, setAllMessages] = useState([]);
  const [myMessages, setMyMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('create');
  const [showSecretKey, setShowSecretKey] = useState(false);
  const [showViewKey, setShowViewKey] = useState(false);
  const [notification, setNotification] = useState('');

  // Función para mostrar notificaciones
  const showNotification = (msg, type = 'success') => {
    setNotification({ message: msg, type });
    setTimeout(() => setNotification(''), 3000);
  };

  // Cargar todos los mensajes al montar el componente
  useEffect(() => {
    fetchAllMessages();
  }, []);

  // Obtener todos los mensajes encriptados
  const fetchAllMessages = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/all`);
      if (response.ok) {
        const data = await response.json();
        setAllMessages(data.messages);
      } else {
        showNotification('Error al cargar mensajes', 'error');
      }
    } catch (error) {
      showNotification('Error de conexión al cargar mensajes', 'error');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };


  const createMessage = async () => {
    if (!message.trim() || !secretKey.trim()) {
      showNotification('Por favor completa todos los campos', 'error');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/create-message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: message.trim(),
          secretKey: secretKey.trim()
        })
      });

      if (response.ok) {
        showNotification('Mensaje creado exitosamente');
        setMessage('');
        setSecretKey('');
        fetchAllMessages(); // Actualizar la lista
      } else {
        const errorData = await response.json();
        showNotification(errorData.message || 'Error al crear mensaje', 'error');
      }
    } catch (error) {
      showNotification('Error de conexión al crear mensaje', 'error');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // Obtener mensajes propios desencriptados
  const fetchMyMessages = async () => {
    if (!viewSecretKey.trim()) {
      showNotification('Por favor ingresa tu clave secreta', 'error');
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/my-messages`, {
        method: 'GET',
        headers: {
          'x-secret-key': viewSecretKey.trim()
        }
      });

      if (response.ok) {
        const data = await response.json();
        setMyMessages(data.messages);
        if (data.messages.length === 0) showNotification('No se encontraron mensajes propios con esta clave', 'error');
        else showNotification(`Se encontraron ${data.messages.length} mensaje(s) propio(s)`);


      } else {
        const errorData = await response.json();
        showNotification(errorData.message || 'Error al obtener mensajes', 'error');
        setMyMessages([]);
      }
    } catch (error) {
      showNotification('Error de conexión al obtener mensajes', 'error');
      setMyMessages([]);
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header />
        <Notification notification={notification} />
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Create Message Tab */}
        {activeTab === 'create' && (
          <CreateMessage
            message={message}
            setMessage={setMessage}
            secretKey={secretKey}
            setSecretKey={setSecretKey}
            showSecretKey={showSecretKey}
            setShowSecretKey={setShowSecretKey}
            createMessage={createMessage}
            loading={loading}
          />
        )}

        {activeTab === 'all' && (
          <AllMessages
            allMessages={allMessages}
            loading={loading}
            fetchAllMessages={fetchAllMessages}
          />
        )}

        {activeTab === 'my' && (
          <MyMessages
            myMessages={myMessages}
            loading={loading}
            viewSecretKey={viewSecretKey}
            setViewSecretKey={setViewSecretKey}
            showViewKey={showViewKey}
            setShowViewKey={setShowViewKey}
            fetchMyMessages={fetchMyMessages}
          />
        )}
      </div>
    </div>
  );
};

export default EncryptedMessagesApp;