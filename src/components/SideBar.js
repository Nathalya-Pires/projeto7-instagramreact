import Sugestoes from "./Sugestoes"
import Usuario from "./Usuario"

export default function SideBar() {
  return (
    <>
      <div className="sidebar">
        <Usuario />
        <Sugestoes />
        <div className="infos">
          <p>
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
            Localizações • Contas mais relevantes • Hashtags • Idioma
          </p>
          <br />
          <p>© 2022 INSTAGRAM FROM META</p>
        </div>
      </div>
    </>

  )
}