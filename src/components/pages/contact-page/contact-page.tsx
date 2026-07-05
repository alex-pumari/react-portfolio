import { useDraggable } from "../../../hooks/index.js"
import { GithubIcon, LinkedinIcon } from "../../icons/index.js"
import { Blob, Button, Pattern } from "../index.js"
import "./contact-page.scss"

export function ContactPage() {
  const pageRef = useDraggable<HTMLDivElement>({ isTouchDevice: false })
  return (
    <div className="contact-page" ref={pageRef}>
      <h2 className="contact-page__title">¡Quedo a la espera de tu mensaje!</h2>
      <div className="contact-page__buttons">
        <Button onClick={() => window.open("https://github.com/AlexRubenPumari", "_blank")}>
          <GithubIcon size="lg" />
          <span>Mi Github</span>
        </Button>
        <Button onClick={() => window.open("https://www.linkedin.com/in/alex-pumari-diaz/", "_blank")}>
          <LinkedinIcon size="lg" />
          <span>Mi LinkedIn</span>
        </Button>
      </div>
      <Blob shape="b" className="contact-page__blob" />
      <Pattern
        shape="circle"
        rows={1}
        cols={4}
        className="contact-page__pattern"
      />
    </div>
  )
}