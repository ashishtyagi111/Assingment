function matrix(n){
    let i;
    let j;
    let ar="";
      for(i=0;i<n;i++){
          let ar="";
          for(j=0;j<n;j++){
              if(i===j){
                  ar=ar+'1';
              }else{
                  ar=ar+'0';
              }
          }
          console.log(ar);
          //console.log();
      }
      return ar;
}
let a=matrix(3);
console.log(a);