interface Carro {
  marca: string
  modelo: string
  ano?: number
  preco: number
}

type MetodoPagamento = "cartao" | "mbway" | "paypal";

interface Pagamento {
  valor: number
  metodo: MetodoPagamento
  detalhes: string
}

const audi: Carro = { marca: "Audi", modelo: "R8", ano: 2006, preco: 50000 };

const compraAudi: Pagamento = { valor: audi.preco, metodo: "mbway", detalhes: "Compra do ano" }

function processarPagamento(pagamento: Pagamento): string{
  return `Compra de ${audi.marca} ${audi.modelo} ${audi.ano}: ${compraAudi.valor} $`
}

console.log(processarPagamento(compraAudi))