class Controller{
    initialize(model,view){
        this.model = model;
        this.view = view;
    }

    save(data){
        if(data.name && data.surname){
            this.model.name = data.name;
            this.model.surname = data.surname;

            this.view.message = "Saved!";
        } else {
            this.view.message = "Please, enter name and surname!";
        }
    }
}