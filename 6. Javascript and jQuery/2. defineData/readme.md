# Define un tipo de dato de cada uno de los tipos de datos en javascript

```javascript
Número (Number)

    // Declaración e inicialización de una variable numérica
    var numero = 10;
    console.log(numero); // Imprime el valor: 10
    console.log(typeof numero); // Imprime el tipo de dato: number

```	

```javascript
Cadena de caracteres (String)

// Declaración e inicialización de una variable de cadena de caracteres
var texto = "Hola, mundo!";
console.log(texto); // Imprime el valor: Hola, mundo!
console.log(typeof texto); // Imprime el tipo de dato: string
```	

```javascript
Booleano (Boolean)

// Declaración e inicialización de una variable booleana
var esVerdadero = true;
console.log(esVerdadero); // Imprime el valor: true
console.log(typeof esVerdadero); // Imprime el tipo de dato: boolean
```	

```javascript	
Arreglo (Array)

// Declaración e inicialización de un arreglo
var listaNumeros = [1, 2, 3, 4, 5];
console.log(listaNumeros); // Imprime el valor: [1, 2, 3, 4, 5]
console.log(typeof listaNumeros); // Imprime el tipo de dato: object (en JavaScript, los arreglos son objetos)
```	

```javascript	
Objeto (Object)

// Declaración e inicialización de un objeto
var datosPersona = { nombre: "Juan", edad: 30, ciudad: "Madrid" };
console.log(datosPersona); // Imprime el valor: { nombre: "Juan", edad: 30, ciudad: "Madrid" }
console.log(typeof datosPersona); // Imprime el tipo de dato: object


```	

```javascript	
Undefined

// Declaración de una variable sin inicializar
var variableSinValor;
console.log(variableSinValor); // Imprime el valor: undefined
console.log(typeof variableSinValor); // Imprime el tipo de dato: undefined


```	

```javascript	
Variable con scope local y global

// Declaración e inicialización de una variable con scope global
var variableGlobal = "Variable global";

function miFuncion() {
  // Declaración e inicialización de una variable con scope local
  var variableLocal = "Variable local";
  console.log(variableLocal); // Imprime el valor: Variable local
  console.log(variableGlobal); // Imprime el valor: Variable global
}

miFuncion();
console.log(variableGlobal); // Imprime el valor: Variable global
console.log(variableLocal); // Generará un error, ya que variableLocal está fuera del scope


```	
