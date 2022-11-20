export default function Stories() {

  const dados = [
    { imagem: "./assets/story1.png", nome: "9gag" },
    { imagem: "./assets/story2.png", nome: "meowed" },
    { imagem: "./assets/story3.png", nome: "barked" },
    { imagem: "./assets/story4.png", nome: "nathanwpyle..." },
    { imagem: "./assets/story5.png", nome: "wawawiwac..." },
    { imagem: "./assets/story6.png", nome: "respondeai" },
    { imagem: "./assets/story7.png", nome: "filomoderna" },
  ]

  return (
    <ul class="cx-stories">
      <ion-icon class="sumir" name="chevron-forward-circle"></ion-icon>
      {dados.map((s) => <Storie key={s.nome} imagem={s.imagem} nome={s.nome} />)}
    </ul>
  )

}

function Storie(props) {
  return (
    <li class="story">
      <img src="./assets/stories_background.jpg" />
      <div class="foto">
        <img src={props.imagem} />
      </div>
      <div class="nome">
        {props.nome}
      </div>
    </li>
  )
}
