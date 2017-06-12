angular.module('mytodo')

.controller('homeController',['$scope','$filter',function($scope){
	
	$scope.todolist = [{text:"learn Angular",done:false},
					   {text:"Build an app",done:false}];
	$scope.totaltodos=function()
	{ 
		return $scope.todolist.length;
	};
	$scope.remaining = function()
	{
		var count=0;
		angular.forEach($scope.todolist,function(todo)
		{
			count+= todo.done? 0:1;
		})
		
		return count;
	};
	$scope.addlist = function()
	{
		$scope.todolist.push({text:$scope.newlist,done:false});
		$scope.newlist="";
	};
	$scope.cleardonelist =function()
	{
		$scope.existingone = $scope.todolist;
		$scope.todolist = [];

		angular.forEach($scope.existingone,function(todo)
		{
			if(!todo.done) 
				return $scope.todolist.push(todo);
		})
	};


}
]);