requirejs.config({
    //mapea el nombre del modulo e indica para que modulos estará disponible
    //indicar ruta relativa a este archivo.
    //shim: se usa para las librerias que no son amd y poder usarlas como tal.
    //Podriamos omitir shim, con la primera conf es suficiente, pero con shim podremos pasar dependencias
    //en caso de que lo necesite.
    map: {
        '*': {
            'EHH': 'libs/EventHandlerHelper'
        }
    },
    shim: {
        'EHH': {
            exports: 'EventHandlerHelper'
        }
    }
});

require(['app', 'EHH'],function(app){
    app.init();
})