
function fearNotLetter(str) {
    var letters = "abcdefghijklmnopqrstuvwxyz".split("");
      var fs = str[0];
      var lst = str[str.length-1];
    
    var fsIndex = letters.indexOf(fs);
    var lstIndex = letters.indexOf(lst);
  
    var newStr = letters.join("").substr(fsIndex,lstIndex+1);
    ///abcde
    ///abce
    var res = newStr.split("").filter(x=>{
      for(var i =0; i< str.length; i++){
        if(str.split("").indexOf(x) == -1){
          return x;
        }
      }
      
    })[0];
    console.log(res);
    return res;
  }
  
  fearNotLetter("abce");