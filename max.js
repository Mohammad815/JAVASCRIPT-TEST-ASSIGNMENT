function findMax(number){
    var larger = number[0];
    for(i=0; i<number.length; i++){
        if(number[i]<larger){
            larger = number[i];
        }
    }
    return larger;
}
var x = [4,4,5,6,89];
console.log(findMax(x));