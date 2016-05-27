angular.module('starter.controllers', [])
.controller("touchIDController", function($scope, $ionicPlatform, $cordovaTouchID) {
 
    $ionicPlatform.ready(function() {
        $cordovaTouchID.checkSupport().then(function() {
            $cordovaTouchID.authenticate("You must authenticate").then(function() {
                alert("The authentication was successful");
            }, function(error) {
                console.log(JSON.stringify(error));
            });
        }, function(error) {
            console.log(JSON.stringify(error));
        });
    });
 
})