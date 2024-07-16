let count=0;
for(let year=2014;year<=2050;year++){ 
     
    let date= new Date();
    if(date.getDay()===0){
        console.log("the year which have the 1 january is sunday : is"+year);
     count=count+1;
    }
}
  
if(count===0){
    console.log("no year between 2014 to 2050 has a single year whish has the sunday on 1 january");
}