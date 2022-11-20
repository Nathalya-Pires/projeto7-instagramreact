import { useState } from "react"

export default function Usuario() {

  const fotoPadrao = "./assets/eu.png"
  const userPadrao = "Nathy Ohana Pires"

  const [imagem, setImagem] = useState(fotoPadrao)
  const [user, setUser] = useState(userPadrao)

  return (
    <div class="usuario">
      <img onClick={() => setImagem(prompt("Insira o link da nova imagem"))} src={!imagem ? fotoPadrao : imagem} />
      <div class="user">
        <h1>nathyohana1</h1>
        <div className="pencil">
          <h2>{!user ? userPadrao : user}</h2>
          <ion-icon name="pencil-outline" onClick={() => setUser(prompt("Digite seu novo usuário"))} ></ion-icon>
        </div>
      </div>
    </div>
  )

}

