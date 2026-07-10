import React, { useState, type FormEvent } from 'react';
import { WindowCard } from '../components/window-card/window-card.js';
import { TextInput } from '../components/text-input/text-input.js';
import { Button } from '../components/button/button.js';
import './views.scss';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState<string | undefined>(undefined);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Campos incompletos. Por favor llene todos los registros obligatorios.');
      return;
    }
    setError(undefined);
    setSuccess(true);
    // Aquí iría el flujo de envío (API o servicio de correos)
  };

  return (
    <div className="view-contact animate-fade-in">
      <WindowCard title="Mail_dispatcher.exe">
        {success ? (
          <div className="contact-success-box">
            <h3 className="contact-success-box__title">¡Mensaje enviado con éxito!</h3>
            <p>La transmisión de datos se completó bajo el protocolo estándar. Responderé a la brevedad.</p>
            <Button variant="primary" size="sm" onClick={() => setSuccess(false)}>Send_another.bat</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <p className="contact-form__intro">Establecer conexión directa por canal de correo:</p>
            
            <TextInput
              label="Sender_name:"
              placeholder="Ej. John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />

            <TextInput
              label="Sender_email:"
              type="email"
              placeholder="Ej. john.doe@system.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={error && !formData.email ? 'Email requerido para handshake.' : undefined}
            />

            <div className="textarea-pixel-group">
              <label className="textarea-pixel-group__label">Message_body:</label>
              <textarea
                className="textarea-pixel-group__field"
                rows={5}
                placeholder="Escriba su mensaje aquí..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            {error && <p className="contact-form__error">⚠ Error: {error}</p>}

            <div className="contact-form__actions">
              <Button type="submit" variant="success" size="md">
                Transmit_packet.sh
              </Button>
            </div>
          </form>
        )}
      </WindowCard>
    </div>
  );
};