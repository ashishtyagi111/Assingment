function getcharacter(str){
    let ar= str.split('');
    let count= 0;
    for(let i=0;i<ar.length;i++){
        let count=0;
        for(let j=0;j<ar.length;j++){
            if(ar[j]==ar[i]){
                count=count+1;
            }
        }
        if(count==1){
         return  ar[i];
            
            break;
        }
    }
}
let gt= getcharacter("acahivcement");
console.log(gt);