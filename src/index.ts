let nota, suma, promedio, contador: number;
suma = 0;
for (contador = 1; contador <= 10; contador++) {
  nota = Number(prompt("ingrese una nota" + contador + ":"));
  suma = suma + nota;
}
promedio = suma / 10;
console.log("el promedio es " + promedio);
