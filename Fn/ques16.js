function uniquestring(str){
    let ar= str.split('');
    let ch="";
    for(let i=0;i<ar.length;i++){
        if(ch.includes(ar[i])){
           // let b=0;
        }else{
             ch= ch +ar[i];
        }
        
    }
    return ch;
}
let com= uniquestring("thkjfkkdklsfkdnkd");
console.log(com);