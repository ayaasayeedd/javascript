//------------------------(1)-----------------------------

// class box {
//     constructor(width, height, bookks) {
//         this.width = width;
//         this.height = height;
//         this.bookks = bookks;
//     }

// }

// class books {
//     constructor(id, name, writer_name, num_pages) {
//         this.id = id;
//         this.name = name;
//         this.writer_name = writer_name;
//         this.num_pages = num_pages;
//     }
// }

// var book_1 = new books(1,"Laravel","Aya",903);
// var book_2 = new books(2,"Javascript","Sayed",247);
// var book_3 = new books(3,"Database","Abdelghany",454);
// var book_4 = new books(4,"Html","Hassan",845);
// var book_5 = new books(5,"C++","Abdelmola",719);


// var bookss = [book_1, book_2, book_3, book_4, book_5]

// var boxx=new box(330,399,bookss);

// console.log(boxx)

// var sum = 0;
// for (var i = 0; i < bookss.length; i++) {
//     sum += boxx.bookks[i].num_pages;
// }
// console.log(sum);


// var area = boxx.width * boxx.height;
// console.log(area)


//-------------------------------(2)-------------------------------------


// class Point3D {
//     constructor(x=0, y=0, z=0) {
//         this.x = x;
//         this.y = y;
//         this.z = z;
//     }

//     print3DPoint() {
//         console.log("Point3D: ", "X=", this.x, " Y=", this.y, " Z=", this.z);
//     }

//     calculateDistance(P2){
//       var  d = Math.sqrt((P2.x - this.x)^2+(P2.y - this.y)^2+(P2.z - this.z)^2)
//         console.log(d)
//     }
// }

// point_1 = new Point3D();
// point_2 = new Point3D(3, 5, 7);

// point_1.print3DPoint()
// point_2.print3DPoint()

// P2 = new Point3D()
// P2.calculateDistance(P2)


//----------------------------------(3)------------------------------


class Course {
    constructor(id, cname, grade=0) {
        this.id = id;
        this.name = cname;
        this.grade=grade
    }
}

class student {
    constructor(id, name, course) {
        this.id = id;
        this.name = name;
        this.course = course;
    }

      display(){
        console.log(this.id, this.name);
        for (var i = 0; i < this.course.length; i++) {
            console.log(this.course[i].name, " with grade: ", this.course[i].grade)
        }
     }

     grade(){
        for(var i=0; i < this.course.length; i++){
            var grd = parseInt(prompt("Enter your  grade at: "+this.course[i].name))
            this.course[i].grade = grd;
        }
     }

     totalgrades(){
        var sum = 0;
        for(var i=0; i < this.courses.length; i++){
        sum = sum + this.courses[i].grade;
          }
         return sum;
     }

}



var course_1 = new Course(1, "php");
var course_2 = new Course(2, "javascript");


var coursess = [course_1, course_2];

var student_1 = new student(1, 'Aya', coursess);
var student_2 = new student(2, 'sayed', coursess);

console.log(student_1);
console.log(student_2);


student_1.grade()
student_1.display()

student_2.grade()
student_2.display()