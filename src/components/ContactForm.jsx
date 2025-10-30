//ContactForm.jsx
import React, { useState, useEffect, useRef } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [messages, setMessages] = useState([]);
  
  const nameInputRef = useRef(null);

  // Cargar mensajes guardados y borrador
  useEffect(() => {
    const savedMessages = localStorage.getItem('contactMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }

    const draft = localStorage.getItem('contactDraft');
    if (draft) {
      setFormData(JSON.parse(draft));
    }
  }, []);

  // Guardar borrador automáticamente
  useEffect(() => {
    if (formData.name || formData.email || formData.message) {
      localStorage.setItem('contactDraft', JSON.stringify(formData));
    }
  }, [formData]);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'El nombre debe tener al menos 3 caracteres';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Limpiar error del campo cuando el usuario escribe
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSending(true);

      try {
        const response = await fetch('https://formspree.io/f/manldngz', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message
          })
        });

        if (response.ok) {
          // Guardar mensaje localmente
          const newMessage = {
            ...formData,
            id: Date.now(),
            date: new Date().toLocaleString()
          };
          const updatedMessages = [...messages, newMessage];
          setMessages(updatedMessages);
          localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));
          localStorage.removeItem('contactDraft');

          setSubmitted(true);
          setFormData({ name: '', email: '', message: '' });

          setTimeout(() => {
            setSubmitted(false);
          }, 5000);
        } else {
          alert('Error al enviar el mensaje. Por favor, intenta nuevamente.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error al enviar el mensaje. Verifica tu conexión a internet.');
      } finally {
        setSending(false);
      }
    } else {
      // Focus en el primer campo con error
      if (errors.name) {
        nameInputRef.current?.focus();
      }
    }
  };

  const handleClear = () => {
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    localStorage.removeItem('contactDraft');
  };

  return (
    <section id="contacto" className="w-full max-w-4xl mb-10">
      <h2 className="mt-40 text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
        Contáctame
      </h2>
      
      {submitted && (
        <div className="bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-200 px-4 py-3 rounded mb-4">
          ✓ ¡Mensaje enviado exitosamente! Te responderé pronto.
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
            Nombre *
          </label>
          <input
            ref={nameInputRef}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={sending}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white ${
              errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            } ${sending ? 'opacity-50 cursor-not-allowed' : ''}`}
            placeholder="Tu nombre"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            disabled={sending}
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white ${
              errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            } ${sending ? 'opacity-50 cursor-not-allowed' : ''}`}
            placeholder="tu@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
            Mensaje *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            disabled={sending}
            rows="5"
            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white resize-none ${
              errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            } ${sending ? 'opacity-50 cursor-not-allowed' : ''}`}
            placeholder="Tu mensaje..."
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={sending}
            className={`flex-1 bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 rounded-lg font-semibold transition-all duration-300 ${
              sending 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:from-blue-700 hover:to-blue-900'
            }`}
          >
            {sending ? 'Enviando...' : 'Enviar Mensaje'}
          </button>
          <button
            type="button"
            onClick={handleClear}
            disabled={sending}
            className={`px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg font-semibold transition-all duration-300 ${
              sending
                ? 'opacity-50 cursor-not-allowed'
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            Limpiar
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;