(function () {

    angular
        .module('tituloModule')
        .controller('tituloCtrlForm', tituloCtrlForm);

    tituloCtrlForm.$inject = ['tituloFactory', '$location', 'entidadeFactory', 'Flash'];

    function tituloCtrlForm(tituloFactory, $location, entidadeFactory, Flash) {

        // - declarations;
        // --------------------------------

        let vm = this;

        vm.saveTitulo = null;
        vm.tiposList = ['Entrada', 'Saida'];
        vm.tipoPagamentoList = ['Parcelado', 'Dinheiro', 'Cheque'];
        vm.situacaoList = ['Compensado', 'Cancelado', 'Pagamento não realizado'];
        vm.statusList = [{name: 'Ativo', value: true}, {name: 'Inativo', value: false}];

        // - functions;
        // --------------------------------

        function findByIdTitulo(id) {
            tituloFactory.findById(id).then((success) => {
                vm.titulo = success;
                vm.titulo.dataDeValidade = new Date(vm.titulo.dataDeValidade);
                vm.titulo.dataDeEmissao = new Date(vm.titulo.dataDeEmissao);
                vm.titulo.dataDoPagamento = new Date(vm.titulo.dataDoPagamento)
            }, (err) => {
                console.log("Error" + err);
                Flash.create('danger', 'Error ao buscar titulo', 4000, {container: 'titulo-list'});
            })
        }

        function findByNameEntidade() {
            entidadeFactory.findByNome(vm.titulo.entidade.nome).then((success) => {
                vm.titulo.entidade = vm.entidade = success;
            }, (err) => {
                console.log(err)
            })
        }

        function saveTitulo() {
            findByNameEntidade();
            tituloFactory.save(vm.titulo).then(() => {
                console.log(vm.titulo);
                $location.path('/titulo/list');
                Flash.create('success', 'Titulo salvo com sucesso', 4000, {container: 'titulo-list'});
            }, (err) => {

                console.log("Error ao salvar" + err)
            })
        }

        function findAllEntidade() {
            entidadeFactory.findAll().then((success) => {
                let temp = success.data;
                vm.entidades = temp.map(function (item) {
                    return item.nome;
                })
            }, (err) => {
                console.log("Erro" + err.message)
            })
        }

        // - view functions;
        // --------------------------------

        vm.saveTitulo = saveTitulo;

        vm.$onInit = function () {

            findAllEntidade();

            // - get action;
            let paths = $location.path().split('/');
            let action = undefined;
            if (paths.length > 0) {
                let aux = paths[paths.length - 1];
                if (aux !== 'new') {
                    if (!(aux )) {
                        $location.path('/titulo/list');
                        return;
                    }
                    action = aux;
                }
            }

            // - execute action;
            //--------------------------
            if (!!action) {

                findByIdTitulo(action);

            }
        }
    }
})();