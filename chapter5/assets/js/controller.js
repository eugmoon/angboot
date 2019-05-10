angular.module('contactsMgr', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        controller: 'indexCtrl',
        templateUrl: 'assets/partials/index.html'
    })

    .when('/add-contact', {
        controller: 'addCtrl',
        templateUrl: 'assets/partials/add.html'
    })

    .when('contact/:id', {
        controller: 'contactCtrl',
        templateUrl: 'assets/partials/contact.html'
    })

    .otherwise({
        redirectTo: '/chapter5/'
    });

    $locationProvider.html5Mode(true);
})

.filter('truncate', function() {
    return function(input, limit) {
        return (input.length > limit) ? input.substr(0, limit) + '...' : input;
    };
})

.controller('indexCtrl', function($scope) {
})

.controller('addCtrl', function($scope) {
})

.controller('contactCtrl', function($scope, $routeParams) {
    console.log($routeParams);
});
