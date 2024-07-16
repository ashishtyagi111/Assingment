function bigger_element(arr,x){
    let ar=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>x){
            ar.push(arr[i]);
        }
    }
    return ar;
}
var a= [1,3,5,4,6,7];
let arr1= bigger_element(a,4);
console.log(arr1);