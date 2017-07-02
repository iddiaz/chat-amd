define([],function(){
	////////////////////////////
	// FUNCIONES AUXILIARES
	////////////////////////////

	//Obtener referencias a elementos del DOM
	var ctrlTexto = null;
	var ctrlLineas = null;
	var ctrlBtnEnviar = null;

	var _getCtrlTexto = function () {
		if (ctrlTexto == null)
			ctrlTexto = document.getElementById("texto");

		return ctrlTexto;
	}

	var _getCtrlLineas = function () {
		if (ctrlLineas == null)
			ctrlLineas = document.getElementById("lineas");

		return ctrlLineas;
	}

	var _getBtnEnviar = function () {
		if (ctrlBtnEnviar == null)
			ctrlBtnEnviar = document.getElementById("btnEnviar");

		return ctrlBtnEnviar;
	}

	//Auxiliares de UI
	var _focoEnTexto = function () {
		_getCtrlTexto().focus();
	}

	//A�ade un nuevo elemento al conjunto de l�neas
	//Se le pasa el HTML del elemento a a�adir
	var _addLinea = function (nuevaLinea) {
		_getCtrlLineas().innerHTML += nuevaLinea;
		//OJO: lo anterior es una mala pr�ctica en cuanto a rendimiento para generar HTML en el DOM 
		//porque fuerza a re-parsear y redibujar el contenido del DIV de cada vez, 
		//pero para este ejemplo nos sirve. 
		//NO se debe usar en un proyecto real.
	}

	//La hora actual formateada con 0 para rellenar si es necesario
	var _getHoraActual = function () {
		var horaAct = new Date();
		return __rellenaConCeros(horaAct.getHours()) + ":" + __rellenaConCeros(horaAct.getMinutes()) + ":" + __rellenaConCeros(horaAct.getSeconds());
	}

	// esta funcion no se expone al exterior __doble guión como convención
	var __rellenaConCeros = function (hora) {
		if (hora.toString().length == 1)
			return "0" + hora;
		else
			return hora.toString();
	}

	return {
		getCtrlTexto: _getCtrlTexto,
		getCtrlLineas: _getCtrlLineas,
		getBtnEnviar: _getBtnEnviar,
		focoEnTexto: _focoEnTexto,
		addLinea: _addLinea,
		getHoraActual: _getHoraActual,
		
	}
		
	

});





