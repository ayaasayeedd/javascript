
//---------------------(1)---------------
// var numbers = prompt("enter the numbers:")
// let sum=0;
// for(var i=0; i < numbers.length; i++){
//     sum = sum + parseInt(numbers[i]);
// }
// console.log("input:",numbers)
// console.log("output:",sum)


//---------------------(2)--------------

// var numbers = prompt("enter the numbers:")
// numbers.toString()
// numbers.split("")
// numbers.reverse()
// var output=numbers.join("")
// console.log("input",numbers)
// console.log("output",output)
// Another Answer
// function reverseNum(num) {
//     var rev = num.toString().split('').reverse().join('');
//     return Math.sign(num) * parseInt(rev);
//   }
//   var numbers = prompt("enter the numbers");
// console.log(reverseNum(numbers));

//--------------------(3)------------------

// function reverseNum(num) {
//         var rev = num.toString().split('').reverse().join('');
//         return Math.sign(num) * parseInt(rev);
//       }

//       var numbers = prompt("enter a number to check if the number is palindrome:");
//       if(numbers == reverseNum(numbers)){
//           console.log("YES")
//       }
//       else{
//         console.log("NO")        
//       }

//------------------(4)--------------------------

//  var num = prompt("enter your array sperated ")
//  num.toString().split('')
//  console.log(num)
//  var ind=parseInt(prompt("enter a number:"))
//  if(num.indexOf(ind) !== -1)  
//  {  
//          console.log("Yes, exists Index=",num.indexOf(ind))  
//  }   
//  else  
//  {  
//         console.log(num.indexOf(ind)," because it isn't exist")  
//  } 

//Another Answer 

// var num = [];
// var size = prompt("enter the number of elements in the array");

// for(var i=0; a<size; i++) 
// {   
//     num[i] = prompt('Enter array index ' + i);
// }
// var ind=parseInt(prompt("enter a number:"))

//  if(num.indexOf(ind) !== -1)  
//  {  
//          console.log("Yes, exists Index=",num.indexOf(ind))  
//  }   
//  else  
//  {  
//         console.log(num.indexOf(ind)," because it isn't exist")  
//  } 

//-------------------(5)--------------------------------------


// var size = prompt("enter the number of elements in the array");
// var array = [];
// for(var i=0; i<size; i++) 
// {   
//     array[i] = prompt('Enter array index ' + i );
// }
// console.log("The original array:",array)

// var j = prompt("enter the index of the number you want to remove");
// var removed = array.splice(j,1);
// console.log("The array after removing an element",array);

//--------------------------(6)----------------------------------

// function merge(text, n)
//   {
//     _1st = text.substring(0, n);
//     last = text.substring(text.length - n);
//     return _1st + last;
//  }
//  var input=prompt("enter your text")
//  console.log("input:",input)

// var output=(merge(input, 2));
// console.log("output:",output)

//--------------------------(7)---------------------------------------

// var text = prompt(" enter a text ");
// console.log("iput: ",text)
// var _2ndtext = text.split("");
// var counterofz = 0;
// var counterofo = 0;
// for (var i = 0; i < _2ndtext.length; i++) {
//     if (_2ndtext[i] == 'z') {
//         counterofz++;
//     }
//     if (_2ndtext[i] == 'o') {
//         counterofo++;
//     }
// }
// if (counterofz == counterofz * 2) {
//     console.log("output: YES");
// }
// else {
//     console.log("output: NO");
// }
