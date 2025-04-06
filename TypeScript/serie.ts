export class Serie{
    private _numero : number;
    private _titulo: String;
    private _canal : String;
    private _temporadas : number;
    private _sinopsis:String;
    private _info:String;
    private _img:String;

    constructor(numero:number, titulo:String, canal:String, temporadas:number,sinopsis:String,info:String,img:String){
        this._numero=numero
        this._titulo=titulo
        this._canal=canal
        this._temporadas=temporadas
        this._sinopsis=sinopsis
        this._info=info
        this._img=img
    }
    get numero(){
        return this._numero;
    }
    get titulo(){
        return this._titulo;
    }
    get canal(){
        return this._canal;
    }
    get temporadas(){
        return this._temporadas;
    }
    get sinopsis(){
        return this._sinopsis;
    }
    get info(){
        return this._info;
    }
    get img(){
        return this._img;
    }
}