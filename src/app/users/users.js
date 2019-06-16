import angular from 'angular'
import './users.scss'
import { fetchUsers, selectUser } from './usersActions'
import { getSelectedUser, getUsers } from './usersSelectors'
import { reduxChangeListener } from '../store/reduxListener'
import { react2angular } from 'react2angular'
import UserListRoot from '../roots/UserListRoot'

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

        $scope.isUserSelected = user => {
            const selectedUser = getSelectedUser($ngRedux.getState())
            return user && selectedUser && user.id === selectedUser.id
        }

        $ngRedux.subscribe(reduxChangeListener($ngRedux, (state) => getSelectedUser(state),
            (selectedUser) => {
                $scope.selectedUser = selectedUser
            }
        ))

        $scope.selectUser = user => {
            $ngRedux.dispatch(selectUser(user))
        }
    })

    module.component('userListRoot', react2angular(UserListRoot, [], []))
})();