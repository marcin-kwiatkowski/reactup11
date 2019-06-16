const module = angular.module('angularApp')

module.provider('reducers', function () {
    const reducers = {}

    this.register = function (key, reducer) {
        reducers[key] = reducer
    }

    this.$get = function () {
        return reducers
    }
})
