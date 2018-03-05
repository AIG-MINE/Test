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

var appControllers = angular.module('appController', []);

appControllers.run(function ($rootScope, $state, $location) {
    
    $rootScope.$state = $state;

    $rootScope.$location = $location;

    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){  
    });
    $rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams){  
    });
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    console.log('error : ' + error);
    });
});

appControllers.controller('appController', function($scope,$mdSidenav,meta,$location){

  $scope.meta = meta

  $scope.toggleSidenav = function() {
    $mdSidenav('left').toggle();
  };

  $scope.closeSidenav = function() {
    $mdSidenav('left').close();
  };

  $scope.openMenu = function($mdOpenMenu, ev) {
    originatorEv = ev;
    $mdOpenMenu(ev);
  };

  /*$scope.usps = {
    "SETTING IMPORTANT GOALS" : {
      "title" : "SETTING IMPORTANT GOALS",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "image" : "../images/usp/usp1.png"
    },
    "TAKING PERSONAL RESPONSIBILITY" : {
      "title" : "TAKING PERSONAL RESPONSIBILITY",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "image" : "../images/usp/usp2.png"
    },
    "EMBRACING NEW TECHNOLOGY" : {
      "title" : "EMBRACING NEW TECHNOLOGY",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "image" : "../images/usp/usp3.png"
    },
    "WORKING HARD FOR SUCCESS" : {
      "title" : "WORKING HARD FOR SUCCESS",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "image" : "../images/usp/usp4.png"
    },
    "SEEKING CONTINUOUS IMPROVEMENT" : {
      "title" : "SEEKING CONTINUOUS IMPROVEMENT",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "image" : "../images/usp/usp5.png"
    },
    "TREATING PEOPLE FAIRLY" : {
      "title" : "TREATING PEOPLE FAIRLY",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "image" : "../images/usp/usp6.png"
    }
  };*/

  $scope.searchType = {
    "type1" : {
      "name" : "Trucks",
      "image" : "../images/types/p7.png",
      "url" : 'TRUCK'
    },
    "type2" : {
      "name" : "Tractor",
      "image" : "../images/types/p2.png",
      "url" : 'TRACTOR'
    },
    "type3" : {
      "name" : "Earth Mover",
      "image" : "../images/types/p3.png",
      "url" : 'EARTH MOVERS'
    },
    "type4" : {
      "name" : "Industrial",
      "image" : "../images/types/p4.png",
      "url" : 'INDUSTRIAL'
    },
    "type5" : {
      "name" : "Car",
      "image" : "../images/types/Banner1406100747_audi-a4.jpg",
      "url" : 'CAR'
    },
    "type6" : {
      "name" : "Buses",
      "image" : "../images/types/p1.png",
      "url" : 'BUS'
    }
  };

  /*$scope.manufacturingProcess = {
    "process1" : {
      "name" : "Centrifugal Casting",
      "image" : "../images/process/process.png",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "isSelected" : true
    },
    "process2" : {
      "name" : "Foundry/Melting",
      "image" : "../images/process/process.png",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
    },
    "process3" : {
      "name" : "Lathe Machining",
      "image" : "../images/process/process.png",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    "process4" : {
      "name" : "CNC Machining",
      "image" : "../images/process/process.png",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    "process5" : {
      "name" : "Grinding",
      "image" : "../images/process/process.png",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    "process6" : {
      "name" : "Honing",
      "image" : "../images/process/process.png",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    "process7" : {
      "name" : "Inspection",
      "image" : "../images/process/process.png",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    "process8" : {
      "name" : "Packing & Shipping",
      "image" : "../images/process/process.png",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  };*/

  /*$scope.newsEvents = {
    "news1" :{
      "title" : "news1",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "images" : "../images/news-events/n1.png"
    },
    "news2" :{
      "title" : "news2",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "images" : "../images/news-events/n2.png"
    },
    "news3" :{
      "title" : "news3",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "images" : "../images/news-events/n3.png"
    },
    "news4" :{
      "title" : "news4",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "images" : "../images/news-events/n4.png"
    }
  };*/

  /*$scope.patcoImages = [
    {
      "title" : "Mercedes",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "images" : "../images/gallery/1.jpg"
    },
    {
      "title" : "Ford",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "images" : "../images/gallery/1.jpg"
    },
    {
      "title" : "Toyota",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "images" : "../images/gallery/1.jpg"
    },
    {
      "title" : "Mazda",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "images" : "../images/gallery/1.jpg"
    },
    {
      "title" : "Nissan",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "images" : "../images/gallery/1.jpg"
    },
    {
      "title" : "Nissan",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "images" : "../images/gallery/1.jpg"
    },
    {
      "title" : "Ford",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "images" : "../images/gallery/1.jpg"
    },
     {
      "title" : "Mazda",
      "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "images" : "../images/gallery/1.jpg"
    }
  ];*/

  $scope.homeCarausels = {
    "carousel1" : {
      "title" : "LEADING MANUFACTURER OF CYLINDER LINERS",
      "description" : "Patco Liners Pvt. Ltd. is an ISO 9001:2015 certified leading manufacturer and exporter of Wet & Dry Cylinder Liners, Sleeves, Air & Water Cooled Blocks.",
      "image" : "../images/banner/1.jpg"
    },
    "carousel2" : {
      "title" : "PRESENT WORLDWIDE",
      "description" : "Our product also confirms to international quality standards because of no compromise approach in constantly upgradation of quality according to international market needs.",
      "image" : "../images/banner/2.jpg"
    },
    "carousel3" : {
      "title" : "ONE STOP SOLUTION FOR ENGINE PARTS",
      "description" : "We can also offer Parts like Cylinder Liners, Air Cooled Blocks, Water Cooled Blocks, Piston, Piston Rings, Connecting Road & Valve Train Components.",
      "image" : "../images/banner/3.jpg"
    },
    "carousel4" : {
      "title" : "QUALITY YOU DESERVE & DEPENDABILITY YOU CAN COUNT ON",
      "description" : "PATCO has always been able to maintain a very high standard of quality in exports and has acquired a formidable reputation worldwide.",
      "image" : "../images/banner/4.jpg"
    }
  };
});

appControllers.controller('swiperController', function($scope, $timeout) {
  $scope.swipe = function(){
    var swiper = new Swiper('.swiper-container', {    
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 'auto', 
        grabCursor: true,
        centeredSlides: true,       
        paginationClickable: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
    });
  }

  $timeout(function () { 
    $scope.swipe();    
  }, 1000);  
});

appControllers.controller('coverFlowController', function($scope, $timeout) {
  $scope.coverflow = function(){
    var swiper = new Swiper('.coverflow-container', {        
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1            
        }
    });
  }
  
    $timeout(function () {   
      $scope.coverflow();
    }, 1000);  
});

appControllers.controller('productsController', function($scope, $state, configurationService,$stateParams,$location,$mdDialog,$mdToast){  

  $scope.patcoCategory = [];
  var quote_part_no = '';
  $scope.form_obj = {
    email:'',
    quantity:'',
    description:''
  };  

  configurationService.getContent()
  .success(function(products) {
    $scope.products = products;

    angular.forEach($scope.products, function(products){
      angular.forEach(products.category, function(pcategory){
        if ($scope.patcoCategory.indexOf(pcategory) == -1) {
          $scope.patcoCategory.push(pcategory);
        }
      });
    });
    filterProducts();
  })
  .error(function (error) {
    $scope.error = 'Unable to get products detail: ' + error;
  });

  $scope.filterModel = function(products){
    var patcoModel = [];
     angular.forEach(products, function(item){
        if (patcoModel.indexOf(item.model) == -1) {
            angular.forEach(item.category,function(category){
              if(category == $stateParams.category){
                patcoModel.push(item.model);
              }
            });
          } 
      }); 
      return patcoModel;
  };
   
  var filterProducts = function(categories){
    var products = $scope.products;
    var filtered_products = [];
    $scope.filtered_products = [];
    angular.forEach(products, function(value,key){
      if(value.category){
        var result = false;
        var second_result = false;
        angular.forEach(value.category, function(category){
          if(category == $state.params.category){
            result = true;
            second_result = (!$state.params.model ? true : ($state.params.model == value.model ? true : false));
          }
        });

        if(result && second_result){
          var obj = {
            [key]: value
          };
          filtered_products.push( obj);
        }
      }
    });
    $scope.filtered_products = filtered_products;
  };


  $scope.openDialog = function(ev,part_no) {
    quote_part_no = '';
    quote_part_no = part_no;

    $mdDialog.show({
      controller: DialogController,
      templateUrl: '../templates/quote-form.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: true // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      // $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      // $scope.status = 'You cancelled the dialog.';
    });
  };

  function DialogController($scope, $mdDialog) {
    // $scope.hide = function() {
    //   $mdDialog.hide();
    // };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.submitQuote = function() {
      // var data = {
      //   "From": $scope.form_obj.email,
      //   "To": "Patco@patcoliners.com", //Please update to client email
      //   "TemplateId": 3573301,
      //   "TemplateModel": {
      //     "user_email": $scope.form_obj.email,
      //     "quantity": $scope.form_obj.quantity,
      //     "description": $scope.form_obj.description,
      //     "part_no" : quote_part_no
      //   }
      var data = {
        "From": $scope.form_obj.email,
        "quantity": $scope.form_obj.quantity,
        "description": $scope.form_obj.description,
        "part_no" : quote_part_no
      };

      configurationService.sendQuote(data)
      .success(function(response) {
        if(response){
          $mdDialog.hide();
          showSimpleToast('Quote submitted succesfully!');
          quote_part_no = '';          
        }
      })
      .error(function (error) {
        showSimpleToast('Something went wrong, please try again!');
      });
    };
  }

  function showSimpleToast(msg) {
    $mdToast.show(
      $mdToast.simple()
        .textContent(msg)
        .position('top right')
        .hideDelay(3000)
    );
  };
  // $scope.filterProducts = function(categories){
  //     console.log(categories);
  //     if(categories){
  //       var result = false;
  //       angular.forEach(categories, function(category){
  //         console.log($state.params);
  //         if(category == $state.params.category){
  //           result = true;
  //         }
  //       });
  //       console.log(categories);
  //       console.log(result);
  //       return result;
  //     }
  // };
});

appControllers.controller('productController', function($scope, $state, configurationService,$stateParams,$location){  

  $scope.patcoCategory = []

  configurationService.getContent()
  .success(function(products) {
    $scope.products = products;

    angular.forEach($scope.products, function(products){
      angular.forEach(products.category, function(pcategory){
        if ($scope.patcoCategory.indexOf(pcategory) == -1) {
          $scope.patcoCategory.push(pcategory);
        }
      });
    });
  })
  .error(function (error) {
    $scope.error = 'Unable to get products detail: ' + error;
  });

  $scope.filterModel = function(products){
    var patcoModel = [];
    angular.forEach(products, function(item){
      if (patcoModel.indexOf(item.model) == -1) {
          patcoModel.push(item.model);
        } 
    }); 
    return patcoModel;
  };
});

appControllers.controller('footerController', function($scope){
  $scope.followUs = [
    /*{
      "title" : "Patco Liners Twitter",
      "icon" : "images/icons/twitter-social-media.png"
    },*/
    {
      "title" : "Patco Liners Google Plus",
      "icon" : "images/icons/google-plus-social-media.png",
      "url" : "https://plus.google.com/+KaushalPatelpatacoliners"
    },
    {
      "title" : "Patco Liners Facebook",
      "icon" : "images/icons/facebook-social-media.png",
      "url" : "https://www.facebook.com/patcoliners/"
    },
    /*{
      "title" : "Patco Liners Instagram",
      "icon" : "images/icons/instagram-social-media.png"
    },*/
    {
      "title" : "91 95109 83323",
      "icon" : "images/icons/whatsapp-social-media.png"
    }
  ];
});

var filter = angular.module('patco.filter',[])

/**
 * Filters out all duplicate items from an array by checking the specified key
 * @param [key] {string} the name of the attribute of each object to compare for uniqueness
 if the key is empty, the entire object will be compared
 if the key === false then no filtering will be performed
 * @return {array}
 */
filter.filter('unique', function () {

  return function (items, filterOn) {

    if (filterOn === false) {
      return items;
    }

    if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
      var hashCheck = {}, newItems = [];

      var extractValueToCompare = function (item) {
        if (angular.isObject(item) && angular.isString(filterOn)) {
          return item[filterOn];
        } else {
          return item;
        }
      };

      angular.forEach(items, function (item) {
        var valueToCheck, isDuplicate = false;

        for (var i = 0; i < newItems.length; i++) {
          if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
            isDuplicate = true;
            break;
          }
        }
        if (!isDuplicate) {
          newItems.push(item);
        }

      });
      items = newItems;
    }
    return items;
  };
});

// here we define our unique filter
filter.filter('unique1', function() {
   // we will return a function which will take in a collection
   // and a keyname
   return function(collection, keyname) {
      // we define our output and keys array;
      var output = [], 
          keys = [];
      
      // we utilize angular's foreach function
      // this takes in our original collection and an iterator function
      angular.forEach(collection, function(item) {
          // we check to see whether our object exists
          var key = item[keyname];
          // if it's not already part of our keys array
          if(keys.indexOf(key) === -1) {
              // add it to our keys array
              keys.push(key); 
              // push this item to our final output array
              output.push(item);
          }
      });
      // return our array which should be devoid of
      // any duplicates
      return output;
   };
});


filter.filter('productFilter', function() {
  return function(items,paramsCategory) {
    var result = {};
    if(!paramsCategory) return null;
    angular.forEach(items, function(item,key) {
      if(item.category == paramsCategory)
      {
        result[key] = item.category;
        console.log(result[key]);
      }
    });
    console.log(result);
    return result;
  };
});

var configurationService = angular.module('patco.configurationService',[]);
    
configurationService.factory('configurationService', ['$http', function($http) {

    var patco = {
        'product' : null        
    };

    patco.getContent = function () {
        return $http({
            url: 'res/products.json',
            method: 'GET',
            headers: {'Accept': 'application/json'}
        });
    };

    patco.sendQuote = function (data) {
        return $http({
            url: 'contact-form.php',
            method: 'POST',
            data : data,
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json',
                // 'X-Postmark-Server-Token': '6f77d1b3-1596-44a4-bedb-68c8dbca4327',
                'Access-Control-Allow-Origin' : '*'
            }
        });
    };

    return patco;

}]);