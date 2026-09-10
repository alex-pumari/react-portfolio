import type { FC, SubmitEvent } from "react";
import { useState } from "react";
import { WindowCard } from "../../components/window-card/window-card.js";
import { TextInput } from "../../components/text-input/text-input.js";
import { Button } from "../../components/button/button.js";
import { Panel } from "../../components/panel/panel.js";
import { GITHUB_USERNAME, LINKEDIN_USERNAME, EMAIL } from "../../config/constants.js";
import cvURL from "../../assets/pdf/cv.pdf";
import "./contact.scss";

export const Contact: FC = () => {
  const [formData, setFormData] = useState({ name: "", reason: "" });
  const githubProfileURL = `https://github.com/${GITHUB_USERNAME}`;
  const linkedinProfileURL = `https://www.linkedin.com/in/${LINKEDIN_USERNAME}`;

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();

    const mailSubject = "Consulta";
    const mailBody = `Hola Alex, ¿cómo estás?\n\nSoy ${formData.name} y quería hablarte sobre:\n\n${formData.reason}\n\nMe gustaría recibir más información cuando puedas. ¡De antemano, gracias!`;

    const mailtoURL = `mailto:${EMAIL}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;

    window.open(mailtoURL, "_blank");
  };

  return (
    <div className="contact-view">
      <WindowCard title="CONSULTA.EXE" isDraggable>
          <form onSubmit={handleSubmit} className="contact-view__form">
            <p className="contact-view__form-label">Contame qué necesitás o qué idea tenés en mente. Te responderé por correo lo antes posible.</p>
            <TextInput
              label="Nombre"
              placeholder="Ej. Juan Perez"
              value={formData.name}
              maxLength={50}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <TextInput
              className="contact-view__form-reason-input"
              label="Motivo"
              placeholder="Ej. Necesito optimizar mi plataforma de reservas"
              value={formData.reason}
              maxLength={800}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              multiline
              required
            />
            <Button type="submit" variant="primary" className="contact-view__form-button">
              ENVIAR MENSAJE
            </Button>
          </form>
      </WindowCard>
      <WindowCard title="CANALES.EXE" isDraggable>
        <p className="contact-view__channels-label">También podés hablarme mediante:</p>
        <div className="contact-view__channels">
          <Panel
            className="contact-view__channel"
            onClick={() => window.open(githubProfileURL, "_blank")}
            hasElevation
          >
            GITHUB
          </Panel>

          <Panel
            className="contact-view__channel"
            onClick={() => window.open(linkedinProfileURL, "_blank")}
            hasElevation
          >
            LINKEDIN
          </Panel>

          <Panel
            className="contact-view__channel"
            onClick={() => window.open(`mailto:${EMAIL}`, "_blank")}
            hasElevation
          >
            CORREO
          </Panel>

          <Panel
            className="contact-view__channel"
            onClick={() => window.open(cvURL, "_blank")}
            hasElevation
          >
            MI CV
          </Panel>
        </div>
      </WindowCard>
    </div>
  );
};