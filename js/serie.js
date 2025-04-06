export class Serie {
    constructor(numero, titulo, canal, temporadas, sinopsis, info, img) {
        this._numero = numero;
        this._titulo = titulo;
        this._canal = canal;
        this._temporadas = temporadas;
        this._sinopsis = sinopsis;
        this._info = info;
        this._img = img;
    }
    get numero() {
        return this._numero;
    }
    get titulo() {
        return this._titulo;
    }
    get canal() {
        return this._canal;
    }
    get temporadas() {
        return this._temporadas;
    }
    get sinopsis() {
        return this._sinopsis;
    }
    get info() {
        return this._info;
    }
    get img() {
        return this._img;
    }
}
