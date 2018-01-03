(function () {
    angular
        .module('financeiroConfig')
        .config(financeiroRouteConfig);

    financeiroRouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function financeiroRouteConfig($stateProvider, $urlRouterProvider, $locationProvider) {

        /*$locationProvider.html5Mode(true).hashPrefix('!');*/
        $locationProvider.hashPrefix('');
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    page: {
                        component: 'homeComponent'
                    },
                    nav: {
                        component: 'navComponent'
                    },
                    footer: {
                        component: 'footerComponent'
                    }
                }
            })
            .state('entidade', {
                url: '/entidade/list',
                views: {
                    page: {
                        component: 'entidadeComponentList'
                    },
                    nav: {
                        component: 'navComponent'
                    },
                    footer: {
                        component: 'footerComponent'
                    }
                }
            })
            .state('entidadeForm', {
                url: '/entidade/:id?',
                views: {
                    page: {
                        component: 'entidadeComponentFrom'
                    },
                    nav: {
                        component: 'navComponent'
                    },
                    footer: {
                        component: 'footerComponent'
                    }
                }
            })
            .state('titulo', {
                url: '/titulo/list',
                views: {
                    page: {
                        component: 'tituloComponentList'
                    },
                    nav: {
                        component: 'navComponent'
                    },
                    footer: {
                        component: 'footerComponent'
                    }
                }
            })
            .state('tituloForm', {
                url: '/titulo/:id?',
                views: {
                    page: {
                        component: 'tituloComponentFrom'
                    },
                    nav: {
                        component: 'navComponent'
                    },
                    footer: {
                        component: 'footerComponent'
                    }
                }
            })
            .state('relatorioTitulo', {
                url: '/relatorio/titulo',
                views: {
                    page: {
                        component: 'tituloComponentRelatorio'
                    },
                    nav: {
                        component: 'navComponent'
                    },
                    footer: {
                        component: 'footerComponent'
                    }
                }
            })
            .state('relatorioEntidade', {
                url: '/relatorio/entidade',
                views: {
                    page: {
                        component: 'entidadeComponentRelatorio'
                    },
                    nav: {
                        component: 'navComponent'
                    },
                    footer: {
                        component: 'footerComponent'
                    }
                }
            })
    }

})();