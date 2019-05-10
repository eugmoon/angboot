angular.module('contactsMgr', ['ngRoute'])

.config(function($routeProvider) {
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
        redirectTo: '/chapter4/'
    });

    //$locationProvider.html5Mode(true);
})

.filter('truncate', function() {
    return function(input, limit) {
        return (input.length > limit) ? input.substr(0, limit) + '...' : input;
    };
})

.controller('AppCtrl', function($scope, jsonFilter) {
    $scope.contacts = [
        {
            name: 'John Doe',
            phone: '01234567890',
            email: 'john@example.com'
        },
        {
            name: 'Karan Bromwich',
            phone: '0987654321',
            email: 'karan@email.com'
        },
        {
            name: 'Declan Proud',
            phone: '2341234231',
            email: 'declan@email.com'
        },
        {
            name: 'Paul McKay',
            phone: '912345678',
            email: 'p.mckay@domain.com'
        }
    ];

    console.log(jsonFilter($scope.contacts));
})

.controller('indexCtrl', function($scope) {
})

.controller('addCtrl', function($scope) {
})

.controller('contactCtrl', function($scope, $routeParams) {
    console.log($routeParams);
});
