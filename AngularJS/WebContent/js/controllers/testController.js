/**
 * test controller
 */
var app = angular.module('myApp', ["ngRoute"]);

app.run(function($rootScope){
	$rootScope.color = "Green";
});

app.controller('myCtrl1', function($scope, $location, $http, $q, $interval, testService){
	$scope.color = "RED";
	
	$scope.usersList = [
		{name: "srinath", marks : 90},
		{name: "ram", marks : 45},
		{name: "shubha", marks : 89}
	];
	
	$scope.myURL = $location.absUrl();
	
	//sets the date
	$scope.currentDate = new Date().toLocaleTimeString();
	//updates date every second
	$interval(function(){
		$scope.currentDate = new Date().toLocaleTimeString();
	}, 1000);
	
	$scope.testFuncValue = testService.testFunc(10);
	
	$scope.selectedUser = "ram"; 
	
	$scope.selectedUser1 = {name: "shubha", marks : 89};
	
});

//filter to reverse CASE of every alternate character
app.filter("myCustomFilter", function() {
	return function(x) {
		var i, c, txt = "";
		for(i=0; i<x.length; i++){
			c = x[i];
			if(i%2 == 0){
				c = c.toUpperCase();
			}
			txt += c;
		}
		return txt;
	};
});

app.controller('myCtrl2', function($scope){
	$scope.firstNamePholder = "Enter your first name";
	$scope.lastNamePholder = "Enter your last name";
});

app.directive("myTestDirective", function(){
	return {
		restrict : "E",
		template : "<h2>My Test Directive loaded..!</h2>"
	};
});
/*
var secondApp = angular.module('mySecondApp', []);
secondApp.controller('mySecondCtrl', function($scope){
	$scope.secondAppVar = "Second NG App loaded successfully!";
});
*/
//need to manually load other angular applications
//angular.bootstrap(document.getElementById("mySecondAppId"), ['mySecondApp']);
/*
// NOT WORKING - Need to look at it
angular.element(document).ready(function () {
	angular.bootstrap(document.getElementById("mySecondAppId"), ['mySecondApp']);
});
*/
