exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
  	var promise = new Promise(function(resolve, reject) {
		 window.setTimeout(function() {
            resolve(value);
        }, 10);
	});
	return promise;
  },

  manipulateRemoteData : function(url) {
  	var promise = new Promise( function (resolve, reject) {

        
        var client = new XMLHttpRequest();
        

        

        client.open("GET", url);
        client.send();

        client.onload = function () {
          if (this.status >= 200 && this.status < 300) {
            var parsedData = JSON.parse(this.response).people.map(function(val){return val.name;}).sort();

            resolve(parsedData);
          } else {
            
            reject(this.statusText);
          }
        };
        client.onerror = function () {
          reject(this.statusText);
        };
      });

      
      return promise;

  }
};
