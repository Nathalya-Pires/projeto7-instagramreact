import { useState } from "react"

export default function Posts() {

  const dados = [
    { perfil: "./assets/story2.png", nome: "meowed", post: "./assets/feed1.png", curtiu: "./assets/story6.png", por: "respondeai", curtidas: " 101523" },
    { perfil: "./assets/story3.png", nome: "barked", post: "./assets/feed2.png", curtiu: "./assets/sd4.png", por: "adorable_animals", curtidas: " 99159" },
    { perfil: "./assets/story2.png", nome: "meowed", post: "./assets/feed3.jpg", curtiu: "./assets/story6.png", por: "lukaspg", curtidas: " 200545" },
  ]

  return (
    <div class="posts">
      {dados.map((p) => <Post key={p.index} perfil={p.perfil} nome={p.nome} post={p.post} curtiu={p.curtiu} por={p.por} curtidas={p.curtidas} />)}
    </div>
  )

}

function Post(props) {

  const [curtiu, setCurtiu] = useState("heart-outline")
  const [salvar, setSalvar] = useState("bookmark-outline")
  const [cor, setCor] = useState("like")

  return (
    <div data-test="post" class="post">
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
        <img data-test="post-image" onClick={ () => curtiu === "heart-outline" ? setCurtiu("heart") : ""} src={props.post} />
      </div>
      <div class="rodape">
        <div class="cx-1">
          <div class="r-esquerda">
            <ion-icon data-test="like-post" onClick={ () => curtiu === "heart-outline" ? setCurtiu("heart") : setCurtiu("heart-outline")} name={curtiu}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div class="r-direita">
            <ion-icon data-test="save-post" onClick={ () => salvar === "bookmark-outline" ? setSalvar("bookmark") : setSalvar("bookmark-outline")} name={salvar}></ion-icon>
          </div>
        </div>
        <div class="cx-2">
          <div class="img-txt">
            <img src={props.curtiu} />
            <p data-test="likes-number">Curtido por <strong>{props.por}</strong> e <strong>outras {curtiu === "heart" ? Number(props.curtidas) + 1 : (props.curtidas) }</strong> pessoas </p>
          </div>
        </div>
      </div>
    </div>
  )

}

