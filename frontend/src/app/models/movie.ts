export class Movie {

    constructor(_id = '', titulo = '', fechaEstreno = '') {
        this._id = _id;
        this.titulo = titulo;
        this.fechaEstreno = fechaEstreno;

    }
    _id: string;
    titulo: string;
    poster: string;
    fechaEstreno: string;
    tipo: string;
    actores: string;
    argumento: string;
    director: string;
    duracion: number;
    entradasSem: number;
    genero: string;
    estado: string;
}
