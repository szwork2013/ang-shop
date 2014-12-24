// использую один шаблон каталога, просто для каждой категории создаю свой контроллер, у которого в нутри
// переопределются переменные productsInfo на более конкретные
var appCtrl = angular.module('appCtrl', []);

appCtrl.controller('detailCtrl', ['$scope','$http','$routeParams',
  function($scope,$http,$routeParams) {        
        $scope.carts = [];
        //запрос списка глабальных категорий товаров
         $http.get('/api/getCategorysList')
            .success(function(data) {
                $scope.categorysInfo = data;               
            })
                .error(function(data) {
                 console.log('Error: ' + data);
            });  

        //запрос списка субкатегорий товаров
        $scope.getSubCategoryList = function (category) {
                // console.log($routeParams);
            $scope.currentCategory = category;
         $http.get('/api/getSubCategoryList' + '?' + 'category' + '=' + category)
            .success(function(data) {
                $scope.subCategoryList = data;               
            })
                .error(function(data) {
                 console.log('Error: ' + data);
            });     
        };


        //запрос списка товаров конкретной субкатегории
        $scope.getProductsInfo = function (subCategory,category) {         
            // $scope.currentSubCategory = $routeParams;
            // console.log($scope.currentSubCategory);

         $http.get('/api/getProductsInfo' + '?' + 'category' + '=' + category +'&' + 'subCategory' + '=' + subCategory)
            .success(function(data) {
                $scope.productsInfo = data;        
                // console.log(data);       
            })
                .error(function(data) {
                 console.log('Error: ' + data);
            });     
        };

/////////////////////........медоты корзины........////////////////////////
        $scope.addItem = function (id,imgUrl, cost, quantity) {
            $scope.carts.push({
                id : id,
                imgUrl : imgUrl,
                cost : cost,
                quantity : quantity
            });
            $scope.class = "selected";
        };
        $scope.removeItem = function (index) {            
            $scope.carts.splice(index, 1);
        };

        $scope.total = function() {
            var total = 0;
            angular.forEach($scope.carts, function(cart) {
                total += cart.quantity * cart.cost;
            });
            return total
        };
        $scope.summary = function(a,b) {
            return  a * b;
        };        

        $scope.view = "list-view";

        $scope.changeView = function(){
          if ($scope.view === "list-view")
            $scope.view = "grid-view";
          else
            $scope.view = "list-view";
        };
    }]);
