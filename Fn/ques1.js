function reversenum(nm){
    let rev_num= 0;
    
    while(nm!=0){
        var n = nm%10;
        rev_num=(rev_num * 10) + n;
        
        nm=Math.floor(nm/10);
        
    }
    return rev_num;
}
var g = reversenum(12345);
console.log(g);