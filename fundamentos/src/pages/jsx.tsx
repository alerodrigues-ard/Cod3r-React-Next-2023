﻿import Layout from "../components/Layout"

export default function Jsx() {
  const titulo = <h1>JSX é um conceito central</h1>
  // TODO: Retirar quando passar a usar CSS
  const background = "#000"
  const color = "#fff"

  function subtitulo() {
    return <h2>{"muito legal".toUpperCase()}</h2>
  }
  return (
  // TODO: Retirar inline style quando passar a usar CSS
    <Layout titulo="Entendendo o JSX">
      <div>
        {titulo}
        {subtitulo()}
        <p>{JSON.stringify({ nome: "João", idade: 30 })}</p>
      </div>
    </Layout>
  );
}