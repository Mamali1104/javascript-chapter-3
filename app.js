console.log("Hello Javascript!")
console.log("My name is Bubu")
let pencil=10;
let rubber=5;
//let output="the total price is:" + (pencil+rubber) + " rupees.";
let output = `The total price is : ${pencil+rubber} price`;
console.log(output)

console.log("before my age if ");
let age=17;
if (age>=18)
{
    console.log(" you can vote")
    let a=8;
    console.log(a*5);
}
if (age< 18){
    console.log("you cannot vote");
}
let fn= "Mamali";
if(fn=="Mamali"){
    console.log(`welcome ${fn}`);
}
let color="green";
if(color==="red"){
    console.log(" stop");
}
if(color==="yellow"){
    console.log(" wait");
}
if(color==="green"){
    console.log("go");
}



let size ="l";

if( size==="xl"){
    console.log("price is 250");
}
else if( size==="l")
{
    console.log("price is 200");
}
else if( size==="m")
{
    console.log("price is 100");
}
else if( size==="s")
{
    console.log("price is 50");
}



let marks = 95;

if(marks >= 33) 
    {
        console.log("passed");
        if(marks >= 80)
            {
                console.log("grade: o");
            } else{
                console.log("grade: o");
            }
    }
else{
    console.log("failed");
}

let mark=98;
if((mark>33 && mark>100) || !(false)){
    console.log("passed");
}
let string="pple";
if(string[0]==="a" && string.length > 3){
    console.log("good string");
}
else{
    console.log("not good");
}
let a=12;
console.log(a%3);


if(true)
{
    console.log("the value is true");
}
else{
    console.log("the value is not true");
}