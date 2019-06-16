import angular from 'angular'
import './users.scss'
import { fetchUsers } from './usersActions'
import { getUsers } from './usersSelectors'

(function () {
    const module = angular.module('angularApp')

    module.directive('users', ($ngRedux) => {
        $ngRedux.dispatch(fetchUsers())
        return {
            template: require('./users.html'),
            controller: 'UsersCtrl',
            controllerAs: 'users'
        }
    })

    module.controller('UsersCtrl', ($scope, $ngRedux) => {
        $scope.users = getUsers($ngRedux.getState())

        $scope.test = user => {
            console.error(user)
        }
    })
})();