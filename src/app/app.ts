import * as angular from 'angular'
import UsersCtrl from './users/UsersCtrl'

import '../styles/reset.css'
import './app.scss'

const module = angular.module('angularApp', [])

module.directive('users', () => {
    return {
        template: require('./users/users.html'),
        controller: 'UsersCtrl',
        controllerAs: 'users'
    }
})

module.controller('UsersCtrl', UsersCtrl)

// Set up React component as Angular's component using react2angular.
// module.component('usersList', react2angular(UsersList, [], ['$http']))
