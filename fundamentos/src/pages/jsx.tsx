export default function Jsx() {
  const titulo = <h1>JSX é um conceito central</h1>
  const color = "#12313"

  function subtitulo() {
    return <h2>{"muito legal".toUpperCase()}</h2>
  }
  return (
    <div>
      {titulo}
      {subtitulo()}
      <p>
        {JSON.stringify({nome: 'João', idade: 30})}
      </p>
    </div>
  )
}