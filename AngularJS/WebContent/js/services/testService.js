//app variable is inherited from the files which were ordered before this file
app.service("testService", function(){
	this.testFunc = function(a){
		return a + a;
	};	
});