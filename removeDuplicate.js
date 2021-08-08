/* 
var number = [45,3,5,6,7,8,5,3,2,6,7,8,9];
console.log(removeDuplicate(number));

function removeDuplicate(number){
    var unique = []
    for(element of number){
        if(unique.indexOf(element)== -1){
            unique.push(element)
        }
    }
    return unique;
}
*/
var names = ["sanbirge","rapsanne","nihatte","sihabbe","sajitte","sanbirge","nihatte"];
console.log(removeDuplicate(names));

function removeDuplicate(names){
    var unique = [];
    for(element of names){
        console.log(element);
        if(unique.indexOf(element)== -1){
            unique.push(element)
        }
    }
    return unique;
}