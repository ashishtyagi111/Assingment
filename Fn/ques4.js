function alpha(str){
    let arr=str.split("");
    let arrs= arr.sort();
    let arrj= arrs.join("");
     return arrj;
}
let a= alpha('ashishtyagi');
console.log(a);