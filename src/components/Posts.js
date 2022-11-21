import { useState } from "react"

export default function Posts() {

  const dados = [
    { perfil: "./assets/story2.png", nome: "meowed", post: "./assets/feed1.png", curtiu: "./assets/story6.png", por: "respondeai", curtidas: " 101523" },
    { perfil: "./assets/story3.png", nome: "barked", post: "./assets/feed2.png", curtiu: "./assets/sd4.png", por: "adorable_animals", curtidas: " 99159" },
    { perfil: "./assets/story2.png", nome: "meowed", post: "./assets/feed3.jpg", curtiu: "./assets/story6.png", por: "lukaspg", curtidas: " 200545" },
  ]

  return (
    <div className="posts">
      {dados.map((p) => <Post key={p.index} perfil={p.perfil} nome={p.nome} post={p.post} curtiu={p.curtiu} por={p.por} curtidas={p.curtidas} />)}
    </div>
  )

}

function Post(props) {

  const [curtiu, setCurtiu] = useState(false)
  const [salvar, setSalvar] = useState("bookmark-outline")

  return (
    <div data-test="post" className="post">
      <div className="cabeçalho">
        <div className="c-esquerda">
          <img src={props.perfil} />
          <p>{props.nome}</p>
        </div>
        <div className="c-direita">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>
      <div className="foto-post">
        <img data-test="post-image" onClick={() => curtiu === false ? setCurtiu(true) : ""} src={props.post} />
      </div>
      <div className="rodape">
        <div className="cx-1">
          <div className="r-esquerda">
            {!curtiu ? <ion-icon data-test="like-post" onClick={() => setCurtiu(true)} name="heart-outline"></ion-icon>
              : <ion-icon style={{ color: "red" }} data-test="like-post" onClick={() => setCurtiu(false)} name="heart"></ion-icon>}
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div className="r-direita">
            <ion-icon data-test="save-post" onClick={() => salvar === "bookmark-outline" ? setSalvar("bookmark") : setSalvar("bookmark-outline")} name={salvar}></ion-icon>
          </div>
        </div>
        <div className="cx-2">
          <div className="img-txt">
            <img src={props.curtiu} />
            <p data-test="likes-number">Curtido por <strong>{props.por}</strong> e <strong>outras {curtiu === true ? Number(props.curtidas) + 1 : (props.curtidas)}</strong> pessoas </p>
          </div>
        </div>
      </div>
    </div>
  )

}

