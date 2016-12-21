var Binder = (function(){

    function Binder(){
        Binder.prototype.bindTo = function(dataSourceObj, dataSourceProperty, dataTargetObj, dataTargetProperty){
            Object.defineProperty(dataSourceObj,dataSourceProperty,{
                get: function(){return dataTargetObj[dataTargetProperty];},
                set: function(newValue){
                    dataTargetObj[dataTargetProperty] = newValue;
                }
            });
        };
    };

}());