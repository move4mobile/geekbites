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
game.load.image("player", "assets/player.png", 64, 64);
```

De create funcite is het belangrijk dat je bovenaan begint met deze code, omdat dit ervoor zorgt dat je physics aan de game kan toevoegen. 
```
 game.physics.startSystem(Phaser.Physics.ARCADE);
```
Ook creeër je hier alle assets die je in de preload functie hebt ingeladen. Deze laat je in door game.add.image(Lengte waar je de image wil plaatsen, Hoogte waar je de image wil plaatsen, "De naam die je de afbeelding gegeven hebt");. Het is wel belangrijk om alles op volgorde te creëren. Dus als je het cadeautje op de achtergrond wil plaatsen zet je het in de volgende volgorde:
```
game.load.image("background", "assets/background.png", 800, 600);
game.add.image(400, 300, "player");
```
Naast alle assets kan er nog veel meer gedaan worden in de create functie. Het zijn er te veel om allemaal bij langs te gaan, dus hier zijn er een paar:
* Physics toevoegen 
    * Zwaartekracht
    * Stuitering 
    * Snelheid
* Verschillende lagen toevoegen
* Een achtergrond toevoegen
* Ervoor zorgen dat je player niet van het spel valt
* Andere functies aanroepen

Nog een belangrijk stukje code dat in de create functie toegevoegd moet worden is:
```
cursors = this.input.keyboard.createCursorKeys();
```
Dit vult namelijk de cursors-object met vier eigenschappen: omhoog, rechts, links en omlaag. Om ervoor te zorgen dat de player echt kan lopen en springen moet de volgende code worden toegevoegd aan de update functie.
```
if (cursors.left.isDown)
​
    player.setVelocityX (-160);

    player.anims.play ('left', true);
​
else if (cursors.right.isDown)
​
    speler.setVelocityX (160);

    player.anims.play ('right', true);
​
anders
​
    player.setVelocityX (0);

    player.anims.play ('beurt');
​

if (cursors.up.isDown && player.body.touching.down)
​
    player.setVelocityY (-330);
```

Daarnaast kan er in de update functie ook collide gebruikt worden. Collide zorgt ervoor dat de player op een bepaalde platform kan staan en er niet doorheen gaat. 

