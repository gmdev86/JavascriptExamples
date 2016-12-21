var Person = (function(){

    function Person(name, surname){
        var _name = name;
        var _surname = surname;
        var txtName = document.getElementById("txtName");
        var txtSurname = document.getElementById("txtSurname");

        txtName.value = _name;
        txtSurname.value = _surname;

        //Define property
        Object.defineProperty(this, "name",
        {
            get: function() { return _name; },
            set: function(value){
                console.log("update on name");
                _name = value;
                txtName.value = _name;
            }
        });

        //Define property
        Object.defineProperty(this, "surname",
        {
            get: function(){ return _surname; },
            set: function(value){
                console.log("update on surname");
                _surname = value;
                txtSurname.value = _surname;
            }
        });

    };

    return Person;

}());