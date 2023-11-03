var app=angular.module("myapp", ['ngRoute']);
app.controller("shopController",shopController)
app.config(function($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix("");
    $routeProvider
    .when("/home",{
        templateUrl: "main_menu.html",
        controller: "shopController"
    })
    .when("/about",{
        templateUrl: "Gioi-thieu.html",
})
    .when("/lst-acc-vip",{
    templateUrl: "lst-acc-vip.html",
    controller:"shopController"
})
    .when("/history",{
        templateUrl: "history.html",
        controller: "shopController"
    })
    .when("/acc_detail/:id",{
        templateUrl: "/acc-detail/detail_sp.html",
        controller:"shopController"

    })
    .when("/QLSP",{
        templateUrl: "QLsanpham.html",
        controller:"shopController"
    })
.otherwise({
    redirectTo: "/home",
})
})