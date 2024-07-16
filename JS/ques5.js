let str= "w3school";
let chars= str.split('');
  for(let i=0;i<=10;i++){
    let lastchar= chars.pop();
     chars.unshift(lastchar);

    console.log(chars.join(''));
  }