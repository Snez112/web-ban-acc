var app=angular.module("app",[])
app.controller("regController",function($scope,$http){
    $scope.reg=function(){
        var name=$scope.name
        var username=$scope.username
        var sdt=$scope.sdt
        var email=$scope.email
        var password=$scope.password
        var check_pass=$scope.check_pass
        if($scope.myForm.$valid){
            if(check_pass!=password){
                alert("mật khẩu không khớp")
            }else{

                $http.post(" http://localhost:3000/user",{
                    id:$scope.id,
                    name:name,
                    username:username,
                    sdt:sdt,
                    email:email,
                    password:password,
                    check_pass:check_pass
                }).then(function(response){
                    
                  
                },function(error){
                    console.log("false!",error);
                },
                alert("Form hợp lệ")
                )
            }
        }else{
            alert("Kiểm tra lại thông tin");
        }
    }

});
