---
layout: post
category: web-development
tags: firebase, web
title: Firebase voor Web
comments: true
#date: 2016-09-15
author: jesper
---

Met Firebase kun je verschillende backend services gebruiken zonder ook maar een regel server code te schrijven.
Firebase kan het beste ingezet worden voor projecten die bijvoorbeeld  weinig data processing hoeven te doen. Ideaal dus voor bijvoorbeeld hackathon projecten.

> Firebase gives you the tools to develop high-quality apps, grow your user base, and earn more money. We cover the essentials so you can monetize your business and focus on your users.



## Initialiseren Firebase

Nadat je een project aanmaakt op de [Firebase Console](https://console.firebase.google.com/) wordt Firebase heel simpel geïnitialiseerd:


* Wanneer je geen gebruikt maakt van node.js:
{% highlight javascript %}
<script src="https://www.gstatic.com/firebasejs/3.4.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/3.4.0/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/3.4.0/firebase-database.js"></script>
<script src="https://www.gstatic.com/firebasejs/3.4.0/firebase.js"></script>
<script>
  var config = {
    apiKey: "<API_KEY>",
    authDomain: "<PROJECT_ID>.firebaseapp.com",
    databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
    storageBucket: "<BUCKET>.appspot.com",
  };
  firebase.initializeApp(config);
</script>
{% endhighlight %}
* Met node.js:
{% highlight javascript %}
    $ npm install firebase --save
{% endhighlight %}
{% highlight javascript %}
   var firebase = require("firebase");

   var config = {
     apiKey: "<API_KEY>",
     authDomain: "<PROJECT_ID>.firebaseapp.com",
     databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
     storageBucket: "<BUCKET>.appspot.com",
   };
   firebase.initializeApp(config);
{% endhighlight %}

Firebase heeft ook een eigen CLI, mocht je hier gebruik van willen maken om een lokale server te runnen, installeren kan zo:
{% highlight javascript %}
    $ npm install -g firebase-tools
    $ firebase serve
{% endhighlight %}


## Google Sign-in met Firebase
Een google sign-in met redirect voor je web applicatie is zo gedaan met Firebase.
{% highlight javascript %}
var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithRedirect(provider);

//Hierna kun je bij het laden van je pagina de providers OAuth token krijgen met getRedirectResult.
firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // Geeft de Google access token, deze kan gebruikt worden voor de Google API
    var token = result.credential.accessToken;

  }
  // Geeft de info van de ingelogde gebruiker
  var user = result.user;
})

{% endhighlight %}


[Firebase docs](https://firebase.google.com/docs/)