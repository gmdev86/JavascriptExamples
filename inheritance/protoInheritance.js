var Vehicle = (function(){
	function Vehicle(){
    var _type = "Truck";
    var _make = "Chevy";
    //Property
    Object.defineProperty(this,"Type",{
      get: function(){return _type;},
      set: function(value){
        _type = value;
      }
    });
    //Property
    Object.defineProperty(this,"Make",{
      get: function(){return _make;},
      set: function(value){
        _make = value;
      }
    });   
  };  
  return Vehicle;
}());

var Car = (function(){
	var _color = "blue";
	function Car(){ 
    //Property
    Object.defineProperty(this, "Color",{
      get: function(){return _color;},
      set: function(value){
        _color = value;
      }
    });  
  };
  return Car;
}());

var c = new Car();
var v = new Vehicle();

//Car will inherit from Vehicle
c.prototype = new Vehicle();
console.log(c.Color);
console.log(c.prototype.Make);
console.log(c.prototype.Type);