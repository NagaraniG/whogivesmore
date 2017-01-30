(function(){
  'use strict';
  angular.module('WhoGivesMoreApp').controller('CompetitionController',CompetitionController)
   CompetitionController.$inject=['$rootScope','$scope', '$http','AuthService', 
    '$location', '$resource']
     function CompetitionController($rootScope,$scope, $http, AuthService,$location, $resource){

console.log("wwew");

     var api=window.localStorage.getItem("CONTACT_AUTH_TOKEN")

    console.log(api)




    $scope.createCompetition=function(){

      $http.post('/competitions.json?auth_token='+api,{'name':$scope.competition_name,'end_date':
    $scope.end_date,'ranking_type':$scope.ranking_type,'no_end_date':
    $scope.no_end_date}).then(function(response){
        console.log("competition response")
        console.log(response.data)
        $location.path('/donate')

      })

    }

    $scope.createTeam=function(){

      $http.post('/teams.json?auth_token='+api,{'name':$scope.team_name,'description':$scope.team_description}).then(function(response){
        console.log("team response")
        console.log(response.data)
        $location.path('/donate')
      })

    }



     }
   })()