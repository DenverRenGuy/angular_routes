angular.module('appDepend')
    .controller('CustomizeUsersCtrl', function ($scope, userFactory){
        console.log('Initializing CustomizeUsers Controller');

        $scope.users = [];

        $scope.createUser = function() {
            //if(!$scope.firstName || !$scope.lastName || !$scope.favLanuage) return;
            console.log($scope.firstName, $scope.lastName, $scope.favLanguage);
            userFactory.addUser($scope.firstName, $scope.lastName, $scope.favLanguage);

            //Clear the Form
            $scope.firstName = '';
            $scope.lastName = '';
            $scope.favLanguage = '';
            $scope.getUsers();

        };

        $scope.getUsers = function(){
            $scope.users = userFactory.getUsers();
            console.log($scope.users);
            return $scope.users;
        };

});
