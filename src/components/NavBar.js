export default function NavBar() {
  return (
    <div class="desktop-topo">
      <div class="topo-mobile">
        <ion-icon name="logo-instagram"></ion-icon>
        <img src="./assets/logo.png" />
        <ion-icon name="paper-plane-outline"></ion-icon>
      </div>
      <div class="topo">
        <div class="logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <img src="./assets/logo.png" />
        </div>
        <input type="search" value="Pesquisar" class="cx-pesquisa" />
        <div class="vetores">
          <ion-icon name="paper-plane-outline"></ion-icon>
          <ion-icon name="compass-outline"></ion-icon>
          <ion-icon name="heart-outline"></ion-icon>
          <ion-icon name="person-outline"></ion-icon>
        </div>
      </div>
    </div>
  )
}