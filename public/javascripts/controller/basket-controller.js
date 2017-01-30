(function(){
  'use strict';
  angular.module('WhoGivesMoreApp').controller('BasketController',
  	BasketController)

BasketController.$inject=['$rootScope','$scope', '$http','AuthService', 
    '$location', '$resource']
     function BasketController($rootScope,$scope, $http, AuthService,$location, $resource){

    
     var api=window.localStorage.getItem("CONTACT_AUTH_TOKEN")
     console.log(api)
     console.log($rootScope.email)
console.log("teamsselection")
console.log($rootScope.selection)

  $http.get('/baskets.json?auth_token='+api).then(function(response){
 $scope.recommended=response.data.data[0].basket
 console.log($scope.recommended.picture.avatar)
 $scope.baskets=response.data.data
$scope.avatars=[]
console.log($scope.baskets)
  for(var i=1; i<$scope.baskets.length;i++){
    $scope.avatars.push($scope.baskets[i].basket)

  }
console.log($scope.avatars)

  })

$scope.basketslist=[]
$scope.basketlist=[]

$scope.selectionrecommended=[]
$scope.selectionspecial=[]

   $scope.toggleSelect = function(chartieId) {
    $scope.basketlist.push(chartieId);

   
$scope.chooseChartie=function(){

 for(var k=0;k<($scope.basketlist).length;k++) {
 	console.log("jffdd")
    $scope.selectionrecommended.push($scope.basketlist[k]);
 
  }

console.log($scope.selectionrecommended)
var user_params={'email':$rootScope.email,'first_name':$rootScope.first_name,'basket_items':$scope.selectionrecommended};

$http.put('/users.json',{'user':user_params}).then(function (response) {
  console.log("baskets data")
console.log(response.data)
$location.path('/dash_board')



})


}
}
$scope.toggleSelection = function(chartieId) {
    $scope.basketslist.push(chartieId);

 $scope.chooseCharties=function(){

 for(var l=0;l<=($scope.basketslist).length;l++) {
    $scope.selectionspecial.push($scope.basketslist[l]);
 
  }
console.log($scope.selectionspecial)
console.log('$scope.selectionspecial')

var user_params={'email':$rootScope.email,'first_name':$rootScope.first_name,'basket_items':$scope.selectionspecial};

$http.put('/users.json',{'user':user_params}).then(function (response) {
  console.log("baskets data")
console.log(response.data)
$location.path('/dash_board')



})

 

}


}

}





})();
