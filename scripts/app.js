define(['eventos', 'auxiliares'], function(eventos, auxiliares){
    
    var _init = function(){
        
        // EventHandlerHelper.addEventListener(window, "load", eventos.focoEnTexto);
        eventos.focoEnTexto();

        EventHandlerHelper.addEventListener(auxiliares.getBtnEnviar(), "click", eventos.onClickBoton);

        EventHandlerHelper.addEventListener(auxiliares.getCtrlTexto(), "keypress", eventos.onEnterTextbox);
    };

    return {
        init: _init
    };
});