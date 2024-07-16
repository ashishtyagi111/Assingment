function longeststring(str){
    let ar= str.split(' ');
     let a=ar[0];
    for(let i=1;i<ar.length;i++){ 
        let b=a.length;
        let c= ar[i].length;
        if(b<c){
            a= ar[i];
        }else{
            a=a;
        }
    }
    return a;
}
let fun= longeststring("the boy is faster in the stadium");
console.log(fun);