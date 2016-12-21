var displayProperties = (function(){
    
    function displayProperties(obj){
        var _obj = obj;
        //Property
        Object.defineProperty(this, "show",{
            get: function(){return object.keys(_obj);}
        });
    };

    return displayProperties;

}());




/*
var Person = (function(){

    //Constructor
    function Person(name, surname){
        var _name = name;
        var _surname = surname;
        var txtName = document.getElementById("txtName");
        var txtSurname = document.getElementById("txtSurname");

        txtName.value = _name;
        txtSurname.value = _surname;

        //Property
        Object.defineProperty(this, "name",{
            get: function(){return _name;},
            set: function(value){
                _name = value;
                txtName.value = _name;
            }
        });

        //Property
        Object.defineProperty(this,"surname",{
            get: function(){return _surname;},
            set: function(value){
                _surname = value;
                txtSurname.value = _surname;
            }
        });

    }

}());

var displayProperties = (function(){
    
    function displayProperties(obj){
        var _obj = obj;
        //Property
        Object.defineProperty(this, "show",{
            get: function(){return object.keys(_obj);}
        });
    };

}());

var p1 = new Person("Nathan","Davis");
var pCheck = new displayProperties(p1);
console.log(pCheck.show());
*/