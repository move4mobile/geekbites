---
layout: post
title: Git Flow als standaard binnen je development workflow
category: web-development
tags: git, git-flow
comments: true
author: michael
#min_read: 5
---

Iedere developer heeft wel eens gehoord van Git: een razendsnel versiebeheersysteem oorspronkelijk gemaakt tijdens de ontwikkeling van de Linuxkernel.

> Versiebeheer is het systeem waarbij veranderingen in een bestand of groep van bestanden over de tijd wordt bijgehouden, zodat je later specifieke versies kan opvragen. In de voorbeelden in dit boek is het broncode van computersoftware waarvan de versies beheerd worden maar in principe kan elk soort bestand op een computer aan versiebeheer worden onderworpen.
[(bron)](https://git-scm.com/book/nl/v1/Aan-de-slag-Het-wat-en-waarom-van-versiebeheer)

## Git
Git is dè standaard binnen organisaties (die iets met software ontwikkeling doen) en iedere developer heeft hier vroeg of laat mee te maken. 
Echter, de manier hoe iedere developer met Git werkt verschilt van persoon tot persoon. 

Omdat Git voor beginners best overwhelming kan zijn, zorgt dit bij grote projecten regelmatig voor verwarring. Soms resulteert dit zelfs in [merge conflicts](https://www.git-tower.com/learn/git/ebook/en/command-line/advanced-topics/merge-conflicts).
Het is in zo'n geval zeker niet ongewoon dat je een dag aan werk krijt kan raken. In dat geval is Git binnen de organisatie eerder een last dan een aanvulling. 

Sommige developers gebruiken de CLI (_shell_ of _command line_). Anderen installeren een GUI (grafische tool) zoals SourceTree of TortoiseGit. 
Hoewel ikzelf groot voorstander ben van de CLI, zou het in principe niet zoveel uit moeten maken welke tool je wilt gebruiken. 
Duidelijke afspraken over de manier van werken, dat maakt het verschil. 

## Git Flow
Op het internet is er veel te vinden over de zogenaamde [Git Flow](http://nvie.com/posts/a-successful-git-branching-model/). Hierbij komt altijd de volgende afbeelding opduiken:
![Git Flow stategy by Vincent Driessen.](/assets/git-flow-model.png).

Door binnen je developent team, Git Flow als default workflow te adopteren, ben je er zeker van dat iedere developer op dezelfde (duidelijke) manier met versiebeheer omgaat. Op deze manier kan je je codebase 'gezond' en voor iedereen overzichtelijk houden. 

Adopteren van Git Flow hoeft overigens niet te betekenen dat je de voorgelegde strategy 100% procent hoeft over te nemen. 
Integendeel, je neemt gewoon de dingen over die bij je team passen (en je legt dit ergens binnen het team vast. 
Het is vooral van belang dat de ontwikkelwerkzaamheden voortaan op de `develop` branch gaan plaatsvinden, en niet meer direct op `master`. 

### Git Flow extensie voor Git
Natuurlijk kan je in Git de gewenste workflow uitoefenen door zelf de juiste Git commando's in te tikken. 
Bijvoorbeeld: `$ git checkout -b feature/my-new-feature` op het moment dat je aan een nieuwe feature gaat werken. 
Dit kan, maar het kan nog gemakkelijker, er is namelijk een handige extensie voor Git beschikbaar. 
Deze extensie 'kent' Git Flow en kan daarom e.e.a. voor je te versimpelen.

Deze extensie heet **gitflow** en is te vinden op GitHub: [nvie/gitflow](https://github.com/nvie/gitflow) 

Wanneer je deze extensie gebruiken en aan een nieuwe feature wilt gaan werken, dan typ je `$ git flow feature start my-new-feature`. 
Hoe je niet per definitie 'minder' karakters hoeft te typen, ben je je er wel heel bewust van wat je aan het doen bent.

## Let's Git Started

Deze blog (geekbites) is op de achtergrond gekoppeld aan een Git repository (gehost op GitHub). 
Hieronder wordt stap voor stap uitgelegd wat er nodig is geweest om _Git Flow_ binnen deze bestaande repository in te richten.
Vervolgs wordt uitgelegd hoe er, door afsplitsing van een _feature branch_, een nieuwe post is ontstaan op de website. Deze post ;-)

1. Git Flow initialiseren binnen een bestaande Git repository

Met het volgende commando kan je een nieuwe of bestaande repository inrichten voor Git Flow:

`$ git flow init -d`

Output:

```
Using default branch names.

Which branch should be used for bringing forth production releases?
   - master
Branch name for production releases: [master]
Branch name for "next release" development: [develop]

How to name your supporting branch prefixes?
Feature branches? [feature/]
Release branches? [release/]
Hotfix branches? [hotfix/]
Support branches? [support/]
Version tag prefix? []
```

Hiermee worden de juiste branches en prefixes aangemaakt. `-d` zorgt ervoor dat alle default settings overgenomen worden.

**Tip:** als je met een bestaande repository werkt, en nog geen `develop` branch hebt, dan is het handig om deze eerst aan te maken: `git checkout -b develop` (afsplitsen vanaf `master`). 
Doe je dit niet, dan kan de vraag 'Branch name for "next release" development:' niet automatisch voor je worden ingevuld.

Vergeet niet om je (nieuwe) develop branch te pushen naar je remote:

`$ git push -u origin develop`

2. Werken aan een nieuwe feature

Deze blog post is aangemaakt binnen een nieuwe _feature branch_. Deze feature is met het volgende commando aangemaakt:

`$ `

.. todo ..