Object.prototype.later = function(msec, method){
    //inner functions do not have access to this so we use that.
    var that = this,
        args = Array.prototype.slice.apply(arguments, [2]);
    
    if(typeof method === 'string'){
        method = that[method];
    }
    setTimeout(function(){
        method.apply(that, args);
    },msec);

    return that;
};

String.prototype.endsWith = 
   function(suffix) 
   {
      if (typeof suffix != "string")
         throw "illegal argument" + suffix;

      if (suffix == "")
         return true;

      var str = this;
      var index = str.length - suffix.length;
      return str.substring(index, index + suffix.length) == suffix;
   };

String.prototype.startsWith = 
   function(prefix)
   {
      if (typeof prefix != "string")
         throw "illegal argument" + prefix;

      if (prefix == "")
         return true;

      var str = this;
      return str.substring(0, prefix.length) == prefix;
   };