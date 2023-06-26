import { AbstractEntity } from "./AbstractEntityModel";
import { Cor } from "./CorModel";
import { Modelo } from "./ModeloModel";
import { Tipo } from "./TipoModel";

export class Veiculo extends AbstractEntity {
    placa!: String
    modelo!: Modelo
    ano!: number
    cor!: Cor
    tipo!: Tipo
}