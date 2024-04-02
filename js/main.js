function validarNombre() {
  let nom,
    x = 0;
  do {
    nom = prompt("Porfavor ingrese su Nombre y Apellido");
    if (isNaN(nom)) {
      x = 1;
    } else {
      alert("Ingrese un texto valido");
    }
  } while (x == 0);
  return nom;
}
function elegirMateria() {
  let x = 0,
    a;
  do {
    a = prompt(
      "Porfavor Elija que notas desea cargar al sismeta.\nSeleccione:\n 1. Analisis Matematico\n 2. Calculo Numerico\n 3. Algebra Analitica"
    );
    if (a == 1 || a == 2 || a == 3) {
      x = 1;
    } else {
      alert("Ingrese una opcion Valida");
    }
  } while (x == 0);
  if (a == 1) {
    a = "Analisis Matematico";
  } else if (a == 2) {
    a = "Calculo Numerico";
  } else a = "Algebra Analitica";
  return a;
}
function validarLeg() {
  let x = 0;
  let leg;
  do {
    leg = prompt(
      "Ingrese numero de Legajo del Estudiante o un 0(cero) para Salir y ver los Resultados"
    );
    if (!isNaN(leg) && Number(leg) >= 0) {
      x = 1;
    } else {
      alert("Ingrese un Legado Valido mayor a 0");
    }
  } while (x == 0);
  return leg;
}
function generarNota() {
  return Math.floor(Math.random() * 10) + 1;
}
let materia,
  nombre,
  acumAprueba = 0,
  acumDesaprueba = 0,
  acumCursa = 0,
  acumAlumnos = 0;
function alumno(legajo, edad, nota1, nota2, nota3, promedio) {
  this.legajo = legajo;
  this.edad = edad;
  this.nota1 = nota1;
  this.nota2 = nota2;
  this.nota3 = nota3;
  this.promedio = promedio;
}
console.log(
  "Bienvenido al Sistema de Carga de Notas\n Siga los Pasos a Continuacion."
);
nombre = validarNombre();
console.log("Bienvenido al Sistema de Carga", nombre);
materia = elegirMateria();
let acc=0, maximo=-Infinity, maximoLeg=0;
let alumnos = [];
let crearalum = new alumno(
  validarLeg(),
);
alumnos.push(crearalum);
while (alumnos[acumAlumnos].legajo != 0) {
    alumnos[acumAlumnos].edad = Math.floor(Math.random() * 47) + 18;
    acc = (acc + alumnos[acumAlumnos].edad);
    alumnos[acumAlumnos].nota1 = generarNota();
    alumnos[acumAlumnos].nota2 = generarNota();
    alumnos[acumAlumnos].nota3 = generarNota();
    alumnos[acumAlumnos].promedio =
        (alumnos[acumAlumnos].nota1 +
        alumnos[acumAlumnos].nota2 +
        alumnos[acumAlumnos].nota3) / 3;

  if (alumnos[acumAlumnos].promedio >= 7) {
    console.log(
      "Legajo: ",
      Number(alumnos[acumAlumnos].legajo),
      "\nPromociona la Asignatura con:",
      (alumnos[acumAlumnos].promedio).toFixed(2)
    );
    acumAprueba++;
  } else if (alumnos[acumAlumnos].promedio < 4) {
    console.log(
      "Legajo: ",
      Number(alumnos[acumAlumnos].legajo),
      "\nRecursa la Asignatura con:",
      (alumnos[acumAlumnos].promedio).toFixed(2)
    );
    acumDesaprueba++;
  } else {
    console.log(
      "Legajo: ",
      Number(alumnos[acumAlumnos].legajo),
      "\nCursa la Asignatura con:",
      (alumnos[acumAlumnos].promedio).toFixed(2)
    );
    acumCursa++;
  }
  if (maximo < alumnos[acumAlumnos].promedio) {
    maximo = alumnos[acumAlumnos].promedio;
    maximoLeg = acumAlumnos;
  }
  acumAlumnos++;
  let crearalum = new alumno(
    validarLeg(),
  ); 
  alumnos.push(crearalum);
}
console.log(alumnos);

if (alumnos.length-1 != 0) {
  


console.log("Sistema de Carga para la Asignatura",materia, "comision N° ",Math.floor(Math.random()*100)+1)
console.log("La cantidad de Alumnos ingresado fue:", alumnos.length-1,"\nLa Cantidad de Aprobados es:", acumAprueba, "\nLa Cantidad de Desaprobados es:", acumDesaprueba, "\nLa Cantidad en condicion de Cursada es:", acumCursa);
console.log("El Mejor Promedio del Curso Fue:",maximo.toFixed(2),"Corresponde al Legajo Numero", Number(alumnos[maximoLeg].legajo)); 
console.log("El Promedio de edad de la comision es:", Number((acc/(alumnos.length-1))).toFixed(0), "años");
}else{
  console.log("No se han Cargado Alumnos")
}


