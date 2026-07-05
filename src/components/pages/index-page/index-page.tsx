import { DownloadIcon } from "../../icons/index.js"
import { Blob, Button, Subtitle } from "../index.js"
import { profile, cv } from "../../../assets/index.js"
import { useDraggable } from "../../../hooks/index.js"
import "./index-page.scss"

export function IndexPage () {
  const pageRef = useDraggable<HTMLDivElement>({ isTouchDevice: false })
  return (
    <div className="index-page" ref={pageRef}>
      <Blob className="index-page__blob--2" />
      <Blob className="index-page__blob--1" />

      <div className="index-page__content">
        <img src={profile} className="index-page__profile" alt="Profile" draggable="false" />
        <div className="index-page__column">
          <Subtitle>Alex Pumari Diaz</Subtitle>
          <h2 className="index-page__title">
            Desarrollador
            <br />
            Frontend
          </h2>
          <Button onClick={() => window.open(cv, "_blank")}>
            <DownloadIcon size="lg"/>
            <span>Descargar CV</span>
          </Button>
        </div>
      </div>
    </div>
  )
}