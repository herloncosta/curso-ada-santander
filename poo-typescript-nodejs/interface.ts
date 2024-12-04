export interface IEstabelecimento {
    listarNomesProdutos(): string[]
    aumentarFila(): void
    diminuirFila(): void
    get tamanhoFila(): number
}
