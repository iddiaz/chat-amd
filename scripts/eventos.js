define(['auxiliares', 'ui'],function(auxiliares, ui){

    //=================================================
    //_ se usa como convención en aplicaciones modulares para indicar que 
    // esto se expondra al exterior.
    //=================================================

    //Manejador del evento click del boton
    var _onClickBoton = function () {
        var texto = auxiliares.getCtrlTexto().value;
        if (texto.trim() != "") {	
            //Se genera el HTML para el chat
            var nuevoHtml = ui.generarLinea(texto);
            //Se agrega al cuadro del chat
            auxiliares.addLinea(nuevoHtml);
            //Se limpia el cuadro de texto
            auxiliares.getCtrlTexto().value = "";
        }
        //Se le pone el foco siempre
        auxiliares.getCtrlTexto().focus();
    }

    //Manejador de pulsar teclas en el cuadro de texto
    var _onEnterTextBox = function (ev) {
        ev = EventHandlerHelper.fixEvent(ev);
        //Si se pulsa ENTER llamamos al mismo manejador que cuando se hace click en un bot�n
        if (ev.keyCode == 13)
            _onClickBoton();

    }

    var _focoTexto = function(){
        auxiliares.getCtrlTexto().focus();
    }

    return {
        onClickBoton: _onClickBoton,
        onEnterTextbox: _onEnterTextBox,
        focoEnTexto: _focoTexto
    };

});



