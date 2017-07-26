'use strict';

angular.module('myApp.contact', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/contact', {
            templateUrl: 'contact/contact.html',
            controller: 'ContactCtrl'
        });
    }])

    .controller('ContactCtrl', [function () {
        $(document).ready(function () {
            var place = {lat: 35.9940, lng: -78.8986};
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 11,
                center: place
            });
            var marker = new google.maps.Marker({
                position: place,
                map: map
            });
        });
    }]);