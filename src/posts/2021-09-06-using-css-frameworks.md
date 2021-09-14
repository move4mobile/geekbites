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

Veel websites, webwinkels en blogs maken gebruik van een CSS framework. Erg populair is nog altijd Twitter Bootstrap. Een ervaren webdesigner / frontender herkent het direct zonder in de code te hoeven kijken. Grafisch gezien lijken ze namelijk vaak sterk op elkaar. Bootstrap is snel inzetbaar en je hebt in no-time een responsive website staan. Zelf de source downloaden en Bootstrap builden wordt helaas nog vaak overgeslagen. Men plakt de productie CDN link in de head en de overrides worden er aan toegevoegd. Er kleven hier echter een aantal nadelen aan. Vaak wordt er maar een klein deel van de hele library gebruikt, terwijl de browser de volledige stylesheet in moet laden. "Eénmaal in je cache, geladen met 5G maakt toch niet uit?" zullen sommigen zeggen. Toch gaat dit ten kosten van de performance en de UX; verspringende fontsizes en kleuren zie ik helaas nog te vaak.

<figure>
    <img src="/assets/css-frameworks/bootstrap.png" alt="Bootstrap">
    <figcaption>Bootstrap website. 2021-09-06</figcaption>
</figure>

Ikzelf ben lang weggebleven bij Bootstrap, met de overtuiging alleen te schrijven wat de browser nodig heeft. Niets meer en niets minder. 

Tegenwoordig zijn er slimme oplossingen bedacht om toch gebruik te maken van een CSS framework, met alleen de styling die daadwerkelijk nodig is. Een tweetal die ik hier uit wil lichten is **Tailwind CSS** en **Windi CSS**.

## Het concept

Het idee is dat je je html schrijft met de classes die je nodig hebt voor je designs en componenten. Tijdens development heb je alle classes tot je beschikking. Een responsive grid, tools, spacing, backgrounds, kleuren, vormen, animaties, noem het maar op. Op het moment dat je gaat builden voor productie, worden de aangegeven templates gescand en wordt er een CSS bestand gegenereerd met alleen de classes die je gebruikt hebt. Resultaat: een optimale stylesheet van slechts enkele kilobytes!

### Tailwind

 De Tailwind CSS library kan wel oplopen tot 12Mb (unminified), dus je zult begrijpen dat er echt heel veel beschikbaar is. Een groot nadeel was dat tijdens development de gehele stylesheet in de browser geladen werd. Er zat zoveel in dat sommige browsers 'laggy' werden en soms zelfs vastliepen! Vanaf versie 2.1 is dit opgelost door een JIT-compiler. [Bekijk het filmpje op deze pagina.](https://tailwindcss.com/docs/just-in-time-mode) 
 
Nu kan je alleen nog geen classes toevoegen in de inspector, als ze niet aanwezig zijn. Een ander nadeel is dat je soms erg lange class names krijgt in je html. Qua leesbaarheid wordt het daar niet beter van. Hier heeft **Windi CSS** de oplossingen voor.

<figure>
    <img src="/assets/css-frameworks/tailwindcss.png" alt="Tailwind CSS">
    <figcaption>Tailwind website. 2021-09-06</figcaption>
</figure>

### Windi

Net als Tailwind, worden tijdens development alleen de classes gegeneerd die je gebruikt, in plaats van de hele bibliotheek. Maar dan vraag je je af: hoe pas ik dan in de inspector mijn classes aan, zodat ik kan zien wat ik verander? Hier heeft Windi gelukkig aan gedacht. Voeg 'virtual:windi-devtools' aan je main entry. Pas je nu de HTML aan in de inspector, zal Windi on-the-fly de classes toevoegen aan de head van je pagina, een onmisbare feature.

Om classes leesbaarder te houden, kan er gebruik gemaakt worden van handige [shortcuts](https://windicss.org/features/shortcuts.html). Je voegt eenmalig een custom classname toe aan de config met hierin de verzameling van de benodigde classes. Ook is het erg eenvoudig om [varianten](https://windicss.org/features/variant-groups.html) te gebruiken.

https://windicss.org

<figure>
    <img src="/assets/css-frameworks/windi-css.png" alt="Windi CSS">
    <figcaption>Windi homepage. 2021-09-06</figcaption>
</figure>

## Aan de slag!

Beide frameworks zijn geschikt voor meerdere build tools, andere frameworks en IDE ondersteuning.

 - [Tailwind CSS install](https://tailwindcss.com/docs/installation)
 - [Windi CSS install](https://windicss.org/guide/installation.html)

