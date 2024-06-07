export default function handler(req: any, res: any) {
  const codigo = req.query.codigo

  res.status(200).json({
    id: codigo,
    nome: `Maria ${codigo}`,
    email: `maria_maria_maria_${codigo}@email.email.com`,
  })
}

