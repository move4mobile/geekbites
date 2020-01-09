---
title: Verbeterde beveiliging door gebruik van FE2EE
category: security
tags: privacy, encryption
comments: true
author: dennis
date: 2016-08-23
---

## Wat is E2EE?

End-to-end encryption (E2EE) is een encryptietechniek die applicaties in staat stelt te communiceren over een verbinding waarvan alleen de ontvanger en verzender de sleutel weten.
Dit zorgt er voor dat telecomproviders, internetproviders en andere bedrijven niet mee kunnen luisteren naar wat er over de verbinding verstuurd wordt. 

Ook kunnen ze de sleutels niet bemachtigen omdat die alleen beschikbaar zijn voor de ontvanger en verzender.
Tegenwoordig zijn er veel bedrijven die EE2EE aan het implementeren zijn, bijvoorbeeld Facebook met [Whatsapp](https://www.whatsapp.com/faq/en/general/28030015) en Google met de apps [DUO & ALLO](https://www.wired.com/2016/05/allo-duo-google-finally-encrypts-conversations-end-end/)

![E2EE lock](https://cdn-images-1.medium.com/max/1600/1*I2RsPH-EuM-Uu-WOPDRj_A.png)

## Wat is FE2EE?

FE2EE staat voor Fingerprint end-to-end encryption, het is een zelfverzonnen term op basis van mijn idee hoe we end-to-end encryption zouden kunnen verbeteren, of in ieder geval de manier van authentiseren.

**Mijn idee een notendop:** applicaties moeten gebruikers de mogelijkheid bieden om FE2EE aan te zetten. Nadat de gebruiker dit aan heeft gezet is er een vingerafdruk vereist. Dit om vast te stellen of de gebruiker echt de eigenaar is van het toestel en daardoor ook het bericht mag lezen.

## Een goede manier om FE2EE te implementeren

Bestaande applicaties zouden hun huidige implementatie van E2EE moeten kunnen behouden, het vingerafdruk gedeelte voegt alleen een extra authenticatielaag toe. 
FE2EE zou moeten worden aangezet in het beheerpanel van de applicaties zodat het geen hinder vormt voor de gebruikers die geen vingerafdruk mogelijkheid hebben of dit niet willen gebruiken.

Nadat de authenticiteit van de gebruiker is gevalideerd moet de gebruiker de mogelijkheid hebben om het niveau van de authenticatielaag te veranderen. 
Ik kan me voorstellen dat er gebruikers zijn die alleen bij het opstarten van de applicatie of bij bepaald verkeer de vingerafdruk verplicht willen maken.

## Zou ik FE2EE kunnen gebruiken op mijn telefoon?
Sommige iOS en Android apparaten kunnen je vingerafdruk scannen (een biometrische scanner is verplicht), hierdoor kun je gebruik maken van het meest veilige beveiligingsmechanisme tot nu toe.
Indien je dus een biometrische scanner hebt en een app die het bovenstaande heeft toegepast kun je FE2EE aanzetten.
