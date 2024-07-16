function checkprime(num){
    let f = "";
    for(let i=2;i<num/2;i++){
        if(num%i==0){
            
           f = " this is not a prime number";
           break;
               
        }
        else
        f = "this is a prime number";
}
 return f;
}

let a= checkprime(17);
console.log(a);