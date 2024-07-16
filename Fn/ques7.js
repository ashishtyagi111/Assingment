let count=0;
 function vovelcount(str){
    let ar = str.split('');
    for(let i=0;i<ar.length;i++){
        if(ar[i]=='a' || ar[i]=='e' || ar[i]=='i' || ar[i]=='o' || ar[i]=='u'){
             count=count+1;
        }
    }
        return count;
    
}
let a=vovelcount("thaestring");
console.log(count);