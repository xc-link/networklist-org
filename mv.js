//Fetch

var requestOptions = {
   method: 'GET',
   redirect: 'follow'
};

fetch("https://keyauth.win/api/seller/?sellerkey=&type=addsub&name=&level=", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));



//Axios


var axios = require('axios');

var config = {
   method: 'get',
   url: 'https://keyauth.win/api/seller/?sellerkey=&type=addsub&name=&level=',
   headers: { }
};

axios(config)
.then(function (response) {
   console.log(JSON.stringify(response.data));
})
.catch(function (error) {
   console.log(error);
});





//jQuery

var settings = {
   "url": "https://keyauth.win/api/seller/?sellerkey=&type=addsub&name=&level=",
   "method": "GET",
   "timeout": 0,
};

$.ajax(settings).done(function (response) {
   console.log(response);
});


//XHR


// WARNING: For GET requests, body is set to null by browsers.

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function() {
   if(this.readyState === 4) {
      console.log(this.responseText);
   }
});

xhr.open("GET", "https://keyauth.win/api/seller/?sellerkey=&type=addsub&name=&level=");

xhr.send();



//Native


var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
   'method': 'GET',
   'hostname': 'keyauth.win',
   'path': '/api/seller/?sellerkey=&type=addsub&name=&level=',
   'headers': {
   },
   'maxRedirects': 20
};

var req = https.request(options, function (res) {
   var chunks = [];

   res.on("data", function (chunk) {
      chunks.push(chunk);
   });

   res.on("end", function (chunk) {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
   });

   res.on("error", function (error) {
      console.error(error);
   });
});

req.end();




//Request


var request = require('request');
var options = {
   'method': 'GET',
   'url': 'https://keyauth.win/api/seller/?sellerkey=&type=addsub&name=&level=',
   'headers': {
   }
};
request(options, function (error, response) {
   if (error) throw new Error(error);
   console.log(response.body);
});



//Unirest

var unirest = require('unirest');
var req = unirest('GET', 'https://keyauth.win/api/seller/?sellerkey=&type=addsub&name=&level=')
   .end(function (res) { 
      if (res.error) throw new Error(res.error); 
      console.log(res.raw_body);
   });





