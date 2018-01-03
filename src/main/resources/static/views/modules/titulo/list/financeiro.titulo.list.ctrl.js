(function () {

    angular
        .module('tituloModule')
        .controller('tituloCtrlList', tituloCtrlList);

    tituloCtrlList.$inject = ['tituloFactory', '$location'];

    function tituloCtrlList(tituloFactory, $location) {


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
        vm.titulo.status = vm.statusList[0].value;
        // - functions;
        // --------------------------------
        function updateTitulo(titulos) {
            $location.path('/titulo/' + titulos.codigo)
        }

        function createTitulo() {
            $location.path('/titulo/new')
        }

        (function findAllTitulos() {
            tituloFactory.findAll().then((success) => {
                vm.titulos = success.data;
            }, (err) => {
                console.log("Erro" + err.message)
            })
        })();

        // - view functions;
        // --------------------------------
        vm.updateTitulo = updateTitulo;
        vm.createTitulo = createTitulo;

    }
})();