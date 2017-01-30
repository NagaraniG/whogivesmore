 (function(){
  'use strict';

   angular.module('WhoGivesMoreApp').controller('LoginController',LoginController)



LoginController.$inject = ['$scope', '$http', 'AuthService', '$location', '$resource'];

function LoginController($scope, $http, AuthService,$location,$resource){

    console.log(111)

    $scope.signIn = function(){
        AuthService.login($scope.email, $scope.password);
      }

      $scope.signup=function(){
        $location.path('/signup')
      }




    // $scope.signIn = function(){
    //   var user_params = { 'email': $scope.email, 'password': $scope.password}

    //   $http.post('/users/sign_in.json', { 'user': user_params }).then(function (response) {
    //      console.log(response)
    //     if(response.data.status == "ok"){
    //        $location.path('/join_team')
    //      }
    //      else
    //       {
    //         console.log("Invalid details");
    //       }
    //       });
    //   }
    }

 })();