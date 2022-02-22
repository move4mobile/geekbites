---
title: 'Laravel & Docker'
category: inspiration
tags: new blogpost
comments: true
author: sander
min_read: 5
date: 2022-02-22
permalink: /2022/02/22/laravel-en-docker/
---

Als webdeveloper kan het je tegenwoordig haast niet ontgaan zijn, het Laravel framework. Een populair framework geschreven in PHP voor het ontwikkelen van web applicaties. Met Laravel kan je zowel een losse API als een complete full-stack applicatie ontwikkelen. Zo heeft Laravel een heleboel standaard functionaliteiten zoals een ORM dependency injection, queues en scheduled jobs. Daarnaast kan er met een extra package en enkele commands een compleet authenticatie systeem gegenereerd worden. Hierdoor is het een zeer geschikt framework voor de snelle realisatie van een proof of concept applicatie.

Echter komen met al deze functionaliteiten ook de nodige tools bij kijken die je moet installeren op je machine. Zo heb je in elk geval PHP en Composer nodig en ontkom je eigenlijk ook niet aan een database als MySQL. Als de applicatie eenmal iets uitgebreider wordt kom je ook al snel dingen tegen als NPM, NodeJS en Redis. Uiteindelijk zorgt dit ervoor dat iedereen in het team en op de productie omgeving vanalles moet installeren en vervolgens ook nog dezelfde versie moet draaien. Op deze manier loop je al snel het risico dat je het welbekende probleem tegenkomt als "maar op mijn machine werkt het gewoon hoor".

<figure style="display: flex; align-items: center">
    <img src="/assets/laravel-en-docker/but-it-works-on-my-machine.jpg" alt="But it works on my machine" style="max-width: 50%;">
</figure>

## Docker? Eerst nog even iets anders

Als oplossing voor dit probleem hadden de developers van Laravel al snel een oplossing. Virtuele Machines!

Met een Virtuele Machine werd dit probleem van verschillende ontwikkel- en productieomgevingen opgelost voordat Docker de standaard was. Laravel heeft hiervoor de Homestead package ontwikkeld. Dit is een Vagrant box voorverpakt met alle tools die je die je in je dagelijkse Laravel development tegenkomt. Vagrant is hierin de tool voor het beheren van virtuele machines in combinatie met VirtualBox of Parallels. Hierdoor had elke developer dezelfde ontwikkelomgeving en hoefde deze alleen nog maar nagebouwd te worden op de productieomgeving.

Deze oplossing werkt in principe prima alleen is het probleem dat een Virtuele machine relatief zwaar is wat betreft hardwaregebruik. Voor elke applicatie heb je een nieuwe VM nodig en uiteindelijk neemt dit ook wel de nodige opslagruimte in beslag. Het werkt maar is niet de ideale oplossing.

## Docker, dé oplossing!

Laravel:

- mooi framework
  - community (guides & video tutorials)
  - veel Features (auth, ORM, dependency injection, queues, scheduled jobs)
  - makkelijk een proof of concept maken
  - zowel losse api's als full-stack
- heleboel tools eromheen nodig zoals php, composer, database, redis
- dat installeren en up to date houden is niet handig

Oplossing: vagrant, homestead en virtualbox

- voordeel dat je niet meer local dingen hoeft te installeren
- is alleen langzaam, en neemt veel ruimte in beslag

Uiteindelijke oplossing: Docker

- WSL nodig
- Snel, makkelijk
- Goed uitbreidbaar
- Kan beter afgestemd worden met production omgeving
- Wanneer je git clone doet, alles installeren

Dit kan natuurlijk ook goed toegepast worden voor andere omgevingen, maar dat is natuurlijk ook de essentie van docker.

https://docs.docker.com/desktop/windows/install/
https://laravel.com/docs/
https://laracasts.com/
