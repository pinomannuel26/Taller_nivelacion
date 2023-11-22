console.log('EJERCICIOS MÓDULO 1 SOBRE LÓGICA, LÓGICA DE PROGRAMACIÓN Y PROGRAMACIÓN CON JAVASCRIPT')

/**
 * 1.	Escribir un programa con JavaScript que resuelva el siguiente problema:
 * Dada una lista (o array) de números enteros, encontrar el número más grande 
 * de la lista y mostrarlo en consola. No se debe usar la función Math.max(), ni .forEach().
 */
console.log('EJERCICIO N°1');
const arrayNumEnteros = [1, 2, 33, 14, 5,56, 7, 8];
let mayor =0;

for (let i = 0; i < arrayNumEnteros.length; i++) 
{
    if(arrayNumEnteros[i] > mayor)
    {
      mayor = arrayNumEnteros[i];
    }
}
console.log('El array a evaluar es '+ arrayNumEnteros);
console.log('El valor mas grande del array es: '+ mayor);

console.log('EJERCICIO N°2');
/**
 * 2.	Escribir una función en JavaScript que tome dos números como argumentos y devuelva su suma.
 *  Luego, escribir la misma función utilizando una función flecha (arrow function) y comparar ambas 
 * declaraciones. Llamar a ambas funciones con valores de ejemplo y mostrar los resultados en la consola 
 * del navegador.
 */

//Función tradicional
function sumaTradicional(num1, num2) 
{
    let suma = num1 + num2;
    return suma;  
}

//Arrow function

const sumaArrowFunction = (num1, num2) =>{
  let sumaFlecha = num1 + num2;
  return sumaFlecha;
}

let num1 = 3;
let num2 = 5;
let resultadoTradicional = sumaTradicional(num1,num2);
let resultadoArrowFunction = sumaArrowFunction(num1,num2);

console.log(`El resultado con la Función tradicional de ${num1} + ${num2} es: ${resultadoTradicional}`);
console.log(`El resultado con la Función flecha de ${num1} + ${num2} es: ${resultadoArrowFunction}`);

console.log('EJERCICIO N°3');

/**
 * 3.	Escribir una función en JavaScript que reciba un array de números como argumento y utilizar
 * la función de array para calcular la suma de todos los números pares en el array. Luego, 
 * llamar a la función con un array de ejemplo y mostrar el resultado en la consola del navegador.
 */

const sumaArray =(arrayNumeros) =>{
    let suma=0;
    const numeroPares = arrayNumeros.filter(numero => numero %2 == 0);
    for (const index in numeroPares) {
      suma= suma + numeroPares[index];
    }
    return suma;
}

const arrayNumero = [1,2,32,4,53,6,37];
const resultado = sumaArray(arrayNumero);
console.log(`Array original: ${arrayNumero}`);
console.log(`La suma de solo sus números pares es: ${resultado}`);


console.log('EJERCICIOS MÓDULO 3 SOBRE MÓDULO SOBRE DOM E INTERACCIÓN CON EL DOM')
/**
1.	Escribir una función en JavaScript que tome un botón en el DOM y, al hacer click en él, 
cambie el color de fondo de un elemento específico en la página. Luego, agregar el botón y 
el elemento objetivo en el DOM y asociar la función al evento “click”.
*/

const btnCambioColor =document.getElementById('cambiarColor');
const container = document.querySelector('.containerE1');
let myBoolean = false;

btnCambioColor.addEventListener('click',()=>{
  myBoolean = !myBoolean;

  if(myBoolean)
  {
    container.style.backgroundColor = 'gray';
  }
  else{
    container.style.backgroundColor = '#EFEFEF';
  }
    
});

/*
2.	Crear una lista no ordenada de elementos (por ejemplo, elementos de lista) en el DOM. 
Implementar la delegación de eventos (event delegation) para que, al hacer clic en cualquier 
elemento de la lista, se muestre un mensaje en la consola que indique qué elemento de la lista 
se ha hecho clic.
*/
console.log('Ejercicio #2');
var listaElementos = document.querySelector('.ulLista');
listaElementos.addEventListener('click', function(event) {
  
  if (event.target.tagName === 'LI') {
  
    console.log('Elemento seleccionado es:', event.target.textContent);
  }
});

/**
 * 3.	Agregar un formulario a tu página web con un campo de entrada y un botón "Enviar". 
 * Implementar una función que sea llamada al enviar el formulario y que valide el campo de entrada 
 * (por ejemplo, si está vacío), muestre un mensaje de error accesible si es necesario y en caso de 
 * que el formulario esté correctamente diligenciado muestre en consola un objeto con el dato que ha 
 * ingresado el usuario en el campo de entrada y un alert con el siguiente mensaje: “Formulario correctamente 
 * diligenciado”.
 */
 console.log('Ejercicio #3');
 function validarNombre() {

  var nombreDigitado = document.getElementById('name').value;

  if (nombreDigitado.trim() === '') {
    alert('Por favor, ingrese un valor en el campo de entrada.');
  } else {
  
    console.log('El nombre ingresado es:', nombreDigitado);
    alert('Formulario correctamente diligenciado');
  }
}

console.log('EJERCICIOS MÓDULO 4 SOBRE MÓDULO SOBRE DOM E INTERACCIÓN CON EL DOM')
console.log('Ejercicio #1');
/*
*1.	En una sección de la página web construida en los módulos anteriores, permitir a un usuario 
almacenar y recuperar datos utilizando localStorage y sessionStorage. Demostrar cómo se puede guardar
y recuperar datos de estas áreas de almacenamiento del navegador.
 */

function envioDatos() {

  var nomDigitado = document.getElementById('name2').value;
  var edadDigitada = document.getElementById('edad').value;

  if (nomDigitado.trim() === '' && edadDigitada.trim() === ''){
    alert('ERROR, No se permiten campos vacios');
  } else {
  
    //AGREGAR INFORMACION AL  LOCALSTORAGE
    let dataLocalStorage = {nombre: nomDigitado, edad: edadDigitada}
    localStorage.setItem('datosLocalStorage', JSON.stringify(dataLocalStorage));
    //RECUPERAR INFORMACION DEL LOCALSTORAGE
    let dataRecuperadaLocalStorage = JSON.parse(localStorage.getItem('datosLocalStorage'));
    console.log('La información recuperda del localStorage es: ', dataRecuperadaLocalStorage);

    //AGREGAR INFORMACION AL  SESSIONSTORAGE
    let datasessionStorage = {nombre: nomDigitado, edad: edadDigitada}
    sessionStorage.setItem('datossessionStorage', JSON.stringify(datasessionStorage));
    //RECUPERAR INFORMACION DEL SESSIONSTORAGE
    let dataRecuperadasessionStorage = JSON.parse(sessionStorage.getItem('datossessionStorage'));
    console.log('La información recuperda del sessionStorage es: ', dataRecuperadasessionStorage);
    alert('Formulario correctamente diligenciado');
  }
}