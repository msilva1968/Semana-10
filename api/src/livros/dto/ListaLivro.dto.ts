export class ListaLivroDTO {
  constructor(
    readonly titulo: string,
    readonly sinopse: string,
    readonly sumario: string,
    readonly preco: number,
    readonly publicacao: Date,
    readonly idcategoria: string,
    readonly idautor: string,
  ) {}
}
