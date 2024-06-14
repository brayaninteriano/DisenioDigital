// 1. Dado el siguiente listado de objetos:
const libros = [
    {
      titulo: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      año: 1967,
    },
    {
      titulo: "Don Quijote de la Mancha",
      autor: "Miguel de Cervantes",
      año: 1605,
    },
    {
      titulo: "1984",
      autor: "George Orwell",
      año: 1949,
    },
];
// Genere una lista que contenga solo los autores de dicha lista en una variable
// llamada: autores.
const autores = libros.map((e)=>e.autor)
console.log("Ejercicio 1",autores);

// 2. Dado el siguiente objeto:
const empleado = { nombre: "Juan", salario: 10000, antiguedad: 6 };
// Modifique el valor del salario, siempre y cuando la antigüedad sea mayor a 5 años, el
// aumento será del 10%. Imprima los nuevos valores.
empleado.salario = (empleado.antiguedad > 5) ?empleado.salario * (0.10) + empleado.salario: empleado.salario;
console.log("Ejercicio 2",empleado);

// 3. Dado el siguiente listado:
const numeros = [5, 8, 12, 3, 7, 19, 1, 10, 2]
// imprima el número mayor de la lista (sin ordenarla)
let mayor = numeros[0];
numeros.forEach((a)=>{ mayor = a < mayor ? a : mayor})
console.log("Ejercicio 3",`El numero mayor es: ${mayor}`);

// 4. Con el listado anterior, calcule el promedio de todos los números impares
//Forma 1
let suma = 0;
let count = 0;
numeros.forEach((a)=>{ 
    if(a % 2 != 0){
        suma = suma + a;
        count++;
    }
})
let promedio = suma/count;
console.log("Ejercicio 4 Forma #1",`El promedio de impares es: ${promedio}`);

//Forma 2
let suma_ = numeros.reduce((a,b)=> a + ( b%2==0 ? 0 : b));
let count_ = numeros.filter((x)=>x % 2 != 0).length;
let promedio_ = suma_/count_;
console.log("Ejercicio 4 Forma #2",`El promedio de impares es: ${promedio_}`);

// 5. Dado el siguiente objeto:

const persona = { nombre: "Ana", edad: 25, ciudad: "SPS" };
// Desestructure el objeto para extraer los valores en 3 variables diferentes y mostrarlas
// en consola.
const { nombre, edad, ciudad } = persona;
console.log("Ejercicio 5")
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Ciudad:", ciudad);