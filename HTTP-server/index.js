const http = require('http');
const fs = require('fs');
const url = require('url');


const myServer = http.createServer((req,res)=>{
    console.log('new req cone..');
    
    if(req.url === '/favicon.ico') return res.end();
    


    const log = `${new Date()}:${req.url} new req  recieved\n`;

    fs.appendFile('log.txt',log, (err,data)=>{

    const myUrl =  url.parse(req.url,true);
    console.log(myUrl);
      switch(myUrl.pathname){
        case '/': res.end('Home page');
        break

        case '/about':res.end("namse "+myUrl.query.name);
        break

        case '/contact': res.end('Conatcat Page')
        break

       case '/search' : res.end('your search result is here for '+myUrl.query.q);
       break;

       default :  res.end('ERROR 404');
      }

    });
  
})







myServer.listen(3000,()=> console.log('started'));