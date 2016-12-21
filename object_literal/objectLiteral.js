var myCar = {
    color: 'pink',
    direction: 0,
    mph: 0,

    gas: function gas(amount){
        amount = amount || 10;
        this.mph += amount;
        return this;
    },

    brake: function brake(amount){
        amount = amount || 10;
        this.mph = ((this.mph - amount) < 0) ? 0 : this.mph - amount;
        return this;
    }
};