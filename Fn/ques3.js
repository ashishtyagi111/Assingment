function possiblecombination(str){
    let combination=[];
    let len= str.length;
    for(let i=0;i<= len;i++){
        for(let j=i+1;j<= len +1 ;j++){
            combination.push(str.slice(i,j));
        }
    }
    return combination;
}
let a= possiblecombination('dog');
console.log(a);