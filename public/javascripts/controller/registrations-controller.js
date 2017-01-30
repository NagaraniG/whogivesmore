 (function(){
  'use strict';

  angular.module('WhoGivesMoreApp').controller('RegistrationController',RegistrationController)


    RegistrationController.$inject = ['$rootScope','$scope', '$http','AuthService', '$location','$resource'];
     function RegistrationController($rootScope,$scope, $http,AuthService ,$location,$resource){
    console.log(88888)
      $scope.signUp = function(){
    var user_params = { 'first_name': $scope.firstname,'last_name':$scope.lastname,'date':$scope.dob , 'email': $scope.email, 'password': $scope.password, 'password_confirmation': $scope.password_confirmation }

     $http.post('/users.json', { 'user': user_params }).then(function (response) {
       console.log(response.data.data);
        if(response.data.status == "success"){
            // AuthService.login($scope.email, $scope.password)
            $scope.signIn()
             
           
          } else if(response.data.status == "error"){
            window.alert("please enter the valid details")
          }
          else
           {
            console.log("Invalid details");
          }
        });
      
       
      }
      $scope.signIn=function(){
              $http.post('users/sign_in.json',{'user':{'email':$scope.email,'password':$scope.password}}).then(function(resp){
                console.log(121212)
                console.log(resp.data)
                $rootScope.email=resp.data.email
                $rootScope.first_name=resp.data.first_name
                $rootScope.last_name=resp.data.last_name
                 storeUserDetails(resp.data.auth_token);
                  $location.path('/join_team')
              })
              
             } 
             console.log("email") 
             console.log($rootScope.email)
      function storeUserDetails(auth_token) {
      var CONTACT_AUTH_TOKEN;
      $http.defaults.headers.common['auth_token'] = auth_token;
      window.localStorage.setItem('CONTACT_AUTH_TOKEN', auth_token);

    }

    $scope.logIn=function(){
      $location.path('/login')
    }
    }
  
})();
