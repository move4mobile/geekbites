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

Laravel:

- mooi framework
  - community (guides & video tutorials)
  - veel Features
  - makkelijk een proof of concept maken
  - zowel api's als monolith
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
