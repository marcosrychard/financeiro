(function () {

    angular
        .module('relatorioModule')
        .component('tituloComponentRelatorio',
            {
                templateUrl: './views/modules/relatorios/titulo/titulo-relatorio.html',
                controller: 'tituloCtrlRelatorio'
            }
        );

})();