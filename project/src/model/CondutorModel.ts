import { AbstractEntity } from './AbstractEntityModel'

export class Condutor extends AbstractEntity {
    nome!: string
    cpf!: string
    telefone!: string
    tempoPago?: Date
    tempoDesconto?: Date
}