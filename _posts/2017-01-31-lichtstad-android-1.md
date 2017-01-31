---
layout: post
title: Lichtstad Android - Deel 1
category: android-development
tags: android, ontwikkeling, Gramsbergen, lichtstad
comments: true
author: wilco
min_read: 3
---

De Oranjevereniging van Gramsbergen organiseert elk jaar in de laatste week van augustus [Gramsbergen Lichtstad](http://gramsbergen.nl/index.php/oranjevereniging/gramsbergen-lichtstad), hét evenement van Gramsbergen. Dit jaar  vindt het evenement plaats van 25 augustus tot en met 2 september.  
Gramsbergen Lichtstad ontleent haar naam aan de door met tienduizenden lampjes verlichte en versierde straten. Verder is de week volgepakt met activiteiten, waaronder een dweilorkestenfestival, achtkamp, hardloopwedstrijd en kermis. De week wordt afgesloten door een versierde wagenoptocht en fantastische vuurwerkshow. De feestweek houdt zich aan een tweejarig thema. Dit jaar en volgend jaar zal dat zijn _Fout_.

Ons is gevraagd een app te maken die de bezoekers van Gramsbergen Lichtstad kunnen gebruiken om informatie en foto's te bekijken. In deze serie zullen we de stappen die we nemen beschrijven om een duidelijker beeld te geven van wat de ontwikkeling van een app inhoudt. Hoewel er een Android- en iOS-app zullen worden gebouwd, zal deze serie zich focussen op de Androidapplicatie. Deze blogs zullen soms wat technische stukken zullen bevatten, maar de tekst zal hopelijk goed te volgen zijn.

![Opening Gramsbergen Lichtstad](/assets/lichtstad-1.jpg)

## Eisen
Het belangrijkste om mee te beginnen is het op papier zetten van de eisen waaraan de app moet voldoen. Dit kunnen functionele eisen zijn, zoals _Het moet mogelijk zijn het programma te bekijken_, maar ook niet-functionele eisen, zoals _De app moet offline bruikbaar zijn_. De eisen zijn opgeschreven als user story's, zodat duidelijk is vanuit welk oogpunt gekeken moet worden. Ook wordt hierdoor duidelijker wat het doel is van de eis. Om de eisen op te stellen hebben wij al om tafel gezeten met Erika Kuiper, die de PR-activiteiten voor de Oranjevereniging regelt.  
Hieruit is het volgende lijstje komen rollen:

* Als bezoeker wil ik het programma van Gramsbergen Lichtstad kunnen inzien, zodat ik te allen tijde weet wat waar wanneer plaatsvindt.
* Als bezoeker wil ik de uitslagen van de activiteiten kunnen bekijken, zodat ik in de kroeg kan bekijken of ik reden heb harder te feesten.
* Als bezoeker wil ik de foto's en video's die tijdens de week worden gemaakt kunnen bekijken, zodat ik een indruk krijg van de sfeer van de festiviteiten.
* Als bezoeker wil ik de app offline kunnen gebruiken, zodat ik weet wat er heeft plaatsgevonden en plaatsvindt zonder databundel.
* De applicatie moet beschikbaar zijn op Android en iOS.
* Verder is het belangrijk dat de app simpel is in gebruik, zodat ook mensen die minder handig zijn met hun telefoon het programma en de foto's kunnen inzien.

## Technieken
Nu we de eisen op een rijtje hebben, is het belangrijk te bepalen welke technieken we zullen gebruiken bij het ontwikkelen. Omdat wij graag volledige vrijheid willen in de onderdelen die we gebruiken en een zo vloeiend mogelijke ervaring willen bieden, zullen we de app _native_ bouwen. Dat wil zeggen dat we de componenten zullen gebruiken zoals ze door Android aangeboden worden en geen (web)abstractielaag zullen gebruiken.

#### Firebase
Om aan de eis van offlinefunctionaliteit te voldoen, zullen we gebruik maken van [Firebase](https://firebase.google.com). Firebase is een ontwikkelplatform van Google dat veel hulpmiddelen biedt voor het maken van een app. Het relevante onderdeel is in dit geval de _Realtime Database_. Dit is een databasepakket dat er uit zichzelf voor zorgt dat de gegevens in de app en op de server gelijk blijven. Verder is met een paar regels code in te stellen dat de gegevens ook offline beschikbaar zijn.

#### Data-binding
De gegevens die we van de server aangeboden krijgen moeten natuurlijk ook worden getoond. Hiervoor zullen we de [data-bindinglibrary](https://developer.android.com/topic/libraries/data-binding/index.html) van Google gebruiken. Dit zorgt ervoor dat we de gegevens makkelijk kunnen koppelen aan de gebruikersinterface. Doordat we hier minder regels code voor hoeven te schrijven, zal dit hopelijk ook bugs (_fouten_) schelen.

## Tot slot
Met deze punten vastgesteld kunnen we ons richten op het echte ontwikkelen. Het verhaal van vandaag zal ongetwijfeld redelijk abstract geklonken hebben, dus volgende keer: het grafisch ontwerp.