import Layout from "../components/layout"

export default function Jsx() {
  const titulo = <h1>JSX é um conceito central</h1>
  // TODO: Retirar quando passar a usar CSS
  const background = "#000"
  const color = "#fff"

  function subtitulo() {
    return <h2>{"muito legal".toUpperCase()}</h2>
  }
  return (
    <Layout titulo="Entendendo o JSX">
  // TODO: Retirar inline style quando passar a usar CSS
      <div style={{color: color, backgroundColor: background}}>
        {titulo}
        {subtitulo()}
        <p>{JSON.stringify({ nome: "João", idade: 30 })}</p>
      </div>
    </Layout>
  );
}