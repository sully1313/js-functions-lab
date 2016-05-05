// Question 1
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return "please input numbers";
  }
}
maxOfTwoNumbers();
// Question 2
function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else if (num3 > num1 && num3 > num2) {
    return num3;
  } else {
    return "it's a tie";
  }
}

// Question 3
function isCharacterAVowel(string) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.indexOf(string) !== -1) {
    return true;
  }
  return false
}

// Question 4
function sumArray(array) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    count += array[i];
  }
  return count;
}


// Question 4
function multiplyArray(array) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
    count *= array[i];
  }
  return count;
}


// Question 5
var numberOfArguments = function(){
  return args.length;
}



// Question 6
var reverseString = function (string){
  var arrr = string.split('');
  var revArray = [];
  for (var i = arrr.length -1; i >= 0; i--) {
    revArray.push(arrr[i]);
  }
  return revArray.join('');
};


// Question 7
function findLongestWord (array) {
  var longest = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > longest) {
      longest = array[i].length;
    }
  }
  return longest;
}


// Question 8
function filterLongWords (array, numbers) {
  newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i].length > numbers) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}


// Bonus 1
// (hint: `prototype`)
String.prototype.reverse = function () {
  return this.split('').reverse().join('');
};

// Bonus 2
function charactersOccurencesCount() {
  
}
