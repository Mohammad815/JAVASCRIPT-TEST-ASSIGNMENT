var number = [4,3,5,8,2,3,4,5,6];
var even =[];
var odd = [];
var evensum=0 , oddsum=0;
for(element of number){
    if(element%2==0){
        even.push(element);
        evensum = evensum + element;
    }
    else{
        odd.push(element);
        oddsum = oddsum + element;
    }
}

console.log(even);
console.log(evensum);
console.log(odd);
console.log(oddsum);

