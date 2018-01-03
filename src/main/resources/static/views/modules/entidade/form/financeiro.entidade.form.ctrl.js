(function () {

    angular
        .module('entidadeModule')
        .controller('entidadeCtrlForm', entidadeCtrlForm);

    entidadeCtrlForm.$inject = ['entidadeFactory', '$location', 'Flash'];

    function entidadeCtrlForm(entidadeFactory, $location, Flash) {


        // - declarations;
        // --------------------------------
        // var msg = $interpolate('{{ "" | translate }}');
        let vm = this;
        vm.entidade = {};
        vm.saveEntidade = null;


        vm.statusList = [
            {name: 'Ativo', value: true},
            {name: 'Inativo', value: false}
        ];

        // - functions;
        // --------------------------------

        function findByIdEntidade(id) {
            entidadeFactory.findById(id).then((success) => {
                vm.entidade = success;
            }, (err) => {
                console.log("Error" + err);
                Flash.create('danger', 'Error ao buscar entidade', 4000, {container: 'entidade-list'});
            })
        }

        function saveEntidade() {
            entidadeFactory.save(vm.entidade).then(() => {
                $location.path('/entidade/list');
                Flash.create('success', 'Entidade salvo com sucesso', 4000, {container: 'entidade-list'});
            }, (err) => {
                console.log("Error ao salvar" + err);
                Flash.create('danger', 'Error ao  salvar entidade', 4000, {container: 'entidade-list'});
            })
        }


        // - view functions;
        // --------------------------------

        vm.saveEntidade = saveEntidade;

        vm.$onInit = function () {

            // - get action;
            let paths = $location.path().split('/');
            let action = undefined;
            if (paths.length > 0) {
                let aux = paths[paths.length - 1];
                if (aux !== 'new') {
                    if (!(aux )) {
                        $location.path('/entidade/list');
                        return;
                    }
                    action = aux;
                }
            }

            // - execute action;
            //--------------------------
            if (!!action) {

                findByIdEntidade(action);

            }

        }
    }
})();
