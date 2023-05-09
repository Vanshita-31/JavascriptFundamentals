`JavaScript Fundamentals session3`
`q1. Problem Description
You are given names of two students. They will form a team for an upcoming coding competition. The name of the team is the concatenation of the first characters of the two given names. Return the name of the team given the name of the students as arguments.


Sample Input 1
Anu, Rao


Sample Output 1
AR
`

function findTeamName(name1, name2) {
    // You only need to implement this function.
    return name1[0]+name2[0]
  }
  
  if (findTeamName("Rahul", "Kiran") !== "RK")
    console.log("Test fails: Expected 'RK' for input name1 = 'Rahul' and name2 = 'Kiran'");
  else
    console.log("Sample test case for input name1 = 'Rahul' and name2 = 'Kiran' passed!");
  
  module.exports = findTeamName;

`Q2. Problem Description
You can calculate and print out expressions or variables in a template string itself.

You are given the number r representing the radius of the circle as an argument.

You need to implement the function circleValues which will only have 2 lines of code in it:

Create a single template string variable circle.

Return the template string.

Hint: The template string variable circle should be as follows: A circle of radius r has a diameter 2*r

Hint: Diameter is twice the radius.

Sample Input 1
2

Sample Output 1
A circle of radius 2 has a diameter 4`

function circleValues(r){
    // You only need to implement this function.
    let circle = `A circle of radius ${r} has a diameter ${2*r}`;
    return circle;
  }
  
  if (circleValues(2) !== "A circle of radius 2 has a diameter 4")
    console.log("Test fails: Expected 'A circle of radius 2 has a diameter 4' for input r = 2");
  else
    console.log("Sample test case for input r = 2 passed!");
  
  module.exports = circleValues

`Problem Description
You are given a string str and a number k as arguments. You need to return the kth character of that string from the start.


Hint: The first character of a string is at index 0, second character at index 1 and so on.

Hint: kth character in a string, is at index k-1.


Sample Input
abcdef, 3


Sample Output
c`

function kthCharFromStart(str, k){
    // You only need to implement this function.
    return str[k-1];
  }
  
  if (kthCharFromStart("abcdefghi", 2) !== 'b')
    console.log("Test fails: Expected 'b' for input str = 'abcdefghi' and k = 2");
  else
    console.log("Sample test case for input str = 'abcdefghi' and k = 2 passed!");
  
  module.exports = kthCharFromStart

`You are given a string str and a number k as arguments. You need to return the kth character of that string from the end.


Hint: The first character of a string is at index 0, second character at index 1 and so on.

Hint: Use string.length to get length of the string.


Sample Input 1
abcdef, 3


Sample Output 1
d`

function kthCharFromEnd(str, k){
    // You only need to implement this function.
    return str[str.length-k];
  }
  
  if (kthCharFromEnd("abcdefghi", 2) !== 'h')
    console.log("Test fails: Expected 'h' for input str = 'abcdefghi' and k = 2");
  else
    console.log("Sample test case for input str = 'abcdefghi' and k = 2 passed!");
  
  module.exports = kthCharFromEnd


`You are given a string str and a substring of that string k as arguments.

Find the index of the first occurrence of that substring in the actual string.

Find the index of the last occurrence of that substring in the actual string.

If both these indexes are the same, then return true. Otherwise, return false.


Hint: Use indexOf() to get the index of the first occurence of the substring.

Hint: Use lastIndexOf() to get the index of the last occurence of the substring.


Sample Input 1
Next time there won’t be a next time , time


Sample Output 1
false`

function checkForSubstr(str, k){
    // You only need to implement this function.
    if(str.indexOf(k)===str.lastIndexOf(k)){
      return true;
    }
    else{
      return false;
    }
  }
  
  if (checkForSubstr("abcdefghi", "def") !== true)
    console.log("Test fails: Expected true for input str = 'abcdefghi' and k = 'def'");
  else
    console.log("Sample test case for input str = 'abcdefghi' and k = 'def' passed!");
  
  module.exports = checkForSubstr

`You are given a string str, a start position startInd and an end position endInd as arguments. You have to implement the function getSubstr which trims the string and then returns the substring of that string starting from the start position , and ending 1 before the end position (0-based indexing is followed).


Hint: Use the substring(startIndex, endIndex) function to get a substring of a string starting from the startIndex index and ending at one less than the endIndex index.


Sample Input 1
Hello world!, 1, 4


Sample Output 1
ell`

function getSubstr(str, startInd, endInd){
    // You only need to implement this function.
    return str.substring(startInd, endInd);
  }
  
  if (getSubstr('abcdefghi', 2, 5) !== 'cde')
    console.log("Test fails: Expected 'cde' for input str = 'abcdefghi', startInd = 2 and endInd = 5");
  else
    console.log("Sample test case for input str = 'abcdefghi', startInd = 2 and endInd = 5 passed!");
  
  module.exports = getSubstr

`If your name starts with a 'T' or 't', today is your lucky day! The city mall is giving away free coupons to every visitor whose name starts with a 'T' or 't'.

You are given a string name as an argument. You have to implement the function checkEligibility to help the mall determine if a person with the given name is eligible for the offer return "Eligible" else return "Not Eligible".


Hint: Use charAt(i) to get character at index i.

Hint: Use toUpperCase() to convert the string to uppercase.


Sample Input 1
Tia


Sample Output 1
Eligible`

function checkEligibility(name){
    // You only need to implement this function.
    if(name[0]==='T' || name[0]==='t'){
      return "Eligible";
    }
    else{
      return "Not Eligible";
    }
  }
  
  if (checkEligibility('tarun') !== 'Eligible')
    console.log("Test fails: Expected 'Eligible' for input name = 'tarun'");
  else
    console.log("Sample test case for input name = 'tarun' passed!");
  
  module.exports = checkEligibility
  