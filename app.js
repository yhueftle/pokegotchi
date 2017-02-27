
var app = angular.module("myApp", ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider){
	
	$stateProvider
		.state('createNew', {
			url: '/createNew',
			templateUrl: 'templates/createNew.html'
		})
		.state('home', {
			url: '/home',
			templateUrl: 'templates/home.html'
		})
		.state('feed', {
			url: 'feeding',
			templateUrl: 'templates/feeding.html'
		})
		.state('play', {
			url: 'play',
			templateUrl: 'templates/play.html'
		})
		.state('train', {
			url: 'train',
			templateUrl: 'templates/train.html'
		})
		.state('fight', {
			url: 'fight',
			templateUrl: 'templates/fight.html'
		});
	$urlRouterProvider.otherwise('/');
});

