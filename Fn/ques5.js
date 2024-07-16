function uppercase(str){
    let arr=str.split(' ');
    let arr1=' ';
    for(let i=0;i<arr.length;i++){
        arr1= arr1 + ' ' + ( arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
    return arr1;
}
let a= uppercase("the ball is new");
console.log(a);