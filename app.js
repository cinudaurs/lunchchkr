(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController',LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    
    
function LunchCheckController($scope)    {
    
      
    $scope.oky = false;
    
    var menuItems;
    var enteredStr;
    
    $scope.checkToomuch = function(){
        
        var isPristine = $scope.myForm.lunchmenu.$pristine;
        enteredStr = $scope.itemList;
        
        if(isPristine) {
            $scope.messageDisplay = "Please enter data first!";
        }
        
        
        
        if(enteredStr.trim().length == 0 || enteredStr.trim() == ''){
            
                $scope.oky = false;    
                $scope.messageDisplay = "Please enter data first!";
                
            
        }
        else{
            
            menuItems = $scope.itemList.split(',');
            
            if(menuItems.length > 0 && menuItems.length <= 3){
            
            $scope.oky = true;                        
            $scope.messageDisplay = "Enjoy!";
            
                
            }
            else{
            
            $scope.messageDisplay = "Too much!";
            
        }
            
            
            
        }
    
        
        
    }
}
    

})();
