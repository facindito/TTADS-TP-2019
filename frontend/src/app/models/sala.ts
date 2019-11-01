export class Sala {

    constructor(_id = '', numero = '', capacidad = 0) {
        this._id = _id;
        this.numero = numero;
        this.capacidad = capacidad;
    }

    _id: string;
    numero: string;
    capacidad: number;
}
