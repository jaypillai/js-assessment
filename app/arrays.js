exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
      return arr.indexOf(item);
  },

  sum : function(arr) {
      return arr.reduce(function(item1,item2){ return item1 + item2;},0);
  },

  remove : function(arr, item) {
    var newArry = [];
    arr.forEach(function(val){
      if(val !== item){
        newArry.push(val);
      }
    });

    return newArry;

  },

  removeWithoutCopy : function(arr, item) {
    for(iter = 0 ;iter < arr.length ; iter ++){
      if(arr[iter] === item){
        arr.splice(iter,1);
        iter--; 
      }
    }

    return arr;

  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var joinedArry = arr1.concat(arr2);
    return joinedArry;
  },

  insert : function(arr, item, index) {
    arr.splice(index,0,item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    arr.forEach(function(val){
      if(val === item){
        count++;
      }
    });

    return count;

  },

  duplicates : function(arr) {
    var dupCheck = {};
    var duplicateValues = [];
    for(i=0;i<arr.length;i++){
      if(!dupCheck[arr[i]]){
        dupCheck[arr[i]] = true;
      }else{
        if(duplicateValues.indexOf(arr[i]) === -1)
        duplicateValues.push(arr[i]);
      }
    }

    return duplicateValues.sort();

  },

  square : function(arr) {
    var squares = arr.map(function(num){return num*num;});
    return squares;
  },

  findAllOccurrences : function(arr, target) {
    var occur = [];
    arr.forEach(function(val,index){
      if(target === val){
        occur.push(index);
      }

    });

    return occur;

  }
};
