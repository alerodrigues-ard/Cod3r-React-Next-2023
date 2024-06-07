export default function handler(req: any, res: any) {
  res.status(200).json({
    name: 'Teste API',
    metodo: req.method,
    //params: JSON.stringify(req.query),
    nome: req.query.nome,
    idade: req.query.idade,
    // O + transforma em numérico
    //idade: +req.query.idade
  })
}