// server.mjs
// import { createServer } from 'node:http';

var http=require('http')
var fs=require('fs');
var os=require('os');

console.log(os.freemem());
console.log(os.cpus());
console.log(os.hostname());
console.log(os.homedir());
console.log(os.getPriority());
console.log(os.endianness());
console.log("normal log");
console.warn("danger");
console.assert(true,"transcation");
console.assert(false,"transcation");


// const jsondata={
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 18 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//       "rate": 3.9,
//       "count": 120
//     }
//   }

  
  

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end('Hello World!\n');


  if(req.url==="/")
    {
        fs.readFile("notes.txt",(error,data)=>{
          res.write(data);
          res.end();
        })
        // res.end(JSON.stringify(jsondata));   
    }

   
});



// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`
