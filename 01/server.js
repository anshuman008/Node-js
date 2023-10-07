
// const math = require('./math.js');

// console.log(math);

// console.log('adding two values '+math.add(15,88)+' subtracting same vaalues '+math.sub(20,5));

const fs  =  require('fs');


// asynchronus fs write function
fs.writeFile('./a.txt','my name is shivaam',()=>{
  console.log('ho gya');
})

//synchronus function

fs.writeFileSync('./b.txt','toh kaise  ho aap log bhaeno bhiyo');


//  delete a file  
fs.unlink('b.txt',(err)=>{});