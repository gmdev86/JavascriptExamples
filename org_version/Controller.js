var Controller = (function(){

    //Constructor
    function Controller(){};

    Controller.prototype.initialize = function(model, view){
        this.model = model;
        this.view = view;
    };

    Controller.prototype.save = function(data){
        if(data.name && data.surname){
            this.model.name = data.name;
            this.model.surname = data.surname;

            this.view.message = "Saved!";
            console.log(this.model);
        } else {
            this.view.message = "Please, enter name and surname!";
        };
    };

    return Controller;
}());