var Binder = (function(){

    function Binder(){
        Binder.prototype.bindTo = function(dataSourceObj, dataSourceProperty, dataTargetObj, dataTargetProperty){
            Object.defineProperty(dataSourceObj,dataSourceProperty,{
                get: function(){return dataTargetObj[dataTargetProperty];}
            });
        };
    };

}());

/*
var person = new Person("John", "Smith");
var txtName = document.getElementByID("txtName");
var txtSurname = document.getElementByID("txtSurname");
var btnSave = document.getElementByID("btnSave");
var binder = new Binder()
binder.bindTo(person, "name", txtName, "value");
binder.bindTo(person, "surname", txtSurname, "value");
*/