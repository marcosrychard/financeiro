(function () {

    angular
        .module('entidadeModule')
        .controller('entidadeCtrlList', entidadeCtrlList);

    entidadeCtrlList.$inject = ['entidadeFactory', '$location'];

    function entidadeCtrlList(entidadeFactory, $location) {

        // - declarations;
        // --------------------------------
        let vm = this;
        vm.entidade = {}
        vm.entidades = [];
        vm.statusList = [
            {name: 'Todos', value: ''},
            {name: 'Ativo', value: true},
            {name: 'Inativo', value: false}
        ];
        vm.entidade.status = vm.statusList[0].value;
        // - functions;
        // --------------------------------
        function updateEntidade(entidade) {
            $location.path('/entidade/' + entidade.codigo)
        }

        function createEntidade() {
            $location.path('/entidade/new')
        }

        (function findAllEntidade() {
            entidadeFactory.findAll().then((success) => {
                vm.entidades = success.data;
            }, (err) => {
                console.log("Erro" + err.message)
            })
        })();


        // - view functions;
        // --------------------------------
        vm.updateEntidade = updateEntidade;
        vm.createEntidade = createEntidade;

    }
})();
