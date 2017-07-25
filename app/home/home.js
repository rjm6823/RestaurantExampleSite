'use strict';

angular.module('myApp.home', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])

    .controller('HomeCtrl', ['$scope', '$http', function ($scope, $http) {
         // Fetching data from JSON files
        $http.get('data/breakfast.json')
            .then(function (data) {
                $scope.breakfast = data.data.breakfastArray;
            });
        $http.get('data/lunch.json')
            .then(function (data) {
                $scope.lunch = data.data.lunchArray;
            });
        $http.get('data/dinner.json')
            .then(function (data) {
                $scope.dinner = data.data.dinnerArray;
            });
        $http.get('data/events.json')
            .then(function (data) {
                $scope.events = data.data.eventsArray;
            });
    }]);