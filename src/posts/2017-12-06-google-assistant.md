---
title: 'Apps ontwikkelen voor de Google Assistant'
category: Google Assistant
tags: Google, Assistant, Actions on Google, Dialogflow, Firebase,
comments: true
author: bart
min_read: 5
date: 2017-12-06
---
De [Google Assistant](https://assistant.google.com/), de digitale voice assistant van Google. In de US is het al een groot platform, en nu met de toevoeging van nieuwe ondersteunde talen begint het ook op te komen in andere landen. De meeste Move4Mobile medewerkers hebben ondertussen wel eens geprobeerd een gesprek aan te gaan met de Google Home, of werden juist gek van een ander die weer tegen de speaker stond te praten. Vaak gaat het gesprek niet verder dan een paar simpele voor gedefineerde commando’s, maar zo'n Assistant kan veel meer dan dat!

### Het Assistant platform

De Google Assistant is één van de vele voice assistants, van al deze assistants zijn Apple's Siri, Amazon's Alexa en Google's Assistant de meest populaire. Siri is echter niet uitbreidbaar met persoonlijke apps en Alexa is tot op heden alleen beschikbaar in de US. 
De Assistant staat open voor nieuwe apps en ondersteunt steeds meer talen, ook biedt deze vele functies aan, waaronder het bijhouden van een shopping-list, Netflix streamen naar je tv en simpele acties zoals het zetten van een alarm. Over deze functies ga ik het echter niet hebben, waar ik mij op ga richten is wat de Assistant nog niet uit zichzelf kan doen, maar wat jij de Assistant kan laten doen. Wanneer je wilt verbinden met een bestaande service of een apparaat dat nog niet ondersteund wordt is het mogelijk om zelf een app te schrijven voor de Assistant. Google biedt de mogelijkheid om je eigen "chat bot" app toe te voegen aan de Assistant. Wanneer je app eenmaal in de store staat kun je deze aanroepen via "OK Google, talk to $myAppName" waarna jouw app tevoorschijn komt en de conversatie overneemt. 

### Bouw je eigen app

Voor het maken van een Assistant app heb je een aantal dingen nodig:
1. Een [Actions on Google](https://developers.google.com/actions/) project
2. Een Webhook in een programmeertaal naar keuze (Node.js webhook gehost op Firebase Cloud Functions)
3. Een platform dat de logica van de conversatie verzorgt ([Dialogflow](https://dialogflow.com/))

De meest gebruikte platformen hiervoor zijn Firebase Cloud Functions in combinatie met de Firebase Realtime Database en Dialogflow voor de conversatielogica.
De meeste documentatie is gericht op het gebruik van deze platformen, ook hebben ze een goede integratie met Actions on Google en kan je met een druk op de knop je project deployen.

![verbindingen](/assets/google-assistant/intergratie.png)

Dialogflow handelt de response die die gebruiker geeft aan de Assistant. In Dialogflow kun je een aantal "intents" speciferen die gekoppeld zijn aan een bepaalde response van de gebruiker. Bij elk intent kun jij dan bepalen wat er wordt teruggestuurd naar de webhook, dit kan een string met de volledige response van de gebruiker zijn of slechts een paar woorden die voldoen aan de voorwaarden die jij hebt ingesteld. In de webhook wordt elk intent gekoppeld aan een functie die dan de response terug naar de assistant stuurt.

Als de app eenmaal werkt en je er een goed gesprek mee kan voeren, kun je ervoor kiezen om de app te deployen naar de Assistant store of om het als een test app te laten. Voor sommige (privé)projecten kan het handiger zijn als de app niet in de store komt, daar kan immers iedereen erbij. Om een app live te krijgen moet deze eerst door het review proces van Google heen. Dit review proces wordt handmatig gedaan door medewerkers van Google die tegen de app gaan praten. Als de app gereviewd is krijg je een bericht terug met de status van de review, dit bericht bevat ook persoonlijke feedback van de tester waardoor fouten makkelijk aan te passen zijn. Het kan soms bijna een week duren voordat een app wordt getest, een grotere app in de store krijgen is dan ook een proces dat lang kan duren. Een Assistant app moet voldoen aan een grote lijst met regels en wordt streng gereviewd. Het is dan ook niet raar als je app afgewezen wordt. 

![verbindingen](/assets/google-assistant/denied.png)

Hoe kleiner de app des te meer kans dat de app goedgekeurd wordt. Minder responses betekent minder dat fout kan gaan. Het review proces is echter niet waterdicht, en kan weinig doen tegen veranderingen als de app eenmaal online staat. De volledige conversatie verloopt via een backend die op elk moment aangepast kan worden zonder dat dit te zien is aan de voorkant.

### Huidige apps

Voor mijn stageopdracht heb ik 2 apps geschreven voor de Assistant:

De [Move4Mobile gate](https://assistant.google.com/services/a/id/398d19646c4bff39/) app opent met het commando "Open the gate" de slagboom naar de parkeerplaats van Move4Mobile in Zwolle.
De app vraagt aan de gebruiker permissie om de naam en locatie van de Assistant te krijgen, zodra de gebruiker hiermee instemt wordt er in de webhook gekeken of deze locatie binnen een bepaalde afstand is van de vestiging in Zwolle. Als dit het geval is opent de slagboom. 
De locatie en naam van de gebruiker worden bij elke request opgeslagen, waardoor er goed inzicht is in wie de poort opent. Dit wordt voornamelijk gebruikt om misbruik tegen te gaan, de app staat namelijk openbaar in de store(echter alleen voor Nederland) dus iedereen kan erbij.
Als een onbekend persoon te vaak de app aanroept kan deze geblokkeerd worden. Ook is er de optie om bekende gebruikers te "White listen" waardoor ze makkelijker de poort kunnen openen zonder eerst te checken op locatie.

Met de [Bite Service](https://assistant.google.com/services/a/id/7949ff350578a67f/) app kun je via spraak snacks bestellen via het "Bite" platform.
Met Bite Service kan je alles wat al kan met de Bite Android of Progressive Web App (PWA), en meer, maar nu doormiddel van spraak!
Een gebruiker kan snacks bestellen, Bites openen, zijn order aanpassen en locken, de volledige status van een order opvragen en nog veel meer.

Je kan nu al tegen de apps praten door "OK Google, talk to Bite Service/Move4Mobile Gate" te zeggen tegen een Assistant enabled device.
