var myapp = angular.module('myapp', ['ui.router', 'templates', 'ngResource']);

myapp.config(['$stateProvider', '$urlRouterProvider', '$resourceProvider',
    function ($stateProvider, $urlRouterProvider, $resourceProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'home/_home.html',
                controller: 'MainCtrl',
                resolve: {
                    postPromise: ['posts', function(posts){
                        return posts.getAll();
                    }]
                }
            })
            .state('posts', {
                url: '/posts/{id}',
                templateUrl: 'posts/_posts.html',
                controller: 'PostCtrl',
                resolve: {
                    postPromise: ['$stateParams', 'posts', function ($stateParams, posts) {
                        return posts.get($stateParams.id);
                    }]
                }
            });

        $urlRouterProvider.otherwise('home');
        //$resourceProvider.defaults.stripTrailingSlashes = false;
    }]);
