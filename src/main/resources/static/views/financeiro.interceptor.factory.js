
(function () {
    angular
        .module('appFinanceiro')
        .factory('interceptorFactory', interceptorFactory);



    /** @ngInject */
    function interceptorFactory($q, $rootScope) {
        let vm = this;

        vm.interceptorFactory = {};
        vm.loadingCount = 0;

        function _request(config) {
            config.headers = config.headers || {};

            if (!config.ignoreLoading) {
                vm.loadingCount++;
                $rootScope.$broadcast('loading:progress');
            }
            return config;
        }

        function _response(response) {
            if (!response.config.ignoreLoading) {
                vm.loadingCount--;
                if (vm.loadingCount === 0) {
                    $rootScope.$broadcast('loading:finish');
                }
            }

            // Might be needed later
            // if(typeof(response.data) === "string" && response.data.indexOf('loginForm')!=-1){
            //     window.location.pathname = '/logout';
            // }

            return response || $q.when(response);
        }

        function _responseError(rejection) {
            if (!rejection.config.ignoreLoading) {
                vm.loadingCount--;
                if (vm.loadingCount === 0) {
                    $rootScope.$broadcast('loading:finish');
                }
            }
            return $q.reject(rejection);
        }

        vm.interceptorFactory.request = _request;
        vm.interceptorFactory.response = _response;
        vm.interceptorFactory.responseError = _responseError;

        return vm.interceptorFactory;
    }
})();
