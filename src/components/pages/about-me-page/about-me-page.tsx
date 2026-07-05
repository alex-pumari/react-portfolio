import { useDraggable } from "../../../hooks/index.js"
import { Blob, Subtitle } from "../index.js"
import "./about-me-page.scss"

export function AboutMePage() {
  const pageRef = useDraggable<HTMLDivElement>({ isTouchDevice: false })
  return (
    <div className="about-me-page" ref={pageRef}>
      <div className="about-me-page__content">
        <Subtitle>Sobre mí</Subtitle>
        <p className="about-me-page__text">
          Soy Desarrollador Full Stack y Técnico en Análisis, Desarrollo y Programación de Aplicaciones, con
          experiencia en el desarrollo de aplicaciones web tanto en frontend como en backend.
        </p>

        <p className="about-me-page__text">
          Trabajo con enfoque en la calidad del código, el aprendizaje continuo y la colaboración en equipo, buscando
          siempre mejorar las soluciones que desarrollo y crecer profesionalmente.
        </p>
      </div>
      <Blob shape="a" className="about-me-page__blob about-me-page__blob--1" />
      <Blob shape="b" className="about-me-page__blob about-me-page__blob--2" />
    </div>
  )
}