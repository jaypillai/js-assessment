exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
	var newStr = "";
	var countthis = {};
	for(i=0;i<str.length;i++){
		if(!countthis[str[i]]){
			countthis = {};
			countthis[str[i]] = 1;
			newStr = newStr+ str[i];
		}else if(countthis[str[i]] < amount){
			newStr = newStr+ str[i];
			countthis[str[i]] = countthis[str[i]] +1;
		}

		
	}

	return newStr;


  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {
  	return str.split("").reverse().join("");

  }
};
