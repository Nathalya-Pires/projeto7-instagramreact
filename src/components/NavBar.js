export default function NavBar() {
  return (
    <div className="desktop-topo">
      <div className="topo-mobile">
        <ion-icon name="logo-instagram"></ion-icon>
        <img src="./assets/logo.png" />
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div className="topo">
        <div className="logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <img src="./assets/logo.png" />
        </div>
        <input type="search" value="Pesquisar" className="cx-pesquisa" />
        <div className="vetores">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>
      </div>
    </div>
  )
}