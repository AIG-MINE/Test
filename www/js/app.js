var patcoApp = angular.module('patcoApp', ['ngMaterial','ui.router','patco.configurationService','appController','duScroll','patco.filter','ngMessages','mdCollectionPagination','patco.ngMeta'])

patcoApp.config(function($stateProvider, $urlRouterProvider,$urlMatcherFactoryProvider, $locationProvider, $mdThemingProvider, $compileProvider ,$httpProvider,meta){

  $urlMatcherFactoryProvider.caseInsensitive(true);

  $compileProvider.debugInfoEnabled(false);
  
  $urlMatcherFactoryProvider.strictMode(false);

  $stateProvider
    .state('home', {
      url: "/",      
      templateUrl: "templates/home.html",
      params: {
        section: null,
      },
      controller : function($scope, $stateParams){
        if($stateParams.section){
          
          var container = angular.element(document.getElementById('container'));

          var scrollElement = angular.element(document.getElementById($stateParams.section));
          
          container.scrollTo(scrollElement, 0, 2000);
        }
      }
    })

    .state('about-us', {
    	url: "/about-us",
    	templateUrl: "templates/about-us.html"
    })

    .state('contact-us', {
      url: "/contact-us",
      templateUrl: "templates/contact-us.html"
    })

    .state('product', {
      url: "/product",
      templateUrl: "templates/product.html",
      controller: "productController"
    })

  .state('products', {
    url: "/products?category&model",
    templateUrl: "templates/products.html",
    controller: "productsController"
  })
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');

  $httpProvider.defaults.useXDomain = true;

  $httpProvider.defaults.cache = false;

  // use the HTML5 History API
  /*$locationProvider.html5Mode(true);*/

});