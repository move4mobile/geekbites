---
layout: post
title: Het fieldset element
category: web
tags: html, fieldset
comments: false
author: ronan
min_read: 6
---
Terwijl je werkgerelateerde dingen aan het doen bent op het internet kom je altijd van alles tegen. Ze vullen je dag met de nodige "wtf"-momenten of de "oh no they didn't". Maar vergeet ook de "wow"-momenten niet die je inspiratie bieden tot nieuwe ideeën.   

## Hè?
Ik belandde op een website waarin een stukje tekst was geplaatst in een kader. De lijn van het kader ging mooi gebogen de bocht om, en dit proces zou zich herhalen tot het begin van de lijn bereikt was: een perfecte vierkant.

![Fieldset](/assets/html-fieldset.png)

Ware het niet dat er tekst op de lijn stond. Lelijk? In tegendeel! De tekst fungeerde als titel of onderwerp voor de ingesloten tekst en was perfect verticaal uitgelijnd op de lijn.
De lijn was niet zichtbaar achter de tekst en hield enige afstand zowel links van de eerste letter als rechts van de laatste letter van de tekst. Het was voldoende voor een "hè?"-moment, dat mijn top 4 van momenten completeert.

#### `<fieldset>`
Was iemand druk bezig geweest met uitlijnen? Vele regels CSS om de titel in he tmidden te krijgen, padding en achtergrondkleur om de lijn te verbergen en met knikkende knieën kijken in verschillende browsers om te zien of het resultaat hetzelfde is.

Nee, niets van al dat. Het was een heus HTML `<fieldset>` element. Een element dat als doel heeft de element erin te groeperen, met als pluspunt dat het een duidelijke afbakening biedt met een netjes gepositioneerde titel.

## Antiek
Het fieldset element bestaat voor mij al zo als het moment dat ik in Internet Explorer 6 bronnen van pagina's bekeek om te zien hoe dat "die knoppen en tekstvakken" bouwden, wat inmiddels klare koek is
Een snelle zoektocht leerde mij dat deze in HTML 4 was toegevoegd, rond 1999. Een antiek element dus, maar het had zeker een functie!

### Toegankelijk
Het element heeft als doel de inhoud te groeperen cq categoriseren. Meerdere fieldsets bieden ruimte voor meerdere categorieën en ook screenreaders hebben profijt van het element:

> The FIELDSET element allows authors to group thematically related controls and labels. Grouping controls makes it easier for users to understand their purpose while simultaneously facilitating tabbing navigation for visual user agents and speech navigation for speech-oriented user agents. The proper use of this element makes documents more accessible.

De titel wordt traditioneel geplaatst in een `<legend>` element:
> The LEGEND element allows authors to assign a caption to a FIELDSET. The legend improves accessibility when the FIELDSET is rendered non-visually.

## Nieuwe tijden, nieuwe 'elementen'
De titel is niet geheel terecht, maar ik wist niks anders. Met de tijd bedenken mensen nieuwe dingen.
Methodes om dingen te presenteren in een popup in de pagina zelf (zgn. "lightbox") in plaats van een window popup en bladeren door afbeeldingen doen we door middel van een "slider" in plaats van de afbeeldingen onder of naast elkaar te zetten.

> _In de ruïnes van het verleden liggen de parels van morgen._

Naast deze 'standaard' technische oplossingen biedt men ook gestrucureerde elementen aan, zoals het welbekende grid-systeem om keurig dingen in onzichtbare kolommen op te delen. Ook knoppen, tabbladen, badges, progress bars (wat al dan niet heeft geleid tot het `<progress>` element) en _panels_.

Dit wordt allemaal netjes aangeboden in zogenaamde "bootstraps". Kant-en-klare kopieer & plak HTML en CSS code, aangevuld met een beetje Javascript.

### Panels
De _panel_ wil ik er graag even uit pakken. Dit is een kader met (standaard) een mooi gebogen lijn dat netjes een sluitende rechthoek vormt. Bovenin dit kader staat een apart vak met een stukje tekst erin dat als betiteling geldt voor de tekst in het kader.
Komt dit bekend voor?

Het heeft veel weg van het fieldset element, alleen bestaat het panel uit diverse `<div>` elementen aangevuld met een boel CSS.
Qua doel heeft het veel overeenkomsten, qua vormgeving ziet het er beter uit, maar voor zoekmachines 1 pot nat. Screenreaders zullen tegenwoordig beter werken dus zal men ook daar weinig merken.

> _De toekomst is het verleden dat door een andere poort terugkomt._
  
Maar oude tijden herleven niet alleen met het opnieuw uitvinden van het wiel, met HTML5 heeft `<fieldset>` een upgrade gekregen:

| Attribute  | Value    | Description                                                        |
| -----------| ---------| ------------------------------------------------------------------ |
| disabled   | disabled | Specifies that a group of related form elements should be disabled |
| form       | form_id  | Specifies one or more forms the fieldset belongs to                |
| name       | text     | Specifies a name for the fieldset                                  |

### Kortom
Met een beetje extra werk kan fieldset eruit zien als een panel of ander "hip" gestijld kader en nieuw leven in worden geblazen waarbij dan ook nog eens gebruik gemaakt kan worden van de nieuwe HMTL 5 functionaliteit.