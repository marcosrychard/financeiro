(function () {
    angular
        .module('tituloModule')
        .factory('tituloFactory', tituloFactory);

    tituloFactory.$inject = ['$http', '$q'];

    function tituloFactory($http, $q) {

        const serverUrl = 'api/titulo/';

        function findById(id) {

            let deferred = $q.defer();
            $http.get(serverUrl + id).then((success) => {
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

        return tituloFactory = {
            findById: findById,
            findAll: findAll,
            save: save
        }
    }
})();