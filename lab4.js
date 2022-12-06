//------------------------------(1)-----------------------------------

// function myfunction() {
//     var name = document.getElementById("name").value;
//     document.getElementById("hello").innerHTML = "Thank you, " + name + " for registering in our website";
//       wind()
// }

// //   window.open("./result.html","","_blank")

// function wind(){
//     var mywind;
//     mywind = window.open("","","_blank")

// }


// function blue(){
//     var press = document.getElementById("name");
//     press.style.border="3px blue solid";
// }
// function black(){
//     var press = document.getElementById("name");
//     press.style.border="1px black solid";



//     var name=document.getElementById("name");
//     if(name.value.length<3)
//     {
//         name.style.border="2px red solid";
//         document.getElementById("err").style.display="block";
//     }
//     else
//     {
//         name.style.border="solid 1px blue";
//         document.getElementById("err").style.display="none";
//     }
// }


// function passwordconfirm(){
//     var password = document.getElementById("pass1");
//     var confirm =document.getElementById("pass2");
//     if(password.value != confirm.value){

//         confirm.style.border="3px red solid";
//         document.getElementById("wrp").style.display="inline-block";

//     }
//     else{
//         confirm.style.border="solid 1px blue";
//         document.getElementById("wrp").style.display="none";

//     }

// }

//---------------------------------(2)----------------------------------------

function imgs() {
    var img = document.createElement('img');
    //img.src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkxNhrWO7CN-21NZfNNomARGzYP4MWA0eEiw&usqp=CAU';
    img.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkxNhrWO7CN-21NZfNNomARGzYP4MWA0eEiw&usqp=CAU' )
    document.getElementById('myImg').appendChild(img);
    let numb = document.getElementById("myImg").children.length;
    document.getElementById("text").innerHTML ="The number of child nodes to the div = " + numb;
    alert(numb);

}

function removeimage(){
    var remove = document.getElementById("myImg");
    remove.removeChild(remove.childNodes[0]);
    }