import { useState } from "react";
import Layout from "@/components/Layout";

export default function Estado() {
  const [numero, setNumero] = useState(0) // É um React Hook
  function incrementar() {
    setNumero(numero + 1)
  }

  return (
    // TODO: Retirar inline style quando passar a usar CSS
    <Layout titulo="Componente com Estado">
      <div style={{color: "#fff"}}>
        <div>{numero}</div>
        <button type="button" onClick={incrementar}>Incrementar</button>
      </div>
    </Layout>
  )
}




