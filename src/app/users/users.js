import angular from 'angular'
import './users.scss'
import { fetchUsers, selectUser } from './usersActions'
import { getSelectedUserId, getUsers } from './usersSelectors'

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

        $scope.isUserSelected = user => user && user.id === getSelectedUserId($ngRedux.getState())

        $scope.selectUser = user => {
            $ngRedux.dispatch(selectUser(user))
        }
    })
})();