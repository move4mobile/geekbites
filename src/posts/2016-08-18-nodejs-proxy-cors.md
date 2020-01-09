---
title: Automatisch CORS headers toevoegen via een reverse proxy
category: web-development
tags: cors, nodejs
comments: true
author: michael
min_read: 5
date: 2016-08-18
---

Wanneer je als web developer een applicatie bouwt die een REST service op een ander domain moet aanroepen, dan ben je 
vast bekend met de volgende foutmelding:

```XMLHttpRequest cannot load http://api.example.com/login. Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost' is therefore not allowed access.```

In DevTools ziet dat er zo uit:

![CORS error in developer console.](/assets/nodejs-proxy-cors/cors-error-no-access-control-allow-origin.png)

Ai, ai, ai...!

## CORS headers automatisch toevoegen via proxy

Vandaag kwam ik een handige node library tegen waarmee je gemakkelijk een reverse proxy kan opzetten die de juiste CORS
headers aan iedere request (en response) voor je toevoegt: [cors-anywhere](https://www.npmjs.com/package/cors-anywhere)

> CORS Anywhere is a NodeJS proxy which adds CORS headers to the proxied request.
>
> The url to proxy is literally taken from the path, validated and proxied. The protocol part of the proxied URI is optional, and defaults to "http". If port 443 is specified, the protocol defaults to "https".


## Getting Started

[% highlight javascript %]
var host = process.env.PORT ? '0.0.0.0' : '127.0.0.1';
var port = process.env.PORT || 8080;
 
var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins 
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
[% endhighlight %]

1. Maak een nieuwe folder aan 

2. Installeer Cors Anywhere met ```npm install cors-anywhere```

3. Kopieer de bovenstaande voorbeeldcode naar een bestand server.js

4. Start de server met ```node ./server.js``` 

## Done!

That's it! Je CORS reverse proxy server draait nu op poort 8080.

Voorbeeld request vanuit je web client:

* http://localhost:8080/http://google.com/ - Google.com with CORS headers
* http://localhost:8080/google.com - Same as previous.
