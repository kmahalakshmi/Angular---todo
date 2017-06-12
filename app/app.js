angular.module('mytodo', ['ngRoute'])

.config(['$locationProvider', '$routeProvider',function($locationProvider,$routeprovider) 
	{
		$locationProvider.hashPrefix('!');
		$routeprovider

    .when('/', {
        templateUrl: 'app/view/mainView.html',
        controller: 'homeController'
    })

    .otherwise({
            redirectTo: '/'
        
    })
}

]);
