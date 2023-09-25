//* 1
// var hello;
console.log(hello); // undefined
var hello = 'world';

//* 2
//var needle
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle); //magnet
}

//* 3
// var brendan;
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);// super cool

//* 4
// var food
var food = 'chicken';
console.log(food); // chicken
eat(); //half-chicken
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//* 5
// runtime error
mean();
console.log(food); //!
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//* 6
// var genre
console.log(genre); //undefined
var genre = "disco";
rewind(); // rock, r&b
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre); // disco

//* 7
// var dojo;
dojo = "san jose";
console.log(dojo); // san jose
learn(); // seattle, burbank
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo); // san jose 

//* 8
// var makeDojo 
console.log(makeDojo("Chicago", 65)); // true
console.log(makeDojo("Berkeley", 0)); // runtime error
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now"; //! reassignment to constant 
    }
    return dojo;
}
