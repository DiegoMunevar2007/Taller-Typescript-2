import { series } from "./data.js";
import { Serie } from "./serie.js";
let sumaTemporadas:number=0;

actualizarTabla();
actualizarSeasonAverage();

function actualizarTabla(){
    var contenidoTabla = document.getElementById("content");
    let nuevoContenido: string = "";
    for (let i=0; i<series.length;i++){
        let serie:Serie = series[i];
        nuevoContenido=nuevoContenido.concat(`<tr id="${i}">`+
            "<td><b>"+serie.numero+"</td>"+
            `<td><a href=\"${serie.info}\" target="_blank">`+serie.titulo+"</a></td>"+
            "<td>"+serie.canal+"</td>"+
            "<td>"+serie.temporadas+"</td>"+
            "</tr>"
            )
        
        sumaTemporadas+=serie.temporadas
    }
    if (contenidoTabla){
        contenidoTabla.innerHTML=nuevoContenido;
        //Añadir listeners
        for (let i=0; i<series.length;i++){
            let fila = document.getElementById(`${i}`)
            if(fila){
                fila.addEventListener("click",listenerFuncion)
            }
        }
    } else{
        console.log("no existe")
    }
}

function actualizarSeasonAverage(){
    var contenidoSeason = document.getElementById("season-average");
    let promedio = sumaTemporadas/series.length;
    if (contenidoSeason) {
        contenidoSeason.innerHTML = contenidoSeason.innerHTML + String(promedio);
    }
}
// Funcionalidad (medio) tomada de: https://medium.com/geekculture/html-event-handling-in-typescript-b9ca7178d912
function listenerFuncion(this: HTMLElement, ev:Event){
    ev.preventDefault();
    console.log(this); //Para debugging
    actualizarCardInfo(Number(this.id))
}

function actualizarCardInfo(numeroSerie :number){
    let contenidoCardInfo = document.getElementById("info-card");
    let serieActualizar:Serie = series[numeroSerie];
    if(contenidoCardInfo){
        contenidoCardInfo.innerHTML=`<img src="${serieActualizar.img}" class="card-img-top" alt="${serieActualizar.titulo}">
                    <div class="card-body">
                      <h5 class="card-title">${serieActualizar.titulo}</h5>
                      <p class="card-text">${serieActualizar.sinopsis}</p>
                      <a href="${serieActualizar.info}">${serieActualizar.info}</a>
                    </div>`
    }
    else{
        console.log("No existe el DIV")
    }
}
