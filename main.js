//alert('Hola mundo');

/*var nombre = 'Javier Esteban';
var apellidos= "Gomez Tejeda";
console.log(nombre + " " + apellidos);
var edad = 24;
console.log("Mi edad es " + edad);


var base = prompt('Escribe la base del triangulo');
var altura = prompt ('Escribe la altura del triangulo');
var resultado = (base * altura) / 2;
Se calcula el area de un triangulo
var base = parseInt(prompt('Escribe la base del triangulo'));
var altura = parseInt(prompt('Escribe la altura del triangulo'));
alert('El área del triangulo es: ' + resultado);

var numero = 11;
var otroNumero = '11';

console.log(typeof(numero));
console.log(typeof(otroNumero));*/
/*var otro = "";
var numeroUno = parseFloat(prompt("Ingresa un numero: "));
var numeroDos = parseFloat(prompt("Ingresa un segundo numero: "));

alert("La suma de los numeros es: " + (numeroUno + numeroDos)+
      "\nLa resta de los numeros es: " + (numeroUno - numeroDos)+
      "\nLa multiplicacion de los numeros es: " + (numeroUno * numeroDos)+
      "\nLa division de los numeros es: " + (numeroUno / numeroDos)
);*/

/*console.log("La suma de los numeros es: " + (numeroUno + numeroDos));
console.log("La resta de los numeros es: " + (numeroUno - numeroDos));
console.log("La multiplicacion de los numeros es: " + (numeroUno * numeroDos));
console.log("La division de los numeros es: " + (numeroUno / numeroDos));*/

/*do{
var edad = parseInt(prompt("Ingresa la edad del aplicante: "));
if(edad >= 18 && edad <= 29){
    alert("Has sido aceptado en el programa generation");
} else{
    alert("No cumple con los requisitos del programa");
}
opcion = prompt("Deseas registrar otro aplicante (teclea si o no)")
}while(otro == "si");

var salarioDia = parseFloat(prompt("Ingresa tu sueldo por Día"));
var salarioNetoMensual = (salarioDia - (salarioDia * .30) - (salarioDia * .10)) * 30;
var salarioNetoQuincenal = (salarioDia - (salarioDia * .30) - (salarioDia * .10)) * 15;
console.log(" El salario bruto mensual es: " + (salarioDia * 30));
console.log(" El salario bruto quincenal es: " + (salarioDia * 15));
console.log(" El salario neto mensual es:", salarioNetoMensual);
console.log(" El salario neto quincenal es:", salarioNetoQuincenal);

alert("El salario bruto mensual es: " + (salarioDia * 30)+
      "\nEl salario bruto quincenal es: " + (salarioDia * 15)+
      "\nEl salario neto mensual es:" + salarioNetoMensual +
      "\nEl salario neto quincenal es:" + salarioNetoQuincenal
);*/

/*var seccion = prompt("Ingrese que programa desea correr:"+
            "\n1 Para una consulta aleatoria"+
            "\n2 Para consultar por nombre de anime"+
            "\n3 Para Calendario")*/
   
        fetch('https://animechan.vercel.app/api/random')
        .then(response => response.json())
        .then(data => {
        console.log(data)
        console.log(data.anime) 
        console.log(data.character)
        console.log(data.quote)

        document.getElementById("anime").innerHTML = "Anime: " + data.anime;
        document.getElementById("personaje").innerHTML = "Personaje: " + data.character;
        document.getElementById("frase").innerHTML = "Frase: " + data.quote;
        });

        fetch('https://animechan.vercel.app/api/quotes/anime?title=naruto')
        .then(response => response.json())
        .then(personajes => console.log(personajes))

        fetch('https://animechan.vercel.app/api/quotes/character?name=saitama')
        .then(response => response.json())
        .then(quotes => console.log(quotes))

        fetch('https://animechan.vercel.app/api/available/anime')
        .then(response => response.json())
        .then(anime => console.log(anime))
