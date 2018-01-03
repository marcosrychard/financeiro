(function () {

    angular
        .module('relatorioModule')
        .controller('entidadeCtrlRelatorio', entidadeCtrlRelatorio);

    entidadeCtrlRelatorio.$inject = ['entidadeFactory', '$location'];

    function entidadeCtrlRelatorio(entidadeFactory, $location) {

        // - declarations;
        // --------------------------------
        let vm = this;
        vm.entidade = {};
        vm.entidades = [];
        vm.statusList = [
            {name: 'Todos', value: ''},
            {name: 'Ativo', value: true},
            {name: 'Inativo', value: false}
        ];
        vm.entidade.status = vm.statusList[0].value;
        // - functions;
        // --------------------------------

        (function findAllEntidade() {
            entidadeFactory.findAll().then((success) => {
                vm.entidades = success.data;
            }, (err) => {
                console.log("Erro" + err.message)
            })
        })();

    }
})();
