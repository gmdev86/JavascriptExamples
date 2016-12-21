var createPerson = (function(){

    function createPerson(name, surname){
        var _name = name;
        var _surname = surname;
        var txtName = document.getElementById("txtName");
        var txtSurname = document.getElementById("txtSurname");

        txtName.value = _name;
        txtSurname.value = _surname;

        return{
            //Priviledged Method -- Means it has access to the private vars (through closure)
            name: (function(value){
                if(value){
                    _name = value;
                    txtName.value = _name;
                }
                return _name;
            }()),
            //Priviledged Method -- Means it has access to the private vars (through closure)
            surname: (function(value){
                if(value){
                    _surname = value;
                    txtSurname.value = _surname;
                }
                return _surname;
            }())
        };
    };

}());