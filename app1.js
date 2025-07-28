for( let n=1; n<=5; n++)
{
    console.log(n);
}

//table


let m=3;
for( let i=1; i<=10; i++)
{
    console.log(m*i);
}


//table multiplication
let t=prompt("enter your number");
t = parseInt(t);
for (i=t; i<=t*10; i=i+t)
{
    console.log(i);
}



//nested loop
for( let i=1; i<=3;i++)
{   
console.log(`outer loop ${i}`);   
    for(let j=1;j<=3;j++)
    {
        console.log(j);
    }
}

//while loop
console.log("while loop");
let a=1 ;
while(a<=5)
{
    console.log(a);
    a++ ;
}

console.log("while loop");
 
let b=0 ;
while(b<=20){
    console.log(b);
    b = b+2 ;
}



//fungame
let fav="fidda";
let guess=prompt("Enter the movie name:");
while(fav!=guess) 
{   
    if(guess=="quit")
    {
        console.log("u quit");
        break;
    }
    console.log("wrong!");
    guess=prompt("try again");
}
if(guess==fav)
{
    console.log("Congrats!");
}


//break

let c=1;
while(c<=5)
{
    if(c==3){
        break;
    }
    console.log(c);
    c++;
}
console.log("we used break at 3");
