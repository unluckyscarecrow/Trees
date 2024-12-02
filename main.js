var frogcounter = 0;

function getfrog(number){
    frogcounter++;
    document.getElementById("frogcount").innerHTML = "You have "+frogcounter+" frogs";
}