angular.module('appDepend')
    .controller('UserListCtrl', function($scope, userFactory){
        console.log('Initializing User List Controller');

        $scope.getUsers = function(){
            $scope.users = userFactory.getUsers();
            console.log($scope.users);
            return $scope.users;
        };

    })
