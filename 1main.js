var hey=[];
function shaw(){
    for(var i=1; i<=3; i++){
        hey.push(document.getElementById("i" + i).value);
        document.getElementById("show").innerHTML=hey.join(". ");
    }
    
}