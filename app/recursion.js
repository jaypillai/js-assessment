exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var filesArray = [];
    var specArry = [];
    function findFiles(base){
    	base.forEach(function(val){
    		if(typeof val === "string"){
    			if(dirName && val.indexOf(dirName) !== -1){
    				specArry.push(val);
    			}
    			else{
    				filesArray.push(val);
    			}
    		}else if(typeof val === "object"){
    			findFiles(val.files);
    		}

    	});
    	
    }

    findFiles(data.files);

    if(!dirName){
   		return filesArray;
	}else{
		return specArry;
	}

  },

  permute: function(arr) {
  	var permArr = [],
    usedChars = [];

	function permute(input) {
	  var i, ch;
	  for (i = 0; i < input.length; i++) {
	    ch = input.splice(i, 1)[0];
	    usedChars.push(ch);
	    if (input.length == 0) {
	      permArr.push(usedChars.slice());
	    }
	    permute(input);
	    input.splice(i, 0, ch);
	    usedChars.pop();
	  }
	  return permArr
	};

	return permute(arr);

  },

  fibonacci: function(n) {

	function Fibonacci (inNum) { 
       if (inNum == 0) 
          var FibonacciNum = 0; 
       else { 
           if (inNum == 1) 
              FibonacciNum = 1; 
           else  { 
                // recursive function call 
                FibonacciNum = Fibonacci(inNum - 2) + Fibonacci(inNum - 1); 
             } 
           } 
        return FibonacciNum; 
    } 

    return Fibonacci(n);
  },

  validParentheses: function(n) {

  }
};
