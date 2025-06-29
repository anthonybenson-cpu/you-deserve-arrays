/******************
 * YOUR CODE HERE *
 ******************/
function getFirstItemFrom(arr){
  return arr[0]
}

function getLastItemFrom(arr){
  return arr[arr.length - 1]
}

function getIndex3(arr){
  if(arr.lenght > 3){
    return arr[3];
  } else {
    return arr[arr.length - 1];
  } 
}

function isLongList(arr){
  return arr.lenght >= 10
}

function firstItemIsNumber(arr){
  return typeof arr[0] === "number"
}

function secondCharOfThirdString(arr){
  if(typeof arr[2] === "string" && arr[2].lenght >= 2) {
    return arr[2][1]
  }
}


 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/


if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}
