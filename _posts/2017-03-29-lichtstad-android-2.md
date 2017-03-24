---
layout: post
title: 'Het bouwen van Lichtstad Android - Deel 2: Grafisch Ontwerp'
category: android-development
tags: android, ontwikkeling, development, Gramsbergen, lichtstad
comments: true
author: wilco
min_read: 3
---

Na lang wachten is het er dan eindelijk: het grafisch ontwerp. In de rest van deze serie zal dit _design_ genoemd worden. Dit design is onstaan uit een samenwerking van onze designers Ellen en Matthijs. Nu is het aan ons ontwikkelaars om dit design om te zetten in een werkende app.  

De applicatie zal bestaan uit vier onderdelen: Programma, Uitslagen, Foto's en Video's. Elk onderdeel heeft zijn eigen opvallende kleur, zodat de gebruiker goed ziet van welk onderdeel hij gebruik maakt. Tussen de onderdelen wisselen is mogelijk door op de knoppen in de tabbalk onderin het scherm te tikken. Verder heeft elk onderdeel een tabbalk bovenin het scherm om een selectie te doen op basis van de datum. De app zal openen op het linker onderdeel: Programma.

## Programma
<img alt="Ontwerp onderdeel programma" src="/assets/lichtstad-android-2/program.png" style="max-height: 50vh;"/>
Het onderdeel programma is in deze applicatie oranje. In dit onderdeel is het mogelijk het programma van de feestweek te bekijken. Bovenin kan worden gekozen voor welke datum de gebruiker het programma wil zien. Verder kan de gebruiker naar links en rechts vegen om van dag te wisselen. Van elk programmaonderdeel wordt standaard de titel, tijd en locatie getoond. Door op het vlak van het programmaonderdeel te tikken wordt ook een uitgebreidere omschrijving zichtbaar. Daarnaast wordt dan een klein plaatje getoond. Verder zal de gebruiker een programmaonderdeel als favoriet kunnen markeren door op het hartje te tikken. Hierdoor wordt het onderdeel zichtbaar in de lijst met favorieten, die bereikbaar is door op het hartje rechtsbovenin het scherm.