/*let titulo = document.querySelector('h1');
titulo.innerHTML = "Juego del numero secreto";

let parrafo = document.querySelector('p');
parrafo.innerHTML = "Indique un numero del 1 al 10 ";
*/
// let numeroSecreto = GenerarNumeroSecreto();
// let intentos =1 ;
let numeroSecreto = 0;
let intentos = 0 ;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

function asignarTextoElemento (elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.textContent = texto;
    return;
}
function  verificarIntento(){
    let numeroDeUsuario =parseInt( document.getElementById('valorUsuario').value);
    // ``
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento ('p' , `Acertaste el numero en ${intentos} ${(intentos===1) ? 'vez ' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        }else {
            if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p' ,'El numero secreto es menor ');
           
             } else {
            asignarTextoElemento('p' ,'El numero secreto es mayor');
             }
            intentos++;
            limpiarCaja();
          }
            return;
}
function limpiarCaja(){
   //function limpiarCaja() {
    // let valorCaja = document.querySelector('#valorUsuario');
    // valorCaja.value = '';
    //let valorCaja = document.querySelector('#valorUsuario').value = '';

    document.querySelector('#valorUsuario').value = "";
}
function GenerarNumeroSecreto() {
    
    let  numeroGenerado = Math.floor(Math.random() * 10) + 1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
     //si ya sorteamos todos los numeros
     if(listaNumerosSorteados.length == numeroMaximo){
                asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');     
    } else{

            //si el numero generado esta incluido en la lista 


            if (listaNumerosSorteados.includes(numeroGenerado)) {
                return GenerarNumeroSecreto();
            } else {

                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
      }
    }
function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del numero secreto!");
   // ``
    asignarTextoElemento("p",`Indique un numero del 1 al ${numeroMaximo}`);
     numeroSecreto=GenerarNumeroSecreto();

     intentos=1;
     console.log(numeroSecreto);
}

function reiniciarJuego(){
    // limpiar la caja 
    limpiarCaja();
    // indicar mensaje de intervalo de numeros 
    //mensajesIniciales();

    //generar el numero aleatorio
    //numeroSecreto=GenerarNumeroSecreto();
    //inicializar el numero de intentos
    //intentos=1;
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego 

    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
  
  //let numeroSecreto = GenerarNumeroSecreto();

  condicionesIniciales();