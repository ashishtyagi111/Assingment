function countchar(str){
    let count=0;
    let ar=str.split('');
    for(let i=0;i<ar.length;i++){
        let count=0;
        for(let j=0;j<ar.length;j++){
            if(ar[j]==ar[i]){
                count=count+1;
            }
        }
            console.log( "the number of time : " + ar[i] + " :occur is" + count);
    }
}
let a= countchar("theirisgood");
console.log(a);