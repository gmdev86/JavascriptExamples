var View = (function(){

    //Constructor
    function View(model, controller){
        var self = this;
        var txtName = document.getElementById("txtName");
        var txtSurname = document.getElementById("txtSurname");
        var btnSave = document.getElementById("btnSave");
        var btnReset = document.getElementById("btnReset");

        self.controller = controller;
        txtName.value = model.name;
        txtSurname.value = model.txtSurname;

        btnSave.onclick = function(){
            self.save();
        };

        btnReset.onclick = function(){
            self.clear();
        };
    };

    View.prototype.clear = function(){
        var txtName = document.getElementById("txtName");
        var txtSurname = document.getElementById("txtSurname");
        var divMessage = document.getElementById("divMessage");

        txtName.value = "";
        txtSurname.value = "";
        divMessage.innerHTML = "";
    };

    View.prototype.save = function(){
        var txtName = document.getElementById("txtName");
        var txtSurname = document.getElementById("txtSurname");
        var data = {
            name: txtName.value,
            surname: txtSurname.value
        };

        this.controller.save(data);
    };

    //This addes a property to View.
    Object.defineProperty(View.prototype, "message",{
        set: function(message){
            var divMessage = document.getElementById("divMessage");
            divMessage.innerHTML = message;
        },
        enumerable: true,
        configurable: true
    });

    return View;
}());