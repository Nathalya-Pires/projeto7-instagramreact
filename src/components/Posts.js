export default function Posts() {

  const dados = [
    { perfil: "./assets/story2.png", nome: "meowed", post: "./assets/feed1.png", curtiu: "./assets/story6.png", curtidas: "Curtido por respondeai e outras 101.523 pessoas" },
    { perfil: "./assets/story3.png", nome: "barked", post: "./assets/feed2.png", curtiu: "./assets/sd4.png", curtidas: "Curtido por adorable_animals e outras 99.159 pessoas" },
    { perfil: "./assets/story2.png", nome: "meowed", post: "./assets/feed3.jpg", curtiu: "./assets/story6.png", curtidas: "Curtido por lukaspg e outras 200.545 pessoas" },
  ]

  return (
    <div class="posts">
      {dados.map((p) => <Post key={p.index} perfil={p.perfil} nome={p.nome} post={p.post} curtiu={p.curtiu} curtidas={p.curtidas} />)}
    </div>
  )

}

function Post(props) {
  return (
    <div class="post">
      <div class="cabeçalho">
        <div class="c-esquerda">
          <img src={props.perfil} />
          <p>{props.nome}</p>
        </div>
        <div class="c-direita">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
      <div class="foto-post">
        <img src={props.post} />
      </div>
      <div class="rodape">
        <div class="cx-1">
          <div class="r-esquerda">
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div class="r-direita">
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>
        <div class="cx-2">
          <div class="img-txt">
            <img src={props.curtiu} />
            <p>{props.curtidas}</p>
          </div>
        </div>
      </div>
    </div>
  )

}



