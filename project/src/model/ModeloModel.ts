import { AbstractEntity } from "./AbstractEntityModel";
import { MarcaModel } from "./MarcaModel"

export class Modelo extends AbstractEntity {
    nome!: string
    marca!: MarcaModel
}