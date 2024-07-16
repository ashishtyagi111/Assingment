let randomNumber= Math.floor(Math.random() * 10)+1 ;
     let userinput= prompt("guess a number between 1 and 10");
     let userguess= parseInt(userinput);

      if(userguess===randomNumber){
        console.log("good work");
      }else{
        console.log(" Not matched. the correct number was : "+ randomNumber);
      }