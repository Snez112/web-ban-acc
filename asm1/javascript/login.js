var app=angular.module("app",["ngRoute"])
app.controller("loginController",function($scope,$http,$location,$routeParams){
    data=[]
    
    $scope.login=function(){
        
        var username=$scope.username
       
        var password=$scope.password
        
        $http.get(" http://localhost:3000/user",{

            // username:username,
           
            // password:password,

        }).then(function(response){
            var data=response.data
            for(var i=0;i<data.length;i++){
                var dataUser=data[i].username
                var dataPassword=data[i].password
                if(username==dataUser && password==dataPassword){

                   
                    alert("login successful")
                    
                    
                }
                
                    
            
        }
        }
        
        )
    }

});
