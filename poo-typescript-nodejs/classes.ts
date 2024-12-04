import type { IEstabelecimento } from './interface'

type Produto = {
    nome: string
    preco: number
}

class Estabelecimento implements IEstabelecimento {
    private filaDeEspera = 10

    constructor(
        private endereco: string,
        private setor: string,
        private produtos: Produto[],
        filaDeEspera?: number,
    ) {
        this.endereco = endereco
        this.setor = setor
        this.produtos = produtos
        this.filaDeEspera = filaDeEspera ?? 0
    }
    listarNomesProdutos(): string[] {
        return this.produtos.map(produto => produto.nome)
    }

    aumentarFila(): void {
        this.filaDeEspera++
    }

    diminuirFila(): void {
        if (this.filaDeEspera === 0) {
            console.log('A fila já está vazia.')
            return
        }
        this.filaDeEspera--
    }

    get tamanhoFila(): number {
        return this.filaDeEspera
    }

    set tamanhoFila(tamanho: number) {
        if (tamanho < 0) {
            console.log('O tamanho da fila não pode ser negativo.')
            return
        }
        this.filaDeEspera = tamanho
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
console.log(padaria.tamanhoFila)
padaria.aumentarFila()
console.log(padaria.tamanhoFila)
padaria.diminuirFila()
console.log(padaria.tamanhoFila)

padaria.tamanhoFila = 5
console.log(padaria.tamanhoFila)
