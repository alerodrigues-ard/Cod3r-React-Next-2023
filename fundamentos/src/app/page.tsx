import Link from 'next/link'
import Navegador from '../components/Navegador'

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100vh',

    }}>
      <Navegador texto="Estiloso" destino="/estiloso"></Navegador>
      <Navegador texto="Exemplo" destino="/exemplo" cor="#9400d3"></Navegador>
      <Navegador texto="JSX" destino="/jsx" cor="crimson"></Navegador>
      <Navegador texto="Nav #01" destino="/navegacao" cor="green"></Navegador>
      <Navegador texto="Nav #02" destino="/cliente/sp/Cliente123" cor="blue"></Navegador>
      <Navegador texto="Componente com Estado" destino="/estado" cor="#421735"></Navegador>
      <Navegador texto="Integração com API #01" destino="/integracao_1" cor="#383975"></Navegador>
      <Navegador texto="Conteúdo estático" destino="/estatico" cor="#f54610"></Navegador>
    </div>
  )
}
