'use strict';
namespace App {
  angular.module('app', ['ngRoute', 'ngResource', 'ui.bootstrap'])
  .config((
    $routeProvider: ng.route.IRouteProvider,
    $locationProvider: ng.ILocationProvider,
    $httpProvider: ng.IHttpProvider) => {

    $routeProvider.when('/', {
      templateUrl: '/templates/Home.html',
      controller: app.Controllers.HomeController,
      controllerAs: 'vm'
    })
    .when('/register', {
        templateUrl: '/templates/register.html',
        controller: app.Controllers.UserController,
        controllerAs: 'vm'
    })
    .when('/login', {
        templateUrl: '/templates/login.html',
        controller: app.Controllers.UserController,
        controllerAs: 'vm'
    })
    .when('/ask', {
        templateUrl: '/templates/questionCreate.html',
        controller: app.Controllers.QuestionCreateController,
        controllerAs: 'vm'
    })
    .otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode(true);
    $httpProvider.interceptors.push('HTTPFactory');
  });
}
