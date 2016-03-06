var _ = {
  map: function(arr,callback){
    for(var i in arr){
      arr[i] = callback(arr[i]);
    }
    return arr;
  },
  filter: function(arr,callback){
    var newArr = [];
    for(var i in arr){
      if(callback(arr[i])){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  },
  reduce: function(arr,callback,start){
    for(var i in arr){
      start = callback(arr[i],start);
    }
    return start;
  },
  find: function(arr,callback){
    for(var i in arr){
      if(callback(arr[i])){
        return arr[i];
      }
    }
  },
  reject: function(arr,callback){
    var newArr = [];
    for(var i in arr){
      if(!callback(arr[i])){
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
};