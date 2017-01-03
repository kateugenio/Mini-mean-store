var App = angular.module('StoreModule', ['ngRoute']);

App.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: '/partials/_index.html',
      controller: 'IndexController'
    })
    .when('/products', {
      templateUrl: '/partials/_product.html',
      controller: 'ProductController'
    })
    .when('/customers', {
      templateUrl: '/partials/_customer.html',
      controller: 'CustomerController'
    })
    .when('/orders', {
      templateUrl: '/partials/_order.html',
      controller: 'OrderController'
    })
    .otherwise('/');
    $locationProvider.html5Mode(false);
})
