import Layout from "@/components/Layout";
import Cabecalho from "../components/Cabecalho";

export default function Exemplo() {
  // TODO: Retirar quando passar a usar CSS
  const background = "#000"
  const color = "#fff"

  return (
    // TODO: Retirar inline style quando passar a usar CSS
    <Layout titulo="Usando Componentes">
      <div style={{color: color, backgroundColor: background}}>
        <Cabecalho titulo="Next.js & React"/>
        <Cabecalho titulo="Aprendendo Next na prática"/>
      </div>
    </Layout>
  )
}
