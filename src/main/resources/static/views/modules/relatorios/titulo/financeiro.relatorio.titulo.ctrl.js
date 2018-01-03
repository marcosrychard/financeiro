(function () {

    angular
        .module('relatorioModule')
        .controller('tituloCtrlRelatorio', tituloCtrlRelatorio);

    tituloCtrlRelatorio.$inject = ['tituloFactory', '$location', 'entidadeFactory'];

    function tituloCtrlRelatorio(tituloFactory, $location, entidadeFactory) {


        // - declarations;
        // --------------------------------
        let vm = this;
        vm.titulos = [];
        vm.titulo = {};
        vm.statusList = [
            {name: 'Todos', value: ''},
            {name: 'Ativo', value: true},
            {name: 'Inativo', value: false}
        ];
        vm.tipoPagamentoList = [
            {name: 'Todos', value: ''},
            {name: 'Parcelado', value: 'Parcelado'},
            {name: 'Dinheiro', value: 'Dinheiro'},
            {name: 'Cheque', value: 'Cheque'}
        ];
        vm.titulo.status = vm.statusList[0].value;
        vm.titulo.tipoPagamento = vm.tipoPagamentoList[0].value;


        vm.printToCart = function (tableTitulo) {
            let innerContents = document.getElementById(tableTitulo).innerHTML;
            let popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
            popupWinindow.document.open();
            popupWinindow.document.write(
                '<html>' +
                '<head>' +
                '<link rel="stylesheet" type="text/css" href="../../../../build/css/bootstrap.css" />' +
                '<link rel="stylesheet" type="text/css" href="../../../../build/css/custom.css" />' +
                '</head>' +
                '<body onload="window.print()">' + innerContents + '</body>' +
                '</html>');
            popupWinindow.document.close();
        };

        // - functions;
        // --------------------------------
        function findAllTitulos() {
            tituloFactory.findAll().then((success) => {
                    vm.titulos = success.data;
                },
                (err) => {
                    console.log("Erro" + err.message)
                }
            )
        }

        function findAllEntidades() {
            entidadeFactory.findAll().then((success) => {
                    let temp = success.data;
                    vm.nomesEntidade = temp.map(function (item) {
                        return item.nome;
                    })
                },
                (err) => {
                    console.log("Erro" + err.message)
                }
            )
        }

        vm.$onInit = function () {
            findAllTitulos();
            findAllEntidades();
        }

    }
})();