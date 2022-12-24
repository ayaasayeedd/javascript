// class person{
//     #id;
//     constructor(id,name)
//     {
//         console.log(this.constructor)

//         if(this.constructor==person)
//         {
//             throw 'error this is abstract class'
//         }


//         this.id=id;
//         this.name=name;  
        
//     }

//     setID(ss)
//     {
//         this.#id=ss;
//     }
//     getID()
//     {
//         return this.#id;
//     }

// }

// class employee extends person {
//     static count = 0;
//     constructor(id, name, salary) {
//         employee.count++;
//         super(id, name, salary)
//            this.salary = salary;
//     }
//     static displayHTRules() {
//         console.log("aya sayed abdelghany");
//     }
//     getcount() {
//         return employee.count;
//     }

//     showSalary(){
//        console.log(this.salary)
//     }

//     increaseSalalry() {
//         console.log(this.salary + 333)
//     }
// }


// class student extends person {
//     constructor(id, name) {
//         super(id, name)
//     }
// }



//-------------------------------------------------------------------------------------

// var ScientificDepartment = {
//     location: "egypt",
//     address: {
//         city: "aswan",
//         street: "sahary",
//         zipCode: "81511",


//     },
    
//     display: function () {
//         return "Location: " + this.location + " " + this.address.city + " " + this.address.street + " " + this.address.zipCode;
//     }

// };
// console.log(ScientificDepartment.display());

//-------------------------------------------------------------------------

function MaxArray(...Array) {

    var max= Math.max(...Array);
    var index = Array.indexOf(max);
    console.log("max: ", Array[index]);

  }
  
 

  function MinArray(...Array) {
    var min= Math.min(...Array);
    var index = Array.indexOf(min);
    console.log("min: ", Array[index]);
  }

  MaxArray(13,93,51,1,7);
  MinArray(9,73,59,37,97);


  //---------------------------------------------------------------------


  var fruits = ["apple", "strawberry", "banana", "orange", "mango"] 


fruits.forEach(function (fru) {

console.log(fru)

});