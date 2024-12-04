type Produto = {
    nome: string
    preco: number
}

class Estabelecimento {
    private filaDeEspera: number = 10

    constructor(private endereco: string, private setor: string, private produtos: Produto[]) {}
    listarNomesProdutos(): string[] {
        return this.produtos.map(produto => produto.nome)
    }

    aumentarFila(): void {
        this.filaDeEspera++
    }

    diminuirFila(): void {
        this.filaDeEspera--
    }

    getTamanhoFila(): number {
        return this.filaDeEspera
    }
}

const padaria = new Estabelecimento('Rua 1', 'Alimentício', [
    { nome: 'Pão', preco: 2.5 },
    { nome: 'Queijo', preco: 5.0 },
    { nome: 'Presunto', preco: 4.0 },
    { nome: 'Manteiga', preco: 3.5 },
    { nome: 'Leite', preco: 2.0 },
])

console.log(padaria)
console.log(padaria.listarNomesProdutos())
console.log(padaria.getTamanhoFila())
padaria.aumentarFila()
console.log(padaria.getTamanhoFila())
padaria.diminuirFila()
console.log(padaria.getTamanhoFila())
