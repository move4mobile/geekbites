---
title: 'Aan de slag met Stencil'
tags: Stencil, Web Components, Design System
comments: true
author: danny
min_read: 4
date: 2020-01-27
---

### Wat is Stencil?

[Stencil](https://stenciljs.com/docs/introduction) is een compiler die Web Components (Custom Elements v1) genereert. Stencil combineert de beste concepten van de meest populaire frameworks in een simpele tool.

Stencil maakt gebruik van features zoals:

- Virtual DOM
- Async rendering
- Reactive data-binding
- TypeScript
- JSX

Stencil is ontwikkeld door het Ionic framework team.

### Browser Support

Stencil bouwt Web Components die te gebruiken zijn in de populaire desktop en mobile browsers. Voor de browsers die geen ondersteuning bieden voor Custom Elements v1 (de API waarop Web Components zijn gebaseerd) maakt Stencil gebruik van polyfills.
Stencil maakt hiervoor gebruik van een dynamic loader die de polyfill alleen inlaadt in browsers die het nodig zijn.

![verbindingen](/assets/stencil-getting-started/stencil-browsersupport.png)

### Getting Started

Stencil vereist een recente LTS versie van NodeJS en npm (npm 6 of hoger). Zorg er dus voor dat deze geïnstalleerd of up to date zijn voordat je verdergaat. Als je dat gedaan hebt initialiseer je een stencil project als volgt:

```
 npm init stencil
```

Stencil kan gebruikt worden om losstaande componenten of gehele applicaties te maken. Na het uitvoeren van het hierboven weergegeven script krijg je de optie om het type project te kiezen.
De keuzes zijn hieronder weergegeven, deze blog gaat echter over de optie _component_.

```
  ionic-pwa       Everything you need to build fast, production ready PWAs
  app             Minimal starter for building a Stencil app or website
> component       Collection of web components that can be used anywhere
```

#### Stencil Installation

Zorg ervoor dat je binnen de directory zit van het gegenereerde project, voer daarna het volgende script uit om de laatste versie van Stencil te installeren:

```
 npm install @stencil/core@latest --save-exact
```

#### Component Generator

Nu beschik je over een standaard component Stencil project met een basic my-first-component.
Nu kan je de basic component verwijderen en je eigen component genereren, dit doe je als volgt:

```
 npm run generate
```

Naast het uitvoeren van het generate script kan je ook de Stencil CLI aanroepen om dit te doen:

```
 stencil generate
```

Alle gegenereerde componenten zijn terug te vinden in de _src/components_ folder.

Gefeliciteerd! Je hebt nu een basic component Stencil project opgezet! Voor meer informatie over Stencil klik dan [hier](https://stenciljs.com/docs/getting-started).
