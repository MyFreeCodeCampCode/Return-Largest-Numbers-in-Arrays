
function largestOfFour(arr) {
  var myArray = [];
   
  for (var i = 0; i < arr.length; i++) {
    var largestInArray = 0;
    
    for (var j = 0; j <arr[i].length; j++) {
      if (arr[i][j] > largestInArray)
        largestInArray = arr[i][j];
    }
    
    myArray.push(largestInArray);
  }
  return myArray;
}

//test case
//largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
