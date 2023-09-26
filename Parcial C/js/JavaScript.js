let my=0;
let ind=0;
let reemp;

let aDato = new Array();

function cargar() { 
    aDato[ind] = new Array();

    aDato[ind][0] = ind+1;
    aDato[ind][1] = document.getElementById("descripcion").value;
    aDato[ind][2] = document.getElementById("rubro").value;
    aDato[ind][3] = document.getElementById("punit").value;
    aDato[ind][4] = document.getElementById("cant").value;

    console.log(aDato[ind][0]+' '+aDato[ind][1]+' '+aDato[ind][2]+' '+aDato[ind][3]+' '+aDato[ind][4]);
    //se escribe antes del ind++ sino habria un error porque el indice cambiaria a 1 con ind++ y no seria 0
    ind++;

    limpiarcuadro();
}

function limpiarcuadro() {
    document.getElementById("descripcion").value = "";
    document.getElementById("rubro").value = "";
    document.getElementById("punit").value = "";
    document.getElementById("cant").value = "";

    document.getElementById("descripcion").focus();
}
//punto 1
function mayorprecio() { 
    for(ind = 0; ind < aDato.length; ind++) {
        if(+aDato[ind][3] > my){
            my = aDato[ind][3];
            reemp = ind;
        }
    }
alert("El artículo "+aDato[reemp][1]+" del rubro "+ aDato[reemp][2]+ " tiene el mayor precio unitario: "+ my);
//lenght es la cantidad de registros que se dieron, la longitud
}
//punto 2
function cantmen() {
    let h=0;
    for(ind = 0; ind< aDato.length; ind++ ){
       if (+aDato[ind][4] < 10) {
            h++;
        }
     }
alert("La cantidad de artículos con stock menor a 10 es: "+ h);
//lleva solo h porque ya no hay que incrementar
}
//punto 3
function impmayor() {
    let i=0;
    let importe=0; 
    for(ind = 0; ind< aDato.length; ind++ ){
        importe = +aDato[ind][3] * +aDato[ind][4]; //precio por cantidad
        if(importe > 5000){
            i++;
        }
    }
alert("La cantidad de artículos con importe mayor a 5000 es:  "+ i);   
}