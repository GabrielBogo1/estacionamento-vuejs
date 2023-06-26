import { AbstractEntity } from "./AbstractEntityModel";
import { Cor } from "./CorModel";
import { Modelo } from "./ModeloModel";
import { Tipo } from "./TipoModel";

export class Veiculo extends AbstractEntity {
    modelo!: Modelo
    ano!: number
    cor!: Cor
    tipo!: Tipo
}