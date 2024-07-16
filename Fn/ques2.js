function checkpalindrom(str){
    let arr=str.split("");
    let reverse= arr.reverse("");
    let reversestr= reverse.join("");
     if(reversestr==str){
         console.log("str is palindrom");
     }else{
         console.log("str is not a palindrom");
     }
}
let ch=checkpalindrom("shalu");
