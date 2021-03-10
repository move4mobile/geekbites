---
title: 'Phaser'
comments: true
author: eline
min_read: 5
date: 2021-03-09
---

### Wat is Phaser?
Kort gezegd is [Phaser](https://phaser.io/) een gameframework waarmee je HTML-5 games kan maken. Deze games kunnen gespeeld worden op desktop en mobiel. Phaser kan gratis gedownload worden via https://phaser.io/ en is ontwikkeld door Photon Storm in 2013.

Om gebruik te maken van Phaser is het handig als je al enige kennis hebt van html en javascript. Phaser is namelijk een javascript library, wat dus betekent dat je de game volledig hierin bouwt. Phaser maakt het mogelijk voor beginners en gevorderden om een eigen interactieve en leuke game te maken. Verder heeft het veel verschillende functies, zelfs te veel om allemaal te benoemen. Dit is ook een van de redenen waarom het zo geliefd is bij game ontwikkelaars. 

### Opzetten van een Phaser game
Het begint allemaal bij je html bestand waar je Phaser aanroept in je head, met de volgende code: 
```
<script src="https://cdnjs.cloudflare.com/ajax/libs/phaser-ce/2.12.0/phaser.min.js"></script>
```
Na dit gedaan te hebben maak je een javascript bestand aan en roep je de game aan met:
```
window.onload = function(){
    var game = new Phaser.Game(800, 600, Phaser.AUTO, "", {
        preload: preload,
        create: create,
        update: update
  }); 
```
Als weergavecontext voor de game kan er gekozen worden voor Phaser.CANVAS, Phaser.WEBGL of Phaser.AUTO. De aanbevolen waarde om te gebruiken is Phaser.AUTO, omdat deze automatisch gebruik maakt van datgene dat door de browser ondersteunt wordt. 

Wanneer je toch wil kiezen voor WEBGL of CANVAS is het goed om de verschillen te weten. Uit onderzoek (Pedamkar, 2021) blijkt dat een van de verschillen is dat WEBGL een stuk sneller is dan CANVAS. Daarnaast wordt WEBGL door meer browsers ondersteunt en is vooral bedoelt voor 3D, maar kan ook gebruikt worden voor 2D. Daarentegen kan CANVAS alleen gebruikt worden voor 2D weergave. CANVAS is dan ook de voorloper van WEBGL, want WEBGL is voortgekomen uit CANVAS 3 experimenten.

Verder staat de 800 voor de width en de 600 voor de height. Dit is de canvasgrootte van de game. 

#### Preload functie
Verder heeft elke game een preload, create en update functie, waarmee je het spel maakt. Wanneer de game start, zoekt Phaser automatisch naar de preload functie en laadt alles wat daar in staat. In de preload roep je alle ‘’game.load’’ aan om een wachtrij voor de lader op te bouwen. 

#### Create functie
Zodra het laden van de preload functie klaar is wordt de create functie automatisch gestart. In de create functie staat het grootste deel van de set-upcode. Het is belangrijk om te weten dat de game objecten worden weergegeven in de volgorde waarin ze worden aangemaakt. Je kan zelf kiezen waar je objecten op het canvas wil plaatsen. Dit doe je door ook de variabelen width en height aan ze mee te geven. Het is zelfs mogelijk om het object buiten de 0, 0 tot 800, 600 te plaatsen. Je kan het object dan niet zien maar het zal nog steeds binnen de scene aanwezig zijn. Met het camerasysteem van Phaser 3 is het mogelijk om met een actieve camera je in het spel te verplaatsen en in en uit te zoomen. 

#### Update functie
Ten slotte de update functie, deze wordt vooral gebruikt om ervoor te zorgen dat de player zich kan verplaatsen, de zwaartekracht te bepalen en om botsingen met andere objecten te controleren. Deze botsingen controleren is belangrijk, want anders valt hij door de ondergrond heen. Om de speler met de ondergrond te laten botsen, moet je een collider object aanmaken. Dit doe je door dit in je update functie te zetten
```
this.physics.add.collider (speler, ondergrond); 
```

### Belangrijke bronnen

* [Making your first Phaser 3 game](https://phaser.io/tutorials/making-your-first-phaser-3-game/part1)
* [WebGL vs Canvas](https://www.educba.com/webgl-vs-canvas/)
