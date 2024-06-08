import Layout from "@/components/Layout";
import { useRouter } from 'next/router';

export default function ClientePorCodigo() {
  const router = useRouter()

  return (
    // TODO: Retirar inline style quando passar a usar CSS
    <Layout titulo="Navegação Dinâmica">
      <div>
        <div>Código: {router.query.codigo}</div>
        <div>Filial: {router.query.filial}</div>
      </div>
    </Layout>
  );
}




