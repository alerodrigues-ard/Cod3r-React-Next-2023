import { useState } from 'react'
import Layout from '../components/Layout'

export default function Integracao() {

  const [codigo, setCodigo] = useState({})
  const [cliente, setCliente] = useState({})
  
  async function obterCliente() {

    // Com async/await
    const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
    const dados = await resp.json()
    setCliente(dados)
    
    // Usando promise pura
    // fetch(`'http://localhost:3000/api/clientes/${codigo}`)
    //  .then(resp => resp.json())
    //  .then(dados => setCliente(dados))
  }

  return (
    <Layout>
      <div style={{color: "#fff"}}>

        <div>
          <input type="number" value={codigo}
            onChange={e => setCodigo(e.target.value)}/>
          <button onClick={obterCliente}>Obter cliente</button>
        </div>
        <ul>
          <li>Código: {cliente.id}</li>
          <li>Nome: {cliente.nome}</li>
          <li>Email: {cliente.email}</li>
        </ul>
      </div>
    </Layout>
  )
}