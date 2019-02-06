/* npm install is like when we downloaded the jquery file locally*/

/*bring the entire express object into the variable express
require is like script js tag
require is like take this library and apply it*/
const express = require('express');

/* create a serve */
const server = express();

/* set up an end point, define each end point directly, here defining the request of get
get a request object and response object
every time the server gets a home request this function will get called*/
server.get('/',(request,response)=>{
    console.log('This is the home rout!');
    response.send('<h1>My Awesome Node Site! </h1>');
});


/*to get user information
this is an end point*/
server.get('/api/user',(req,res)=>{
    /* this is where we would do the query */
    const user={
        name:'Marty',
        occupation: 'Slacker',
        age: 17,
        email:'marty@timetravel.com'
    };
    /*send the info, send the object*/
    res.send(user);
});


/* tell the server to listen to
  port 80 is most websites
  https is 443
  commonly use 9000
    can only have one server per port*/
server.listen(9000, ()=>{
    console.log('Server running at localhost: ', 9000);
});