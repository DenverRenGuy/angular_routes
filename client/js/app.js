angular.module('app', ['appDepend', 'ngRoute'])
    .config(['$routeProvider', function($routeProvider){
        console.log('Running Angular Configuration')
        $routeProvider
            .when('/customizeUsers', {
                templateUrl: 'partials/_customizeUsers.html',
                controller: 'CustomizeUsersCtrl'
            })
            .when('/', {
                templateUrl: 'partials/_userList.html',
                controller: 'UserListCtrl'
            })
    }
]);
angular.module('appDepend', []);
