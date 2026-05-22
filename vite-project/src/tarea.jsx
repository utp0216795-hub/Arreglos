// Arreglo con 10 números pares
let pares = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// Copia de "pares"
let numeros = [...pares];

// Agregar 3 números más al final
numeros.push(22, 24, 26);

// Copia de "numeros"
let impares = [...numeros];


// Borrar el contenido de "impares"
impares.splice(0, impares.length);

// Agregar 3 números impares
impares.push(1, 3, 5);

// Nuevo arreglo que contiene "pares" e "impares"
let todos = [pares, impares];

// Mostrar resultados
console.log("Pares:", pares);
console.log("Numeros:", numeros);
console.log("Impares:", impares);
console.log("Todos:", todos);
