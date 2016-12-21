function gizmo(id){
    return{
        toString: function(){
            return "gizmo " + this.id;
        }
    };
}

function hoozit(id){
    var that = gizmo(id);
    that.test = function(testid){
        return testid === id;
    };
    return that;
}