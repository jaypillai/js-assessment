exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
  	var timeout;
    function myFunc () {
      console.log(start++);
      if (start <= end) {
        timeout = setTimeout(myFunc, 100);
      }
    }

    myFunc();

    return {
      cancel : function () {
        timeout && clearTimeout(timeout);
      }
    };
  }
};
