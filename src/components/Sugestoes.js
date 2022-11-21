export default function Sugestoes() {

  const dados = [
    { foto: "./assets/sd1.png", usuario: "bad.vibes.memes", status: "Segue você" },
    { foto: "./assets/sd2.png", usuario: "chibirdart", status: "Segue você" },
    { foto: "./assets/sd3.png", usuario: "razoesparaacreditar", status: "Novo no Instagram" },
    { foto: "./assets/sd4.png", usuario: "adorable_animals", status: "Segue você" },
    { foto: "./assets/sd5.png", usuario: "smallcutecats", status: "Segue você" },
  ]

  return (
    <div className="sugestoes">
      <div className="sg">
        <h1>Sugestões para você</h1>
        <h2>Ver tudo</h2>
      </div>
      {dados.map((s) => <Sugestao key={s.index} foto={s.foto} usuario={s.usuario} status={s.status} />)}
    </div>
  )


}

function Sugestao(props) {
  return (
    <div className="cx-sugestoes">
    <div className="box">
      <img src={props.foto} />
      <div className="txt">
        <h1>{props.usuario}</h1>
        <h2>{props.status}</h2>
      </div>
    </div>
    <div className="seguir">
      <h1>Seguir</h1>
    </div>
  </div>
  )

}