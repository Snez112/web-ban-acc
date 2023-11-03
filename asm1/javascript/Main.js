// function func1($scope){
//     $scope.shoprepeat=[{
//         img:"img/shop/shop1.png",
//         SoTK:770,
//         DaBan:"25,256",
//     },
//     {
//         img:"img/shop/shop2.png",
//         SoTK:770,
//         DaBan:"25,256",
//     },
//     {
//         img:"img/shop/shop3.png",
//         SoTK:770,
//         DaBan:"25,256",
//     },
//     {
//         img:"img/shop/shop4.png",
//         SoTK:770,
//         DaBan:"25,256",
//     },
// ]
    
// }
// var app=angular.module("myapp",[]);
//     app.controller("shopController",func1);

function shopController($scope,$http,$routeParams,$route) {
    $scope.lstshopacc=[];
    $http.get("http://localhost:3000/shopacc").then(function(response){
        $scope.lstshopacc=response.data;
    })
    $scope.lstinfoacc=[];
    $http.get("http://localhost:3000/info-acc").then(function(response){
        $scope.lstinfoacc=response.data;
       
    });
    $scope.lstQLacc=[];
    $http.get(" http://localhost:3000/info-acc").then(function(response){
        $scope.lstQLacc=response.data;
    })  
    $scope.add=function(){
       
        $http.post(" http://localhost:3000/info-acc",{
            id:$scope.id,
            tk:$scope.tk,
            pass:$scope.pass,
            Ar:$scope.Ar,
            Location:$scope.Location,
            
            gia:$scope.gia,
            description:$scope.description,
        }).then(function(response){
            if(response.status===201){
                $route.reload();
                alert("thêm thành công");
                
            }
        });
    }
    $scope.update=function(){
        $http.put(" http://localhost:3000/info-acc/"+$scope.id,{
            id:$scope.id,
            tk:$scope.tk,
            pass:$scope.pass,
            Ar:$scope.Ar,
            Location:$scope.Location.value,
            gia:$scope.gia,
            description:$scope.description,
        }).then(function(response){
            if(response.status===201){
                alert("sửa thành công");
                $route.reload();
            }
        })
    }
    $scope.detail=function(id){
        $http.get(" http://localhost:3000/info-acc/"+id,).then(function(response){
            $scope.id=response.data.id,
            $scope.tk=response.data.tk,
            $scope.pass=response.data.pass,
            $scope.Ar=response.data.Ar,
            $scope.Location=response.data.Location,
            $scope.gia=response.data.gia,
            $scope.description=response.data.description
            

        })
    }
    $scope.accsell=[];
    $scope.getaccbyid=[];
    $http.get("http://localhost:3000/history").then (function(response){
        $scope.accsell=response.data
    });
   $scope.buy=function(){
    var iD=$routeParams.id;
    
    $http.get(" http://localhost:3000/info-acc/"+iD,).then(function(response){
        $scope.getaccbyid=response.data
        $http.post(" http://localhost:3000/history",$scope.getaccbyid).then(function(response){
       
            $http.delete(" http://localhost:3000/info-acc/"+iD).then(function(response){
                $route.reload();
            })
        
    });
    });
    
   };
    $scope.delete=function(id){
        $http.delete(" http://localhost:3000/info-acc/"+id).then(function(response){
            alert("đã xoá thành công");
            $route.reload();
        })
    }
var id=$routeParams.id;
if(id){
    $http.get("http://localhost:3000/info-acc/"+id).then(function(response){
        if(response.status===200){
            $scope.id=response.data.id,
            $scope.Ar=response.data.Ar,
            $scope.Location=response.data.Location,
            $scope.gia=response.data.gia,
            $scope.description=response.data.description
        }
    })
}
}
