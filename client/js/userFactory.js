angular.module('appDepend')
    .factory('userFactory', function(){
        console.log('Initializing User Factory...');

        var factory = {};

        factory.users = [
            {firstName: 'John', lastName: 'Smith', favLanguage: 'javascript'},
            {firstName: 'Sally', lastName: 'Steller', favLanguage: 'Ruby'}
        ];

        factory.getUsers = function() {
            //console.log(factory.users);
            return factory.users;
        };

        factory.addUser = function(userFirstName, userLastName, favLang){
            //console.log("Factory: " + userFirstName, userLastName, favLang);
            var user = {firstName: userFirstName, lastName: userLastName, favLanguage: favLang};
            factory.users.push(user);
        };

        factory.deleteUser = function(index){
            factory.users.splice(index,1);
        };

        return factory;
    })
