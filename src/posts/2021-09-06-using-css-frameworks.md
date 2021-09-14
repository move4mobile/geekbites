---
title: "CSS Frameworks: Tailwind- en Windi CSS"
category: inspiration
tags: framework, css, sass, frontend
comments: true
author: nick
min_read: 5
date: 2021-09-06
permalink: /2021/09/06/using-css-frameworks/
---

<!-- Section: Intro -->

Veel websites, webwinkels en blogs maken gebruik van een CSS framework. Erg populair is nog altijd Twitter Bootstrap. Een ervaren webdesigner / frontender herkent het direct zonder in de code te hoeven kijken. Grafisch gezien lijken ze namelijk vaak sterk op elkaar. Bootstrap is snel inzetbaar en je hebt in een no-time een repsonsive website staan. Zelf de source downloaden en Bootstrap builden wordt helaas nog vaak overgeslagen. Men plakt de productie CDN link in de head en de overrides worden er aan toegevoegd. Er kleven hier echter een aantal nadelen aan. Vaak wordt er maar een klein deel van de hele library gebruikt, terwijl de browser de volledige stylesheet in moet laden. "Eénmaal in je cache, geladen met 5G maakt toch niet uit?" zullen sommigen zeggen. Toch gaat dit ten kosten van de performance en de UX; verspringende fontsizes en kleuren zie ik helaas nog te vaak. 

![Bootstrap](/assets/css-frameworks/bootstrap.png)

<i><span style="font-size: .75em;">Bootstrap website. 2021-09-06</span></i>

Ikzelf ben lang weggebleven bij Bootstrap, met de overtuiging alleen te schrijven wat de browser nodig heeft. Niets meer en niets minder. 

Tegenwoordig zijn hier modernere varianten voor bedacht. Een tweetal die ik hier uit wil lichten is **Tailwind CSS** en **Windi CSS**. 

![Tailwind CSS](/assets/css-frameworks/tailwindcss.png)
<i><span style="font-size: .75em;">Tailwind website. 2021-09-06</span></i>

### Het concept

Het idee is dat je je html schrijft met de classes die je nodig hebt voor je designs en componenten. Tijdens development heb je alle classes tot je beschikking. Een responsive grid, tools, spacing, backgrounds, kleuren, vormen, animaties, noem het maar op. De gehele library is wel 3,6mb (unminified), dus je zult begrijpen dat er echt heel veel beschikbaar is. Op het moment dat je gaat builden voor productie, scant Tailwind je templates in je geconfigureerde mappen en genereert hij een CSS bestand met alleen de classes die je gebruikt hebt. Resultaat: een kleine, optimale stylesheet van wellicht maar 10kb!

### Windi

Een nadeel is dat je soms erg lange class names krijgt in je html. Qua leesbaarheid wordt het daar niet beter van. Een groter nadeel is dat je tijdens development de gehele stylesheet in de browser geladen wordt. Er zit zoveel in dat sommige browsers 'laggy' worden en soms zelfs crashen! Hiervoor heeft **Windi CSS** een oplossing voor gevonden. Ook tijdens development worden alleen de classes gegeneerd die je gebruikt, in plaats van de hele bibliotheek. Maar dan vraag je je af: hoe pas ik dan in de inspector mijn classes aan, zodat ik kan zien wat ik verander? Ook hier heeft Windi aan gedacht. Pas je je HTML aan in de inspector, zal Windi on-the-fly de classes toevoegen aan de head van je pagina., een onmisbare feature.

![Windi CSS](/assets/css-frameworks/windi-css.png)
<i><span style="font-size: .75em;">Windi homepage. 2021-09-06</span></i>
### Aan de slag!

Beide frameworks zijn geschikt voor meerdere build tools, andere frameworks en IDE ondersteuning.

 - [Tailwind CSS install](https://tailwindcss.com/docs/installation)
 - [Windi CSS install](https://windicss.org/guide/installation.html)

