define(['auxiliares'],function(auxiliares){

	////////////////////////////
	// INTERFAZ DE USUARIO
	////////////////////////////

	var PLANTILLA_LINEA = "<div class='linea'><span class='hora'>{{hora}}</span>: {{texto}}</div>";

	var _generarLinea = function (msg) {
		//Se codifica el mensaje para evitar crear HTML
		msg = msg.replace(/&/g, '&amp;')
				.replace(/"/g, '&quot;')
				.replace(/'/g, '&#39;')
				.replace(/</g, '&lt;')
				.replace(/>/g, '&gt;');
		var msgFinal = PLANTILLA_LINEA.replace("{{texto}}", msg);
		msgFinal = msgFinal.replace("{{hora}}", auxiliares.getHoraActual());
		return msgFinal;
	}

	return {
		generarLinea: _generarLinea
	}

});