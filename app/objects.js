exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
  	return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
  	constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
  	var output = [];
  	for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        output.push(key + ': ' + obj[key]);
      }
    }

    return output;

  }
};
