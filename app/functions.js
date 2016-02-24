exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(val){
      return str+","+" "+val;
    }
  },

  makeClosures : function(arr, fn) {
    var myVals = [];
    for(i=0;i<arr.length;i++){

      (function(index){
        myVals.push(fn(arr[index]));
      })(i);
    }

    return myVals;

  },

  partial : function(fn, str1, str2) {
    return function(val) {
      return fn.call(null, str1, str2, val);
    };
  },

  useArguments : function() {
    var myArgs = Array.prototype.slice.call(arguments);
    var sum = myArgs.reduce(function(val1,val2){return val1+ val2;},0)
    return sum;
  },

  callIt : function(fn) {
    var myArgs = Array.prototype.slice.call(arguments, 1, arguments.length);
    fn.apply(null,myArgs);
  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
