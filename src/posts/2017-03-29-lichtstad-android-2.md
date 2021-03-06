---
title: 'Het bouwen van Lichtstad Android - Deel 2: Grafisch Ontwerp'
category: android-development
tags: android, ontwikkeling, development, Gramsbergen, lichtstad
comments: true
author: wilco
min_read: 3
date: 2017-03-29
permalink: /2017/03/29/lichtstad-android-2/
---

Na lang wachten is het er dan eindelijk: het grafisch ontwerp. In de rest van deze serie zal dit _design_ genoemd worden. Dit design is onstaan uit een samenwerking van onze designers Ellen en Matthijs. Nu is het aan ons ontwikkelaars om dit design om te zetten in een werkende app.   

De applicatie zal bestaan uit vier onderdelen: Programma, Uitslagen, Foto's en Video's. Elk onderdeel heeft zijn eigen opvallende kleur, zodat de gebruiker goed ziet van welk onderdeel hij gebruik maakt. Tussen de onderdelen wisselen is mogelijk door op de knoppen in de tabbalk onderin het scherm te tikken. Verder heeft elk onderdeel een tabbalk bovenin het scherm om een selectie te doen op basis van de datum. De app zal openen op het linker onderdeel: Programma.

### Programma
<img alt="Ontwerp onderdeel programma" src="/assets/lichtstad-android-2/program.png" style="max-height: 50vh;"/>
Het onderdeel programma is in deze applicatie oranje. In dit onderdeel is het mogelijk het programma van de feestweek te bekijken. Bovenin kan worden gekozen voor welke datum de gebruiker het programma wil zien. Verder kan de gebruiker naar links en rechts vegen om van dag te wisselen. Van elk programmaonderdeel wordt standaard de titel, tijd en locatie getoond. Door op het vlak van het programmaonderdeel te tikken wordt ook een uitgebreidere omschrijving zichtbaar. Daarnaast wordt dan een klein plaatje getoond. Verder zal de gebruiker een programmaonderdeel als favoriet kunnen markeren door op het hartje te tikken. Hierdoor wordt het onderdeel zichtbaar in de lijst met favorieten, die bereikbaar is via het hartje rechtsbovenin het scherm.

### Uitslagen
<img alt="Ontwerp onderdeel uitslagen" src="/assets/lichtstad-android-2/result.png" style="max-height: 50vh;"/>
In het blauwe onderdeel uitslagen zijn de uitslagen van evenementen tijdens de feestweek te bekijken. Van elk evenement wordt een afbeelding en de naam getoond. Wanneer op een evenement wordt getikt zal de website van gramsbergen.nl worden geopend om de uitslagen te laten zien. Bovenin de tabbalk kan een jaar worden gekozen, zodat de uitslagen van meerdere jaren kunnen worden vergeleken.

### Foto's
<img alt="Ontwerp onderdeel foto's" src="/assets/lichtstad-android-2/photos.png" style="max-height: 50vh;"/>
De foto's van de feestweek kunnen worden bekeken in het rode onderdeel van de app. Wanneer het onderdeel wordt geopend is een lijst met fotoalbums zichtbaar. Bij elk fotoalbum wordt het aantal foto's en een foto uit het album getoond. Door de preview niet altijd dezelfde verhouding te geven wordt de lijst wat speelser. Door op een album te tikken zal deze worden geopend waardoor de lijst met foto's in het album zichtbaar wordt. Deze wordt in dezelfde stijl weergegeven.

### Video's
<img alt="Ontwerp onderdeel video's" src="/assets/lichtstad-android-2/videos.png" style="max-height: 50vh;"/>
Het laatste onderdeel van de app is het zwarte onderdeel video's. Hier zijn de video's die door de oranjevereniging zijn geüpload te zien. Wanneer op de video wordt getikt zal de youtube-app openen om de video af te spelen.

## Tot slot
Hopelijk geeft dit het beeld van de applicatie wat meer vorm. De volgende post in deze serie zal het eerste deel van de ontwikkeling bevatten.
