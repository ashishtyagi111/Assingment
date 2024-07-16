let today= new Date();
let crisdate= new Date(2024,11,25);
 if(today.getMonth()===11 && today.getDate() >25){
     crisdate.setfullyear(crisdate.getfullyear() + 1);
 }
  let time= (crisdate.getTime()-today.getTime());
  let diff= 1000*60*60*24;
  let days= Math.ceil(time/diff);
  console.log("the days for the next cristmas is"+ days);