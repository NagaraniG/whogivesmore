(function(){
  'use strict';
  angular.module('WhoGivesMoreApp').controller('TeamController',TeamController)
    TeamController.$inject=['$rootScope','$scope', '$http','AuthService', 
    '$location', '$resource']
     function TeamController($rootScope,$scope, $http, AuthService,$location, $resource){

    console.log("wwew");

     var api=window.localStorage.getItem("CONTACT_AUTH_TOKEN")

    console.log(api)


 
    $http.get('/teams.json?auth_token='+api).then(function(response){
      // console.log(response.data.data.team)
      
      $scope.teams=response.data.data
      console.log($scope.teams)
      $scope.avatars1 = []
    
     $scope.avatars2 = []
    
      $scope.avatars3 = []
     
      $scope.avatars4 = []
      $scope.avatars5 = []
     
      console.log($scope.teams[0].team.competitions)
      for(var i=0; i<$scope.teams.length;i++){
        $scope.competitions=$scope.teams[i].team.competitions;           
        for (var j =0;j<$scope.competitions.length;j++) {

          $scope.com=$scope.competitions[j].name;

          if($scope.com=="religion"){
              $scope.avatars1.push($scope.teams[i].team) ;
                
            }
            else if($scope.com=="country")
            {
              $scope.avatars2.push($scope.teams[i].team) ;
                
            }
            else if($scope.com=="state")
            {
              $scope.avatars3.push($scope.teams[i].team) ;
               
            }
            else if($scope.com=="politics")
            {
              $scope.avatars4.push($scope.teams[i].team) ;
               
            }
            else {
              $scope.avatars5.push($scope.teams[i].team) ;
               
            }

          } 
         
        }
       

        console.log($scope.pictures)
         console.log($scope.teamname1)
      // console.log($scope.avatars1)
// console.log($scope.avatars)






      // console.log($scope.teams)
      // console.log($scope.teams[0].team.pictures[0].avatar)
      console.log($scope.teams[0].team.name)
    })

    console.log("email")
console.log($rootScope.email)

$scope.selection=[];
$scope.teamslist=[];
  // toggle selection for a given employee by name
  $scope.toggleSelection = function(teamName) {
    $scope.teamslist.push(teamName);

   

 $scope.joinTeam=function(){

 for(var k=0;k<($scope.teamslist).length;k++) {
    $scope.selection.push($scope.teamslist[k]);
 
  }
console.log($scope.selection)
console.log('$scope.selection')

var user_params={'email':$rootScope.email,'first_name':$rootScope.first_name,'team_items':$scope.selection};

$http.put('/users.json',{'user':user_params}).then(function (response) {
  console.log("response")
console.log(response.data)

$location.path('/choose_charties')


})

 

}


}

$scope.logout = function()
    {
      AuthService.logout();
    }
   };

  







})();