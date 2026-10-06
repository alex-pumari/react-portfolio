import type { FC } from "react";
import { Modal } from "../../components/modal/modal.js";
import "./help-modal.scss";

interface HelpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HelpModal: FC<HelpModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal title="Ayuda" onClose={onClose} isOpen={isOpen}>
      <div className="help-modal__content">
        <p className="help-modal__intro">
          Este portfolio cuenta con distintas vistas para conocer más sobre mí, explorar
          mis proyectos y experiencia, y consultar mi CV. A continuación, encontrás algunas
          opciones que te permiten personalizar la forma en que recorrés y visualizás el
          portfolio.
        </p>

        <section className="help-modal__section">
          <h3 className="help-modal__section-title">Tema</h3>
          <p className="help-modal__section-text">
            Podés cambiar entre modo claro y oscuro usando el botón de tema ubicado en la
            esquina superior derecha.
          </p>
        </section>

        <section className="help-modal__section">
          <h3 className="help-modal__section-title">Pantalla completa</h3>
          <p className="help-modal__section-text">
            Podés expandir o reducir la vista usando el control de pantalla completa ubicado
            en el pie de página. Cuando está activada, aparece un botón para salir de
            pantalla completa en la esquina superior derecha.
          </p>
        </section>

        <section className="help-modal__section">
          <h3 className="help-modal__section-title">Zoom</h3>
          <p className="help-modal__section-text">
            Podés ajustar el tamaño de la vista usando los controles de zoom ubicados en el
            pie de página, aumentando o disminuyendo el zoom según tus preferencias.
          </p>
        </section>
      </div>
    </Modal>
  );
};