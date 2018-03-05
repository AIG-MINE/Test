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
            method  : 'POST',
            url     : 'contact-form.php',
            data    : $.param(data),  //param method from jQuery
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
    };

    return patco;

}]);