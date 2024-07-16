function longcountry(ar){
    let a;
    let len= ar.length;
    let b=ar[0].length;
        let c= ar[len-1].length;
    for(let i=0;i<len-1;i++){
    
        if(b<c){
            a=ar[i+1];
            b=a.length;
        } 
        
    }
    return a;
}
let d=["all","Anis","seenabce","in","the","jungle"]
let ab= longcountry(d);
console.log(ab);