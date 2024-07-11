const http=require('http')
const hostname='127.0.0.1';

// const port =3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  // res.end("Hello World\n");
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});



var x =1;
a()
b()
console.log(x);
function a(){
    var x= 10;
    console.log(x);

}
function b(){
    var x= 100;
    console.log(x);



}