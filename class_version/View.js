class View{

    constructor(model, controller){
        var self = this;
        var txtName = document.getElementById("txtName");
        var txtSurname = document.getElementById("txtSurname");
        var btnSave = document.getElementById("btnSave");
        var btnReset = document.getElementById("btnReset");
        
        self.controller = controller;

        txtName.value = model.name;
        txtSurname.value = model.surname;

        btnSave.onclick = function(){
            self.save();
        };

        btnReset.onclick = function(){
            self.clear();
        };
    };

    clear(){
        var txtName = document.getElementById("txtName");
        var txtSurname = document.getElementById("txtSurname");
        var divMessage = document.getElementById("divMessage");

        txtName.value = "";
        txtSurname.value = "";
        divMessage.innerHTML = "";        
    };

    save(){
        var txtName = document.getElementById("txtName");
        var txtSurname = document.getElementById("txtSurname");

        var data = {
            name: txtName.value,
            surname: txtSurname.value
        };

        this.controller.save(data);
    };

    set message(message){
        var divMessage = document.getElementById("divMessage");

        divMessage.innerHTML = message;
    };

};