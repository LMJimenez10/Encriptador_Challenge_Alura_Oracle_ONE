var mensaje = document.querySelector("#input-texto");
var btnEncriptar = document.querySelector("#btn-encriptar");
var btnDesencriptar = document.querySelector("#btn-desencriptar");
var btnCopiar = document.querySelector("#btn-copiar");
var mostrarFinal = document.querySelector("#msg");


function encriptarReemplazo (letra) {
	if (letra == 'a') {
		letra = 'ai';
		return letra;
	} else if (letra == 'e') {
        letra = 'enter';
        return letra;
	} else if (letra == 'i') {
        letra = 'imes';
        return letra;
    } else if (letra == 'o') {
        letra = 'ober';
        return letra;
    } else if (letra == 'u') {
        letra = 'ufat';
        return letra;
    }
}


function desencriptarReemplazo(letra) {
	if (letra == 'ai') {
		letra = 'a';
		return letra;
	} else if (letra == 'enter') {
		letra = 'e';
		return letra;
	} else if (letra == 'imes') {
		letra = 'i';
		return letra;
	} else if (letra == 'ober') {
		letra = 'o';
		return letra;
	} else if (letra == 'ufat') {
		letra = 'u';
		return letra;
	}
}


function encriptar(texto) {
	var msgEncriptado = texto.replace(/a|e|i|o|u/g, encriptarReemplazo);
	return msgEncriptado;
}


function desencriptar(texto) {
	var msgDesencriptado = texto.replace(/ai|enter|imes|ober|ufat/g, desencriptarReemplazo);
	return msgDesencriptado;
}


function verificarTexto(texto) {
	var restriccion = /[^a-zñ\s]/g;
	if (restriccion.test(texto)) {
		alert("No se permiten mayúsculas, acentos ni caracteres especiales");
		return false;
	} else {
		return true;
	}
}


btnEncriptar.addEventListener('click',function (event) {
	event.preventDefault();
	var texto = mensaje.value;
	var verificado = verificarTexto(texto);
	if (verificado == true) {
		var msgFinal = encriptar(texto);
		mostrarFinal.style.color = "";
		mostrarFinal.value = msgFinal;
	} else {
		mostrarFinal.style.color = "red";
		mostrarFinal.value = "Corrige e inténtalo de nuevo"
	}
});


btnDesencriptar.addEventListener('click', function (event) {
	event.preventDefault();
	var texto = mensaje.value;
	var verificado = verificarTexto(texto);
	if (verificado == true) {
		var msgFinal = desencriptar(texto);
		mostrarFinal.style.color = "";
		mostrarFinal.value = msgFinal;
	} else {
		mostrarFinal.style.color = "red";
		mostrarFinal.value = "Corrige e inténtalo de nuevo"	
	}
})


btnCopiar.addEventListener('click', function (event) {
	event.preventDefault();
	mostrarFinal.select();
	navigator.clipboard.writeText(mostrarFinal.value); 
	}
)

