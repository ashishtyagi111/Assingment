function greatest_smallest(arr){
    let ar=arr.sort();
    
    let len= ar.length; 
        let great= ar[len-2];
         let small= ar[1];
         return " the second smallest number is "+ small +"\n" +
         "the second greatest number is "+ great;
        
}
let arr= [1,7,6,5,4,3,2];
let a= greatest_smallest(arr);
alert(a);