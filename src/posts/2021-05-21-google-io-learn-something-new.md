---
title: "Google I/O '21: leer eens iets nieuws"
category: inspiration
tags: googleio, technology, codelab, workshop
comments: true
author: michael
min_read: 8
date: 2021-05-21
permalink: /2021/05/21/google-io-learn-something-new/
---

<!-- Section: Intro -->

Het is de week van Google I/O, een week vol inspiratie waarin Google de laatste (technische) snufjes en ontwikkelingen met ons deelt. Dit is een aangewezen kans om **je eigen kennis te verbreden of nieuwe skills te ontwikkelen**.

<!-- Section: Over Google I/O -->

### Wat is Google I/O?

[Google I/O](https://events.google.com/io/) is het grootste (3-daagse) developers event van Google, live vanuit [Mountain View (California)](<https://nl.wikipedia.org/wiki/Mountain_View_(Santa_Clara_County)>). Dit jaarlijkse evenement is dit jaar voor het eerst volledig virtueel.

Het evenement is gevuld met keynotes, sessies, workshops en meer. Er is zelfs een virtuele wereld ([Google I/O Adventure](https://events.google.com/io/adventure?lng=en)) waarin je met andere developers en Googlers kan connecten.

![Google I/O Adventure](/assets/io-codelabs/io21-adventure.png)

Het evenement opent ieder jaar met de **Google I/O Keynote** voor het bredere publiek. Tijdens deze keynote worden de belangrijkste (mainstream) ontwikkelingen gepresenteerd. Daarna volgt, traditioneel gewijs, de **Developer Keynote** welke meer gericht is op developers (software ontwikkelaars). Hieron wordt dieper ingegaan op de technische ontwikkelingen.

Diverse onderwerpen komen voorbij, zoals Firebase, Accessibility, Android en nog veel meer.

![Google Products](/assets/io-codelabs/io21-products.png)

Bekijk de [event website](https://events.google.com/io/program/discover/) om het volledige programma te verkennen.

<!-- Section: Workshops & Codelabs -->

### Google Workshops & Codelabs

Het is tijdens het evenement ook mogelijk om deel te nemen aan een of meerdere workshops. Iedere workshop wordt verzorgt door een Googler en neemt ongeveer een uur in beslag. Letterlijk voor ieder product of onderwerp is er wel een workshop beschikbaar. Kijk maar eens op de website onder het kopje [Learning Lab](https://events.google.com/io/learning-lab/?lng=en).

![Google I/O Workshops](/assets/io-codelabs/io21-workshops.png)

Meestal gaat de workshop gepaard met een verwante **Google Codelab**. Een Google Codelab is niks anders dan een tuturial of instructie waarmee je zelf, stap-voor-stap, een kleine applicatie of feature kan bouwen. Google stelt diverse codelabs beschikbaar op [codelabs.developers.google.com](https://codelabs.developers.google.com/) (gratis).

### Tijd om iets (nieuws) te leren!

De beste manier om technische skills te ontwikkelen, is door gewoon te doen. En een leuke manier om nieuwe trends te ontdekken, is door gewoon een workshop buiten je directe expertise te pakken (bijvoorbeeld Machine Learning of Flutter).

Hier zijn enkele suggesties op een rij:

<!-- prettier-ignore-start -->
| Workshop | Onderwerp | &nbsp; |
| - | - | - | - |
{% 
    for item in io21_workshops 
%} | [{{ item.title }}]({{ item.url }}) | {{ item.topic }} | [video]({{ item.video_url }})&nbsp;&middot;&nbsp;[codelab]({{ item.codelab_url }}) |
{% 
    endfor 
%}
<!-- prettier-ignore-end -->

**Bonus**: maak eerst even een [Google Developer Profile](https://developers.google.com/profile) aan en ontvang na het afronden van je eerste codelab, een badge.

Dit zijn een aantal interessante ontwikkelingen die je in een workshop voorbij kan zien komen:

- **Flutter** ken je waarschijnlijk al van cross-platform ontwikkeling voor Android en iOS. Wist je ook dat je nu met Flutter vanuit dezelfde codebase, ook kan ontwikkelen voor Desktop (Windows/Mac/Linux/ChromeOS) en Web?

- **Vertex AI**: een nieuw (managed) _machine learning_ platform van Google Cloud. In de workshop wordt ingegaan op de tooling, waarmee je zelf model kan trainen en uitrollen met Vertex AI.

- **App Actions & Google Assistant**: open een _feature_ van je Android app, direct via Google Assistant. Neem als voorbeeld de app BookMyDesk (om handige app om werkplek te reserveren op kantoor). Zou het dan niet makkelijk zijn, als je gewoon tegen Google Assistant zou kunnen zeggen "Hey Google, reserveer een werkplek voor morgen." ?

- **Project Fugu**: dit is projectnaam voor een verzameling moderne (en toekomstige) web browser API's. Wist je dat je vanaf je mobiele browser, de _native_ deelfunctie van je mobiel kan aanroepen?

Hopelijk ben je hiermee geinspireerd geraakt zelf ook een workshop of codelab te volgen. **Welke wordt het?**

<!-- Section: Externe links en referenties -->

### Externe links

- [Bekijk de Google I/O Keynote](https://www.youtube.com/watch?v=XFFrahd05OM)
- [Google I/O website](https://events.google.com/io/?lng=en)
- [Google Developers](https://developers.google.com/)
- [web.dev](https://web.dev/)
