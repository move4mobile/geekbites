# Geek Bites [![Build Status](https://travis-ci.org/move4mobile/geekbites.svg?branch=develop)](https://travis-ci.org/move4mobile/geekbites)

Onze blog staat live: http://geekbites.move4mobile.io

#### How to install
First install Node.js and check which verion of Node you have.
Eleventy requires Node-8 or newer 

`node --version`

If that is the case you can run the following code to install the dependencies:

`npm install`

After this you can run the code `npm run`.

To build, just run `npm run build`. This will pack and compile all resources needed to put the application in production and generate a service worker.

Then you `npm run start`, npm will run the start script for you and start your application with your special configuration options.

And then you are ready to write your own Geekbites blog. 

#### Tips

When it found any vulnerabilities after you run the code `npm install`  you can run the code  `npm audit fix` to fix them, or `npm audit` for details

After this there will be no or less vulnerabilities, then you can run the code `npm run`.


Goodluck!!
