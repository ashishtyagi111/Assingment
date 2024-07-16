function factor(num){
    let fact="";
    for(let i=1;i<=num;i++){
        if(num%i==0){
            fact=fact + i;
        }
    }
    return fact;
  }
  let a= factor(8);
  console.log(a);