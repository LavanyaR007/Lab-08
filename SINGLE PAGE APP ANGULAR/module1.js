var app = angular.module("myMod",['ngRoute']);


app.config(["$routeProvider",function($routeProvider){
	
	$routeProvider.
	when("/profile",{
		templateUrl:'views/userprofile.html',
		controller:'userprofile_ctr'
	}).
	when("/orders",{
		templateUrl:'views/orders.html',
		controller:'orders_ctr'
	}).
	when("/comments",{
		templateUrl:'views/comments.html',
		controller:'comments_ctr'
	}).
	otherwise({
		redirectTo:'index.html'
	});
	
}]);


app.controller("userprofile_ctr",function($scope){
	
	$scope.userprofile = [
		{fname:'Lavanya',uname:'lyra1007',email:'lavusarj18@gmail.com',add:'Igglur',pno:'63632793751'},
	];
	
});

app.controller("orders_ctr",function($scope){
	
	$scope.orders = [
		{id:'PD001',name:'Keychain',quantity:'1',price:'200',status:'Shipping'},
		{id:'PD002',name:'Photo Frame',quantity:'1',price:'400',status:'Delivered'},
		{id:'PD003',name:'Dolls',quantity:'2',price:'600',status:'Refund Requested'},
		{id:'PD004',name:'LED Lamps',quantity:'1',price:'300',status:'New'},
		{id:'PD005',name:'Watch',quantity:'1',price:'500',status:'Shipping'},
	];
	
});

app.controller("comments_ctr",function($scope){
	
	$scope.comments = ["Very Nice","Fabulous","Not so good"];
	
});





