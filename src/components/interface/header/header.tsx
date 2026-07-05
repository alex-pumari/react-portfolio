import { useEffect, useState } from "react"
import { useFullScreenContext, usePageContext } from "../../../contexts/index.js"
import { cvIcon, githubIcon, linkedinIcon, portfolioIcon } from "../../../assets/img/index.js"
import { Button, Flaps, MenuButton } from "../index.js"
import { PAGE_NAMES, THEMES } from "../../../config/constants.js"
import { changeTheme, getPage, getPageName, joinClasses } from "../../../logic/index.js"
import { FullScreenExitIcon } from "../../icons/full-screen-exit-icon.js"
import type { Theme } from "../../../types/index.js"
import cv from "../../../assets/pdf/cv.pdf"
import "./header.scss"

interface HeaderProps {
  isCompact?: boolean
}

export function Header ({ isCompact = false }: HeaderProps) {
  const { page, setPage } = usePageContext()
  const { isFullScreen, toggleFullScreen } = useFullScreenContext()
  const [theme, setTheme] = useState<Theme>("Light")
  useEffect(() => {
    changeTheme(theme)
  }, [theme])

  const buttons = [
    {
      label: "Ver CV",
      imgPath: cvIcon,
      onClick: () => window.open(cv, "_blank"),
    },
    {
      label: "Ver Proyectos",
      imgPath: portfolioIcon,
      onClick: () => setPage(3),
    },
    {
      label: "Mi GitHub",
      imgPath: githubIcon,
      onClick: () => window.open("https://github.com/AlexRubenPumari", "_blank"),
    },
    {
      label: "Mi LinkedIn",
      imgPath: linkedinIcon,
      onClick: () => window.open("https://www.linkedin.com/in/alex-pumari-diaz/", "_blank"),
    },
  ]

  return (
    <header className="header">
      <nav className="header__nav">
        <Flaps
          flaps={PAGE_NAMES}
          selectedFlap={getPageName(page)}
          onChange={pageName => setPage(getPage(pageName))}
        />
        <div className="header__options">
          <MenuButton
            label="Theme"
            items={THEMES}
            direction="bottom-right"
            selectedItem={theme}
            onChange={theme => setTheme(theme)}
          />
          {isFullScreen && (
            <Button size="sm" onClick={toggleFullScreen}>
              <FullScreenExitIcon />
            </Button>
          )}
        </div>
      </nav>
      <div className={joinClasses("header__panel", isCompact && "header__panel--compact")}>
        <div className="header__actions">
        {buttons.map(({ label, imgPath, onClick }) => (
          <Button
            direction="column"
            onClick={onClick}
            key={label}
          >
            <img className="icon icon--md" src={imgPath} alt="icon" />
            <span>{label}</span>
          </Button>
        ))}
        </div>
      </div>
    </header>
  )
}