export class Movie {

constructor(_id='',titulo='',descripcion='',year=0,poster='')
{
    this._id= _id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.year = year;
    this.poster = poster;
}
    _id: string;
    titulo: string;
    descripcion: string;
    year: number;
    poster : string;
    // genero:{
    //     type: string,
    //     enum : ['Accion','Comedia','Drama','Fantasia','Aventura']
    // }

}

