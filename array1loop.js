//arrays in loop

let fruits=["mango","litchi","apple","orange","pinapple"];
for(let i=0; i<fruits.length; i++)
{
    console.log(i, fruits[i]); 
}
for(let i=fruits.length-1 ;i>=0; i--)
{
    console.log(i,fruits[i]);

}

//nested loops with nested array

let heros=[["ironman","spiderman","thor"],["black panther","loki","dr.strange"]];
for(let h=0; h<heros.length;h++)
{
    console.log(`list #${h}`);
    for(let j=0;j<heros[h].length;j++)
    {
        console.log(heros[h][j]);
    }
}

let std=[["bubu",99],["dudu",99],["kanhu",98],["mama",98]];
for(a=0; a<std.length;a++)
{
    console.log(a,std[a], std[a].length);
    for(b=0; b<std[a].length;b++)
    {
        console.log(`b=${b}, ${std[a][b]}`);
    }
}


//for of loop array

let cars=["BMW","AUDI","Mercedies","Porse","Range Rover"];
for(car of cars){
    console.log(car);
}
for(char of "bubulovedudu")
{
    console.log(char);
}

//nested for of

let heross=[["ironman","spiderman","thor"],["black panther","loki","dr.strange"]];
for(list of heross){
    for(name of list)
    {
        console.log(name);
    }
}