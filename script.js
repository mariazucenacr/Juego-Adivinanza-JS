//Primero tenemos que tener un numero al azar el cual se adivinara
let numeroAzar = Math.floor(Math.random() * 100) + 1
console.log(numeroAzar);

//El numero que el usuario ingresara en el input
let numeroEntrada = document.getElementById('numeroEntrada')

//Mostrar el mensaje
let mensaje = document.getElementById('mensaje')

//Mostrar cantidad intentos
let intento = document.getElementById('intento')
let intentos = 0

//La accion a escuchar va a ser en el boton con la sgte funcion
function chequearResultado() {
    intentos ++
    intento.textContent = intentos
    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado <1 || numeroIngresado>100 || isNaN(numeroIngresado)){
        mensaje.textContent= 'Por favor, introduce un numero valido entre el 1 y 100'
        mensaje.style.color= 'black';
        return
    }

    if(numeroIngresado == numeroAzar){
        mensaje.textContent = '¡Felicitaciones! ¡Has adivinado el numero!';
        mensaje.style.color= 'green';
        numeroEntrada.disabled=true;
    }else if(numeroIngresado < numeroAzar){
        mensaje.textContent = '¡Mas alto! ¡El numero es mayor al que ingresaste!';
        mensaje.style.color= 'red';
    }else{
        mensaje.textContent = '¡Mas bajo! ¡El numero es menor al que ingresaste!';
        mensaje.style.color= 'red';
    }
}