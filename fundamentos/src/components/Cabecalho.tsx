export default function Cabecalho(props: any) {
  props.titulo += "adicionando texto"
  return (
    <div>
      <h1>{props.titulo}</h1>
    </div>
  )
}