import UsersCtrl from './UsersCtrl'
import angular from 'angular'

(function () {
    const module = angular.module('angularApp')

    module.directive('users', () => {
        return {
            template: require('./users.html'),
            controller: 'UsersCtrl',
            controllerAs: 'users'
        }
    })

    module.controller('UsersCtrl', UsersCtrl)
})();