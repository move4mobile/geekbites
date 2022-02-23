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

Als webdeveloper kan het je tegenwoordig haast niet ontgaan zijn, het Laravel framework. Een populair framework geschreven in PHP voor het ontwikkelen van web applicaties. Met Laravel kan je zowel een losse API als een complete full-stack applicatie ontwikkelen. Zo heeft Laravel een heleboel standaard functionaliteiten zoals een ORM, dependency injection, queues en scheduled jobs. Daarnaast kan er met een extra package en enkele commands een compleet authenticatie systeem gegenereerd worden. Hierdoor is het een zeer geschikt framework voor de snelle realisatie van een proof of concept applicatie.

Echter komen met al deze functionaliteiten ook de nodige tools bij kijken die je moet installeren op je machine. Zo heb je in elk geval PHP en Composer nodig en ontkom je eigenlijk ook niet aan een database als MySQL. Als de applicatie eenmal iets uitgebreider wordt kom je ook al snel dingen tegen als NPM, NodeJS en Redis. Uiteindelijk zorgt dit ervoor dat iedereen in het team en op de productie omgeving vanalles moet installeren en vervolgens ook nog dezelfde versie moet draaien. Hierdoor loop je al snel het risico dat je het welbekende probleem tegenkomt: "maar op mijn machine werkt het gewoon hoor".

<figure style="display: flex; align-items: center">
    <img src="/assets/laravel-en-docker/but-it-works-on-my-machine.jpg" alt="But it works on my machine" style="max-width: 50%;">
</figure>

## Docker? Eerst nog even iets anders

Als oplossing voor dit probleem hadden de developers van Laravel al snel een oplossing. Virtuele Machines!

Met een Virtuele Machine werd dit probleem van verschillende ontwikkel- en productieomgevingen opgelost voordat Docker de standaard was. Laravel heeft hiervoor de Homestead package ontwikkeld. Dit is een Vagrant box voorverpakt met alle tools die je die je in je dagelijkse Laravel development tegenkomt. Vagrant is hierin de tool voor het beheren van virtuele machines in combinatie met VirtualBox of Parallels. Hierdoor had elke developer dezelfde ontwikkelomgeving en hoefde deze alleen nog maar nagebouwd te worden op de productieomgeving.

Deze oplossing werkt in principe prima alleen is het probleem dat een Virtuele machine relatief zwaar is wat betreft hardwaregebruik. Voor elke applicatie heb je een nieuwe VM nodig en uiteindelijk neemt dit ook wel de nodige opslagruimte in beslag. Het werkt maar is niet de ideale oplossing.

## Docker, dé oplossing!

Docker bied voor het probleem van hardwaregebruik en snelheid de ideale oplossing. Docker is een platform voor het beheren van container applicaties. De containers zijn een stuk minder zwaar in gebruik dan virtuele machines. Daarnaast zijn containers snel en zijn ze makkelijk uitbreidbaar. Voor een uitgebreide vergelijking tussen containers en virtuele machines raad ik [dit artikel](https://www.burwood.com/blog-archive/containerization-vs-virtualization) aan.

Uiteindelijk heeft Laravel hiervoor ook een package gemaakt genaamd Sail. Hiermee kan de hele stack die voor Laravel nodig is gebruikt wordon zonder zelf ook maar iets te installeren. Het enige wat je nodig hebt is een Docker installatie en wanneer er Windows gebruikt wordt WSL2 (Windows Subsystem for Linux)

## Aan de slag!

Nu gaan we daadwerkelijk aan de slag een een Laravel project opzetten met Docker. Zorg ervoor dat je Docker en Docker Compose hebt geinstalleerd. Bij Windows en macOS zit Docker Compose standaard bij je Docker Dekstop installatie. Alleen voor een Linux OS is het noodzakelijk Docker Compose apart te installeren. Voor de installatie instructies van Docker zie de [Docker Docs](https://docs.docker.com/desktop/)

### Aanmaken project

Start een terminal op en voer de commando hieronder uit.

_Let op: als Windows gebruiker moet je in de WSL terminal zitten door `wsl` uit te voeren in PowerShell of Command Prompt_

```bash
curl -s https://laravel.build/voorbeeld-app | bash
```

Deze commando maakt een nieuw Laravel project aan in de map `voorbeeld-app` en installeerd alle Composer dependencies. Uiteraard kan de tekst `voorbeeld-app` veranderd worden naar de naam van je project.

Ga vervolgens naar de map van je nieuwe project door de volgende commando te doen:

```bash
cd voorbeeld-app
```

Vanuit deze map kan de applicatie gestart worden in Docker. Dit gebeurd met de volgende commando:

```bash
./vendor/bin/sail up
```

Nu worden alle Docker images gedownload de containers gestart. Als alles goed is verlopen zou het project beschikbaar moeten zijn op `localhost`. Ga naar de browser en typ localhost in de url balk om dit te verifieren. Als het goed is is nu het volgende scherm te zien.

<figure>
    <img src="/assets/laravel-en-docker/succesvolle-laravel-app.png" alt="Laravel hoofdscherm">
</figure>

Gefeliciteerd, je hebt nu een Laravel applicatie draaien en kan aan de slag om een prachtige applicatie te ontwikkelen!🎉

### Dependencies installeren vanuit een git repository

Het kan natuurlijk voorkomen dat jij niet degene bent die een nieuw project opzet in het team. Je zal dan hoogstwaarschijnlijk het project clonen via git alleen ontbreken vervolgens alle dependencies. Ook hier is aan gedacht en er is daar ook een commando voor.

```bash
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/var/www/html \
    -w /var/www/html \
    laravelsail/php81-composer:latest \
    composer install --ignore-platform-reqs
```

Deze commando zal een aparte docker container aanmaken (en vervolgens ook verwijderen) en vanuit daar alle Composer dependencies installeren zodat je zelf geen Composer hoeft te installeren op je eigen machine.

## Verder lezen

Ben je nou nieuwschierig geworden naar Laravel of Docker? Kijk dan eens op de volgende sites.

- [Laravel](https://laravel.com/)
- [Laracasts](https://laracasts.com/)
- [Docker](https://www.docker.com/)
