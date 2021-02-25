---
title: 'Phaser'
comments: true
author: eline
date: 2020-02-15
---

### Wat is Phaser?

Kort gezegd is Phaser een gameframework waarmee je HTML-5 games kan maken. Deze games kunnen gespeeld worden op desktop en mobiel. Phaser kan gratis gedownload worden via https://phaser.io/ en is ontwikkeld door Photon Storm in 2013.

Om gebruik te maken van Phaser is het handig als je al enige kennis hebt van HTML en JavaScript. Phaser is namelijk een JavaScript bibliotheek, wat dus betekent dat je de game volledig hierin bouwt. Phaser maakt het mogelijk voor beginners en gevorderden om een eigen interactieve en leuke game te maken. Verder heeft het veel verschillende functies, zelf te veel om allemaal te benoemen. Dit is ook een van de redenen waarom het zo geliefd is bij game ontwikkelaars. 

### Phaser game maken

Het begint allemaal bij je HTML bestand waar je Phaser oproept in je head, met de volgende code:

```
 <script src="https://cdnjs.cloudflare.com/ajax/libs/phaser-ce/2.12.0/phaser.min.js"></script>
```
Na dit gedaan te hebben maak je een JavaScript bestand aan en roep je de game op met:

```
 window.onload = function(){

    var game = new Phaser.Game(800, 600, Phaser.AUTO, "", {
        preload: preload,
        create: create,
        update: update
  });
```

De eerste twee parameters 800 en 600 staan voor de lengte en de breedte van het canvas van de game. Verder heeft elke game een preload, create en update functie. 

Phaser zoekt automatisch naar de preload functie wanneer de game gestart is. Hij laadt dan alles wat in deze functie staat. Je kunt je images, spritesheets, sounds, etc. in laden door gebruik te maken van game.load. Een bijvoorbeeld hiervan is game.load.image("Titel die je de afbeelding wil geven", "De map waar de afbeelding in staat/het bestandsnaam", Lengte, Breedte);.
```
game.load.image("cadeau", "assets/cadeautje.png", 64, 64);
```

De create funcite is het belangrijk dat je bovenaan begint met de volgende code:
```
 game.physics.startSystem(Phaser.Physics.ARCADE);
```
Ook creeër je hier alle assets die je in de preload functie hebt ingeladen. Deze laat je in door game.add.image(Lengte waar je de image wil plaatsen, Hoogte waar je de image wil plaatsen, "De naam die je de afbeelding gegeven hebt");.
```
game.add.image(400, 300, "cadeau");
```
Naast alle assets kan je hier ook ander functies creeëren. Het zijn er te veel om allemaal op te noemen, dus hier zijn er een paar:
* Physics toevoegen 
    * Zwaartekracht
    * Stuitering 
* Verschillende lagen toevoegen
* Een achtergrond toevoegen
* Ervoor zorgen dat je player niet van het spel valt
* Je player laten bewegen door gebruik van pijltjes toetsen
* Andere functies aanroepen

Update functie

