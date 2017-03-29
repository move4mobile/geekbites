---
layout: post
title: 3 Minder bekende features nieuw in Android 7.0
category: android
tags: android, nougat, android 7.0, featurers, verborgen
comments: true
author: ramon
min_read: 6
---
![nougat](/assets/lesser-known-android-features/nougat.jpg)
Het is nu bijna een maand geleden sinds de nieuwe Android release “Nougat” officieel is gereleased met nieuwe features als [Multi-Window](https://developer.android.com/guide/topics/ui/multi-window.html) support en compleet veranderde [Notificaties](https://developer.android.com/guide/topics/ui/notifiers/notifications.html). Maar naast deze opvallende veranderingen zijn er ook een paar verborgen en onbekende features.

## Nachtmodus
Voor gebruikers van f.lux zal "nightmode" bekend in de oren klinken, deze modus zorgt ervoor dat het scherm op basis van het tijdstip automatisch van een blauwe tint naar een warme en donkerdere tint veranderd.

#### Gebruik
Omdat Google momenteel werkt aan de functie is hij niet voor alle gebruikers beschikbaar (Check Systeem-ui-tuner -> Kleur en uiterlijk -> Nachtmodus), om deze op alle nougat apparaten te kunnen gebruiken is mogelijk een adb commando vereist:

```bash
adb -d shell am start --ez show_night_mode true com.android.systemui/.tuner.TunerActivity
```

## Sideload via ADB
Het sideloaden (via de recovery flashen van een .zip bestand) van systeem updates is met de nieuwe versie van Android nog makkelijker geworden, in plaats van het op moeten starten in de Android recovery kan nu vanuit een opgestart systeem via adb de sideload modus opgestart worden. Dit zorgt ervoor dat men nieuwe updates/ota's (zonder verlies van garantie e.g.) kan installeren met een tweetal commando's.


#### Gebruik
Wanneer adb nog niet in root modus staat moet eerst "adb root" uitgevoerd worden, anders kan deze overgeslagen worden.

```bash
adb root
adb reboot sideload <zip file>
```

## Zet Freeform modus aan
Naast Multi-Window modus waarbij 2 schermen tegelijkertijd geopend kunnen zijn is ook het experimentele Freeform modus toegevoegd, in deze modus kan men a la OSX/Windows een oneindig aantal apps openen welke vrij over de desktop te verplaatsen en resizen zijn. Ondanks dat deze functie vooral op kleine schermen niet extreem nuttig is geeft het wel een idee over wat in de toekomst mogelijk is in Android.

![freeform](/assets/lesser-known-android-features/freeform.png)
Bestandsbeheerder, Google Camera en Youtube alle drie geopend (en werkend) op een desktop.

#### Gebruik
#1 Ga naar Opties voor ontwikkelaars -> Formaat activiteiten geforceerd aanpassen (helemaal onderaan).

#2 Herstart.

#3 Download en installeer [Taskbar](https://play.google.com/store/apps/details?id=com.farmerbb.taskbar).

#4 Start een app in freeform modus door hem in taskbar te selecteren, vergeet niet taskbar zelf aan te zetten.





