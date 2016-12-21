//object literal - Design Pattern
(function(){
    var people = {
        people: [],
        elementals: [],
        init: function(){
            this.cacheDom();
            this.bindEvents();
            this.render();
        },
        cacheDom: function(){
            this.$el = document.getElementById('peopleModule');
            var children = this.$el.childNodes;

            for(var i = 0; i < children.length; i++){

                switch(children[i].nodeName){
                    case "BUTTON":
                        this.$button = children[i];
                        break;
                    case "INPUT":
                        this.$input = children[i];
                        break;
                    case "UL":
                        this.$ul = children[i];
                        break;                    
                    default:
                        break;
                }

            }

        },
        bindEvents: function(){
            this.$button.addEventListener('click',this.addPerson.bind(this));
            this.$ul.addEventListener('click', this.deletePerson.bind(this));
        },
        render: function(stuff){            
            var data = {
                ele: this.elementals
            };

            // Remove all li's from <ul>
            while(this.$ul.firstChild){
                this.$ul.removeChild(this.$ul.firstChild);
            }

            // Add the elements from data
            for(var i = 0; i < data.ele.length; i++){                
                this.$ul.appendChild(data.ele[i]);
            }

        },
        addPerson: function(){            
            // Add the elements from data
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(this.$input.value));
            li.setAttribute("class","alert alert-success col-md-2");
            li.setAttribute("role","alert");
            li.setAttribute("style","margin-left:15px; margin-top:15px; list-style:none;")

            //add i to the li
            var ie = document.createElement("i");
            ie.setAttribute("class","del close");

            //add span to i
            var span = document.createElement("span");
            span.setAttribute("aria-hidden","true");
            span.innerHTML = "&times;";

            ie.appendChild(span);
            li.appendChild(ie);

            //add to array
            this.elementals.push(li);
            this.render();
            this.$input.value = '';
        },
        deletePerson: function(event){
            var $remove = event.target.parentElement.parentElement;
            var index = -1;

            for(var i = 0; i < this.elementals.length; i++){

                if(this.elementals[i] === $remove){
                    index = i;
                }

            }

            if(index > -1){
                this.elementals.splice(index,1);
            }

            this.render();
        }
    };

    people.init();
}());