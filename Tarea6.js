try {
    // Ejercicio 1: Pregunta la edad del usuario
    function verificarEj1() {
        var edad = document.getElementById("numero1").value;

        if (isNaN(edad)) {
            throw new Error('Edad no válida');
        } else {
            if (edad >= 18) {
                alert("Eres mayor de edad");
                
            } else {
                alert("Eres menor de edad");
            }
        }
    }
    document.getElementById("ejercicio1").addEventListener("click", verificarEj1);



    // Ejercicio 2: Pregunta al usuario por un número entre 1 y 10
    function verificarEj2() {
    var numero =  parseInt(document.getElementById("numero2").value);
    switch (numero) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
            alert("Número Impar");
            break;
        case 2:
        case 4:
        case 6:
        case 8:
        case 10:
            alert("Número Par");
            break;
        default:
            alert("Número no válido");
    }
}
    document.getElementById("ejercicio2").addEventListener("click", verificarEj2);



     // Ejercicio 3: Un botón que ejecute el código
     function verificarEj3() {
        var contadorElement = document.getElementById("contador");
        var valorActual = 0;
        for (let i = 0; i <= 10; i++) {
            valorActual = i;
        }
        contadorElement.textContent = valorActual;
    }
    document.getElementById("ejercicio3").addEventListener("click", verificarEj3); 



    // Ejercicio 4: Pregunta al usuario por un número menor a 5
    function verificarEj4() {
    let numeroMenor5 = document.getElementById("numero4").value;
    if (isNaN(numeroMenor5)) {
        throw new Error('Número no válido');
    }
    while (numeroMenor5 < 5) {
        alert("Dentro del Rango"); 
        break;
    }
}
document.getElementById("ejercicio4").addEventListener("click", verificarEj4); 


    // Ejercicio 5: Pregunta al usuario por un número menor a 10
    function verificarEj5() {
    do {
        numeroMenor10 = document.getElementById("numero5").value;
        if (isNaN(numeroMenor10)) {
            throw new Error('Número no válido');
        }
        
        alert("Dentro del Rango");
        break;
       
        
    } while (numeroMenor10 < 10);

    }
    document.getElementById("ejercicio5").addEventListener("click", verificarEj5); 


    // Ejercicio 6: Pregunta al usuario por su primer nombre
    
     function verificarEj6(nombre) {
        var nombre = document.getElementById("numero6").value;
        return(alert(`¡Hola, ${nombre}!`));
    }
    document.getElementById("ejercicio6").addEventListener("click", verificarEj6); 

    // Ejercicio 7: Pregunta al usuario por un segundo nombre
    function verificarEj7() {
        var nombre2 = document.getElementById("numero7").value;
        verificarEj6('Fernanda'); //NO LEE
    }
    document.getElementById("ejercicio7").addEventListener("click", verificarEj7); 

    // Ejercicio 8: Pedir al usuario dos números, sumarlos y compararlos
    function verificarEj8() {
        var x = parseFloat(document.getElementById("primero").value);
        var y = parseFloat(document.getElementById("segundo").value);
        var suma = x + y;
        alert("La suma de los números es:  " + suma.toString());

        var p = (x == y);
        if (p == false) {
            var q = true;
            alert(p && q);
        } else {
            var q = false;
            alert(p || q);
        }
    }

    // Ejercicio 9: Preguntar al usuario por un número con decimales
    function verificarEj9() {
        var num = parseFloat(document.getElementById("numero9").value);
        alert("Número como cadena:  "+ num.toString());
        alert("Número redondeado a dos decimales:  "+ num.toFixed(2));
        alert('Valor de PI:  '+ Math.PI);
    }
    document.getElementById("ejercicio9").addEventListener("click", verificarEj9); 

     // Ejercicio 10: Calcular la edad del usuario a partir del año de nacimiento
     function verificarEj10() {
        var annoNacimiento = parseInt(document.getElementById("numero10").value);
        var annoActual = new Date().getFullYear();
        var edad = annoActual - annoNacimiento;
        alert("Tu edad es:  "+ edad);
     }
     document.getElementById("ejercicio10").addEventListener("click", verificarEj10); 
     
     //Ejercicio 11: Pedir al usuario una palabra en minúsculas e imprimirla en mayúsculas
     function verificarEj11() {
        var palabraMinusculas = document.getElementById("numero11").value;
        alert("Palabra en mayúsculas:  "+ palabraMinusculas.toUpperCase());
     }
     document.getElementById("ejercicio11").addEventListener("click", verificarEj11); 


     //Ejercicio 12: Incrementa el numero
        function incrementarContador() {
            var contadorElement = document.getElementById("contador");
            var valorActual = parseInt(contadorElement.textContent, 10);
            contadorElement.textContent = valorActual + 1;
        }

        function resetearContador() {
            var contadorElement = document.getElementById("contador");
            contadorElement.textContent = "0";
        }

        document.getElementById("incrementar").addEventListener("click", incrementarContador);
        document.getElementById("resetear").addEventListener("click", resetearContador);



        // Ejercicio 13: Boton
        function verificarEj13() {
            var frutas = ['manzana', 'plátano', 'naranja'];
            alert(frutas);
            alert(frutas[2]);   
            alert(frutas.length); 
            frutas.push('pera');     
            alert(frutas);  

            var numeros = new Int32Array([1, 2, 3, 4, 5]);
            alert(numeros);
            alert(numeros.length);

            // Selectores de clases

            var parrafos = document.getElementsByTagName('p');
            console.log(parrafos);

            var elemento = document.querySelector('.miClase'); 
            console.log(elemento);

            var elementosClase = document.getElementsByClassName('miClase');
            console.log(elementosClase);

            var imagenes = document.images; // Colección de elementos de imagen (<img>)
            console.log(imagenes);
        }
        document.getElementById("ejercicio13").addEventListener("click", verificarEj13); 


} catch (error) {
    console.log(error.message);
}