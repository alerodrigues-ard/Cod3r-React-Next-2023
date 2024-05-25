import Layout from "@/components/layout";
import { useRouter } from 'next/router';

export default function ClientePorCodigo() {
  const router = useRouter()

  return (
    <Layout titulo="Navegação Dinâmica">
      <div style={{ color: "#fff" }}>
        <div>Código: {router.query.codigo}</div>
        <div>Filial: {router.query.filial}</div>
      </div>
    </Layout>
  );
}




