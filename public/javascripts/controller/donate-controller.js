(function(){
  'use strict';
  angular.module('WhoGivesMoreApp').controller('DonateController',DonateController)
    DonateController.$inject=['$rootScope','$scope', '$http','AuthService', 
    '$location', '$resource']
     function DonateController($rootScope,$scope, $http, AuthService,$location, $resource){
console.log($rootScope.user_id)
 var api=window.localStorage.getItem("CONTACT_AUTH_TOKEN")

    console.log(api)

    $http.get('/teams.json?auth_token='+api).then(function(response){
       console.log(response.data.data[0].team)

        $scope.teams=[]
       
       for(var i=0;i<=(response.data.data).length;i++){
         
         $scope.teams.push(response.data.data[i])
      }
console.log($scope.teams)

    })
  
  $scope.donate=function(){
    var donate_params={'firstname_on_card':$scope.firstname_on_card,'lastname_on_card':$scope.lastname_on_card,'card_number':$scope.card_number,'expiration_date':$scope.expiration_date,'cvv':$scope.cvv,
    'billing_address':$scope.billing_address,'amount':$scope.amount,'user_id':$rootScope.user_id,'team_id':$scope.team_id}
  
$http.post('/donations.json?auth_token='+api,donate_params).then(function(response){
  console.log(response.data)
  if(response.data.status=="ok"){
    $location.path("/thankyou")

  }
  else if(response.data.status=="error"){
   window.alert("please enter the valid details!")

  }
  else{
    window.alert("please check ur details and enter valid details")
  }



})
}

$scope.showcase=function(){
  $location.path('/showcase')
}
$scope.dashboard=function(){
  $location.path('/dash_board')
}


    $scope.logout = function()
    {
      AuthService.logout();
    }
}
     
   })();