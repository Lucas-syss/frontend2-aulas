// Criar uma classe Veiculo com propriedades marca, modelo e ano. 
// Criar uma classe Carro que herda de Veículo e adiciona a propriedade portas.
// 
// Criar um método description() dentro da classe Veículo que retorne uma string com todas as propriedades do veículo. 
// Depois, criar dentro da classe Carro um método description() que retorne uma string com a string da classe Veiculo e adicionado “com x portas.”;
// 
// Inicializar o objeto do carro e fazer console.log do método description() do mesmo.

class Veiculo {
  marca: string;
  modelo: string;
  ano: number;
  
    constructor(marca: string, modelo: string, ano: number) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
    }
}

class Carro extends Veiculo {
  portas: number;
  
  constructor(marca: string, modelo: string, ano: number, portas: number) {
    super(marca, modelo, ano);
    this.portas = portas;
  }
}

const firstCar = new Carro("Audi", "A3", 1999, 2);
console.log(firstCar.marca, firstCar.modelo, "de", firstCar.ano, "com", firstCar.portas, "portas");