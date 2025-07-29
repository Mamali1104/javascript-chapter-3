let todo=[];


let req= prompt("Please enter your request");

while(true){

    if(req=="quit")
    {
        console.log("you quit!!");
        break;

    }
    if(req== "list")
    {
        console.log("___________________________");

        for(let i=0; i<todo.length;i++)
        {
            console.log(i,todo[i]);
        }
        console.log("___________________________");
    }
    else if(req=="add"){
        let task=prompt("Please enter your task u want to add");
        todo.push(task);
        console.log("task added");

    }
    else if(req=="delete")
    {
        let idx=prompt("Please enter your task idx u want to delete");
        todo.splice(idx,1);
        console.log("task removed..");
    }
    else{
        console.log("Wrng input!!");
    }
    req = prompt("Please enter your request");

}