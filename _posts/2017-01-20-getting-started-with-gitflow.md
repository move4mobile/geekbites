---
layout: post
title: Git Flow als standaard workflow voor je software development proces
category: web-development
tags: git, git-flow
comments: true
author: michael
min_read: 8
---

Iedere developer heeft wel eens gehoord van **Git**: een razendsnel versiebeheersysteem oorspronkelijk gemaakt tijdens de ontwikkeling van de Linuxkernel.

> Versiebeheer is het systeem waarbij veranderingen in een bestand of groep van bestanden over de tijd wordt bijgehouden, zodat je later specifieke versies kan opvragen. In de voorbeelden in dit boek is het broncode van computersoftware waarvan de versies beheerd worden maar in principe kan elk soort bestand op een computer aan versiebeheer worden onderworpen.
[(bron)](https://git-scm.com/book/nl/v1/Aan-de-slag-Het-wat-en-waarom-van-versiebeheer)

## Git
Git is dè standaard binnen organisaties (die aan software ontwikkeling doen) en iedere developer heeft hier vroeg of laat mee te maken. 
Echter, de manier hoe iedere developer met Git werkt verschilt van persoon tot persoon. 

Omdat Git voor beginnelingen best overwhelming kan zijn, zorgt dit bij grote projecten regelmatig voor chaos. Dit resulteert regelmatig in [merge conflicts](https://www.git-tower.com/learn/git/ebook/en/command-line/advanced-topics/merge-conflicts).
Het is in zo'n geval zeker niet ongewoon dat je een hele dag aan werk kwijt kan raken. In dat geval is Git binnen de organisatie eerder een last dan een aanvulling. 

Sommige developers gebruiken de CLI (_Command Line Interface_). Anderen installeren een GUI (_Graphical User Inteface_) zoals SourceTree of TortoiseGit. 
Terwijl ik zelf voorstander ben van de CLI, zou het in principe niet zoveel uit moeten maken welke tool je wilt gebruiken. 
Het zijn de onderlinge afspraken en de gekozen workflow die het verschil maken. 

### Git Flow
Op het internet is veel te vinden over de zogenaamde [Git Flow](http://nvie.com/posts/a-successful-git-branching-model/). Hierbij komt meestal het volgende plaatje voorbij:
![Git Flow stategy by Vincent Driessen.](/assets/git-flow-model.png).

Door binnen je developent team, Git Flow als default workflow te adopteren, ben je er zeker van dat iedere developer op dezelfde (duidelijke) manier met versiebeheer omgaat. Op deze manier kan je je codebase 'gezond' en voor iedereen overzichtelijk houden. 

Adopteren van Git Flow hoeft overigens niet te betekenen dat je het voorgelegde model 100% procent hoeft over te nemen. 
Integendeel, je neemt gewoon de dingen over die bij je team passen (en je legt dit ergens binnen het team vast. 
Wat je in ieder geval wel uit dit model wilt overnemen, is de basis inrichting waarbij je centrale repo voorzien is van de volgende twee branches: `master` en `develop`

> The master branch at origin should be familiar to every Git user. Parallel to the master branch, another branch exists called develop.
> 
> We consider origin/master to be the main branch where the source code of HEAD always reflects a production-ready state.
> 
> We consider origin/develop to be the main branch where the source code of HEAD always reflects a state with the latest delivered development changes for the next release. Some would call this the “integration branch”. This is where any automatic nightly builds are built from.
> 
> When the source code in the develop branch reaches a stable point and is ready to be released, all of the changes should be merged back into master somehow and then tagged with a release number. How this is done in detail will be discussed further on.

[http://nvie.com/posts/a-successful-git-branching-model/](http://nvie.com/posts/a-successful-git-branching-model/)

Kortom, ontwikkelen doe je op `develop` en niet op `master`.

### Git Flow extensie voor Git
Natuurlijk kan je in Git de gewenste workflow toepassen door zelf de juiste Git commando's in te tikken. 
Bijvoorbeeld: `git checkout -b feature/my-new-feature` op het moment dat je aan een nieuwe feature gaat werken. 

Dit kan, maar het kan nog gemakkelijker, er is namelijk een handige extensie voor Git beschikbaar. 
Deze extensie 'kent' Git Flow en kan daarom het een en ander voor je te versimpelen.

Deze extensie heet **gitflow** en is te vinden op GitHub: [nvie/gitflow](https://github.com/nvie/gitflow) 

Wanneer je deze extensie gebruiken en aan een nieuwe feature wilt gaan werken, dan typ je `git flow feature start my-new-feature`. 
Hoewel je niet per definitie 'minder' karakters hoeft te typen, ben je je er wel heel bewust van wat je aan het doen bent.

## Let's Git Started

Deze blog (geekbites) is op de achtergrond gekoppeld aan een Git repository (een Jekyll blog gehost op GitHub). 
Hieronder wordt stap voor stap uitgelegd wat er nodig is geweest om _Git Flow_ in deze bestaande repo in te richten.
Vervolgens wordt uitgelegd hoe er, door afsplitsing van een _feature branch_, een nieuwe post is ontstaan op de website. Deze blog post ;-)

#### 1. Git Flow initialiseren in een bestaande Git repository

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

Nu worden de juiste branches en prefixes aangemaakt. `-d` zorgt ervoor dat alle default settings overgenomen worden.

**Tip:** als je met een bestaande repository werkt, en nog geen `develop` branch hebt, dan is het handig om vooraf aan te maken: `git checkout -b develop` (afsplitsen vanaf `master`). 
Doe je dit niet, dan kan de vraag 'Branch name for "next release" development:' niet automatisch voor je worden beantwoord.

Vergeet niet om je (nieuwe) develop branch te pushen naar je remote:

`$ git push -u origin develop`

#### 2. Werken aan nieuwe features

Deze blog post is geschreven in een nieuwe _feature branch_. Deze feature is met het volgende commando aangemaakt:

`$ git flow feature start post-gitflow-getting-started`

Output:

```
Switched to a new branch 'feature/post-gitflow-getting-started'

Summary of actions:
- A new branch 'feature/post-gitflow-getting-started' was created, based on 'develop'
- You are now on branch 'feature/post-gitflow-getting-started'

Now, start committing on your feature. When done, use:

     git flow feature finish post-gitflow-getting-started
```

Zoals je in de output kan zien, wordt de nieuwe feature branch automatisch voor je uitgecheckt. 
Met het volgende commando kan je gemakkelijk zien welke feature branches er zijn:

`$ git flow feature`

Output:

```
* post-gitflow-getting-started
```

Optioneel: stel dat je je nieuwe feature branch wilt pushen naar GitHub (of een andere remote), dan doe je dit als volgt:

`$ git flow feature publish post-gitflow-getting-started`

Output:

```
Counting objects: 8, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (8/8), done.
Writing objects: 100% (8/8), 123.66 KiB | 0 bytes/s, done.
Total 8 (delta 4), reused 0 (delta 0)
remote: Resolving deltas: 100% (4/4), completed with 3 local objects.
To github.com:move4mobile/move4mobile.github.io.git
 * [new branch]      feature/post-gitflow-getting-started -> feature/post-gitflow-getting-started
Already on 'feature/post-gitflow-getting-started'
Your branch is up-to-date with 'origin/feature/post-gitflow-getting-started'.

Summary of actions:
- A new remote branch 'feature/post-gitflow-getting-started' was created
- The local branch 'feature/post-gitflow-getting-started' was configured to track the remote branch
- You are now on branch 'feature/post-gitflow-getting-started'
```

Het is vooral weer interessant om naar de sectie 'Summary of actions' te kijken. Dit geeft je inzicht in de Git Flow gerelateerde acties die voor je worden gedaan.

#### 3. Nieuwe feature afronden
Wanneer je klaar bent met het ontwikkelen van je nieuwe feature, kan je deze nog een laaste keer (laten) testen. Werkt alles naar behoren? 
Dan kan je de feature _mergen_ naar `master`.

In dit geval bevat de feature een nieuwe blog post. Dus, wanneer de blog post naar tevredenheid is afgerond, kan deze feature als volgt worden afgerond:

`$ git flow feature finish post-gitflow-getting-started`

Output:

```
```

Nu is je feature gemerged naar `develop`. De feature branch wordt automatisch voor je weggegooid.

#### 3. Releasen via een release branch
Om een nieuwe versie van je software te releasen, kan je een zogenaamde release branch aan gaan maken. 
Deze release branch kan je later weer mergen naar `master` en 'back-mergen' naar `develop`.

Release branch aanmaken:
`git flow release start 1.0`

Release branch afronden:
`git flow release finish 1.0`

Het zou voor deze blog post een beetje overkill zijn, om deze post met behulp van een release branch, te publishen naar `master` (deze blog). 
Daarom is er in dit geval voor gekozen om gewoon zelf, `develop` terug te mergen naar `master`:

Vanuit `maseter` branch:
`git merge --no-ff develop`


Tot slot pushen naar GitHub, en deze nieuw blog post staat live :-)
