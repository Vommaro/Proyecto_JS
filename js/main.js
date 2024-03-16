function validarNota(){
let x=0;
let nota=0;
    do{
       nota = prompt("Ingresa la Nota");
       nota = Number(nota);
       if (nota>=1 && nota<=10) {
        x=1;
       }
   else{
    alert("Ingresa una Nota Valida")
   }
    }while(x==0)
    return nota;
 }
 function validarLeg(){
    let x=0;
    let leg;
        do{
             leg = prompt("Ingrese numero de Legajo del Estudiante o un 0(cero) para Salir y ver los Resultados");
           if (!isNaN(leg) && Number(leg)>=0) {
            x=1;
           }
       else{
        alert("Ingrese un Legado Valido mayor a 0")
       }
        }while(x==0)
        return leg;
     }
function validarNombre() {
    let nom, x=0;
    do{
        nom = prompt("Porfavor ingrese su Nombre y Apellido")
        if (isNaN(nom)) {
       x=1;
      }
  else{
   alert("Ingrese un texto valido")
  }
   }while(x==0)
   return nom;
}
function elegirMateria(){
    let x=0, a;
    do{
        a = prompt("Porfavor Elija que notas desea cargar al sismeta.\nSeleccione:\n 1. Analisis Matematico\n 2. Calculo Numerico\n 3. Algebra Analitica")
        if (a==1 || a==2 || a==3) {
            x=1;
      }
  else{
   alert("Ingrese una opcion Valida")
  }
   }while(x==0)
   if (a==1) {
    a = "Analisis Matematico";
   } else if(a==2){
    a =  "Calculo Numerico";
   }else
    a = "Algebra Analitica";
   return a;
}
let materia, nombre, legajo, nota1, nota2, nota3, notafinal, acumAprueba=0, acumDesaprueba=0, acumCursa=0, acumAlumnos= 0;
console.log("Bienvenido al Sistema de Carga de Notas\n Siga los Pasos a Continuacion.");
nombre = validarNombre();
// alert("Bienvenido al Sistema de Carga",nombre);
console.log("Bienvenido al Sistema de Carga",nombre);
materia = elegirMateria();
legajo = validarLeg();
while(legajo!=0){
    nota1 = validarNota();
    nota2 = validarNota();
    nota3 = validarNota();
    notafinal = Number((nota1 + nota2 + nota3)/3)
    if (notafinal>=7) {
        console.log("Legajo: ",legajo,"\nPromociona la Asignatura con:", notafinal);
        acumAprueba++;
    } else if (notafinal<4) {
        console.log("Legajo: ",legajo,"\nRecursa la Asignatura con:", notafinal);
        Number(acumDesaprueba++);
    } else{
        console.log("Legajo: ",legajo,"\nCursa la Asignatura con:", notafinal);
        acumCursa++;
    }
    legajo = validarLeg();
    acumAlumnos++;
}
console.log("El Numero de Estudientes inscriptos a:",materia, "Fue de:",acumAlumnos,"\nEl Total de aprobados fue de:",acumAprueba,"Representa un",(acumAprueba*100)/acumAlumnos,"% del Total ingresado","\nEl Total de Cursados fue de: ",acumCursa, "Representa un", (acumCursa*100)/acumAlumnos,"% del Total ingresado" , "\nEl Total de Desaprobados fue de: ",acumDesaprueba,"Representa un", (acumDesaprueba*100)/acumAlumnos, "% del Total ingresado");
