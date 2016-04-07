var peliculas = ['toy story', 'pocahontas', 'la sirenita', 'frozen', 'cars', 'kung fu panda', 'wally'];

// obtener DIV
var mostrarPalabra = document.querySelector('.mostrar-palabra');

// obtener palabra aleatoria
var numeroAleatorio = Math.floor(Math.random() * peliculas.length);
var pelicula = peliculas[numeroAleatorio];
var letrasPelicula = pelicula.split('');
var listaLetras = [];
// console.log(letrasPelicula);
// total de errores
var totalErrores = 0;

// insertar en Input para cada letra
letrasPelicula.forEach(function(letra, index){
	var nuevoInput = document.createElement('input');
	nuevoInput.type = 'text';
	nuevoInput.id = 'palabra-'+index;
	nuevoInput.placeholder = 'Letra';
	// funcion para valorar letra
	nuevoInput.onchange = function(){
		valorarPalabra(this.id, this.value);
	}
	// nuevoInput.value = letra;
	mostrarPalabra.appendChild(nuevoInput);
	// crear lista de letras como objetos
	listaLetras.push({nombre: letra, adivinado: false});
});
// console.log(document.querySelector('#palabra1').value)

// funcion para valorar letra
function valorarPalabra(id, valor){
	// console.log(valor);
	var indice = id.split('-');
	if(valor != listaLetras[indice[1]].nombre){
		document.querySelector('#'+id).value = '';
		respuestaMala();
	}else{
		// cambiar estado de adivinado
		listaLetras[indice[1]].adivinado = true;
		// verificar si ha ganado
		ganar();
	}
}

// mostar total en HTML
function respuestaMala(){
	totalErrores += 10;
	document.querySelector('.errores').innerHTML = totalErrores.toString()+'%';
	// monstar mensaje en caso de perder
	if(totalErrores == 100){
		document.querySelector('.alerta-perder').style.display = 'block';
	}
}

// verificar si ha ganado
function ganar(){
	var letrasCorrectas = 0;
	// console.log(listaLetras);
	listaLetras.forEach(function(letra, index){
		if(letra.adivinado){
			letrasCorrectas += 1;
		}
	});
	// mostar mensaje
	if(letrasCorrectas == listaLetras.length){
		document.querySelector('.alerta-ganar').style.display = 'block';
	}
}