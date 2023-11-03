
var app=angular.module("app",[]);
app.controller("forgotController",['$scope','$http',function($scope,$http){
    $scope.lstinfoacc=[];
    let url="https://gmail.googleapis.com";
    $http.get(url).then(function(response){
        var data=response.data
        console.log(data);
        
    })
}]);