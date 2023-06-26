import { AbstractEntity } from "./AbstractEntityModel";
import { Condutor } from "./CondutorModel";
import { Veiculo } from "./VeiculoModel";

export class Movimentacao extends AbstractEntity {
    veiculo!: Veiculo
    condutor!: Condutor
    entrada!: Date
    saida!: Date
    tempo?: Date
    tempoDesconto?: Date
    tempoMulta?: Date
    valorDesconto?: number
    valorMulta?: number
    valorTotal?: number
    valorHora?: number
    valorHoraMulta?: number
}