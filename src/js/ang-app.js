'use strict';

/* App Module */

	var app = angular.module('app', [
		'ngRoute',
		'routeStyles',
		'appCtrl',
		'route-segment', 
		'view-segment'
		]);

	app.config(['$routeSegmentProvider',
		function($routeSegmentProvider) {
			$routeSegmentProvider.
			 when('/', {
				templateUrl: '/views/main.html',
				css:'/css/main.css'
			}).	
			 when('/electronics', {
				templateUrl: '/views/sub-category-list.html',
				css:'/css/sub-category-list.css'
			}).	
			 when('/electronics/:currentSubCategory', {
				templateUrl: '/views/catalog.html',
				css:'/css/catalog.css'
			}).
			 when('/login', {
				templateUrl: '/views/login.html',
				css:'/css/login.css'
			}).	
			 when('/registration', {
				templateUrl: '/views/registration.html',
				css:'/css/registration.css'
			}).				 
			//  when('/catalog', {
			// 	templateUrl: '/views/catalog.html',
			// 	css:'/css/catalog.css'
			// }).
			 when('/contacts', {
				templateUrl: '/views/contacts.html',
				css:'/css/contacts.css'
			}).
			 when('/cart', {
				templateUrl: '/views/cart.html',
				css:'/css/cart.css'
			}).			 
			 otherwise({
			  	redirectTo: '/'
			});
	}]);

	