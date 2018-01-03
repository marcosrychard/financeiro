(function () {
    angular
        .module('entidadeModule')
        .factory('entidadeFactory', entidadeFactory);

    entidadeFactory.$inject = ['$http', '$q'];

    function entidadeFactory($http, $q) {


        const serverUrl = 'api/entidade/';

        function findById(id) {

            let deferred = $q.defer();
            $http.get(serverUrl + id).then((success) => {
                deferred.resolve(success.data)
            }, (err) => {
                deferred.reject(err)
            });

            return deferred.promise;

        }

        function findByNome(nome) {

            let deferred = $q.defer();
            $http.get(serverUrl + 'nome/' + nome).then((success) => {
                deferred.resolve(success.data)
            }, (err) => {
                deferred.reject(err)
            });

            return deferred.promise;

        }

        function findAll() {

            let deferred = $q.defer();
            $http.get(serverUrl).then((success) => {
                deferred.resolve(success)
            }, (err) => {
                deferred.reject(err)
            });

            return deferred.promise;
        }

        function save(obj) {

            let deferred = $q.defer();
            $http.post(serverUrl, obj).then((success) => {
                deferred.resolve(success.data)
            }, (err) => {
                deferred.reject(err)
            });

            return deferred.promise;
        }


        return entidadeFactory = {
            findById: findById,
            findAll: findAll,
            save: save,
            findByNome: findByNome
        }
    }
})();