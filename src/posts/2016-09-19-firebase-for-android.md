---
title: Firebase opzetten voor Android
category: firebase
tags: firebase, android
comments: true
date: 2016-09-13
author: cas
---

![alt text](https://1.bp.blogspot.com/-YIfQT6q8ZM4/Vzyq5z1B8HI/AAAAAAAAAAc/UmWSSMLKtKgtH7CACElUp12zXkrPK5UoACLcB/s1600/image00.png, "Firebase")

> Firebase is a cloud services provider and backend as a service company based in San Francisco, California. The company makes a number of products for software developers building mobile or web applications. Firebase's primary product is a realtime database which provides an API that allows developers to store and sync data across multiple clients. The company was acquired by Google in October 2014.

## Vereisten

Om gebruik te maken van Firebase moet je voldoen aan de volgende eisen:

* Het apparaat moet *Android 2.3+* draaien en *Google Play services 9.4.0+*

* De *Google Repository* van de Android SDK Manager

* Android Studio 1.5+


## Firebase toevoegen aan je app
1. Maak een Firebase project in de [Firebase Console](https://console.firebase.google.com/), als je deze nog niet hebt.
2. Klik **Add app** en kies **Add Firebase to your Android app** en volg de stappen.
3. Voer de package name in van je app. **Dit kan maar eenmalig worden ingesteld.**
4. De *Debug signing certificate SHA-1* kan je vinden door het volgende command uit te voeren in opdrachtprompt:

   ```
   keytool -exportcert -list -v -alias androiddebugkey ^
   -keystore %USERPROFILE%\.android\debug.keystore
   ```


   *Note: Het standaard wachtwoord voor de debug keystore is **android**.*

5. Het bestand *google-services.json* zal worden gedownload. Deze kan je altijd opnieuw downloaden.
6. Plaats dit bestand in de```/app``` folder van je project.

## SDK toevoegen
Voeg google-services plugin toe aan je root-level ```build.gradle```:

```gradle
buildscript {
	// ....
	dependencies {
		// ....
		classpath 'com.google.gms:google-services:3.0.0'
	}
}
```

Vervolgens voeg de ```apply plugin``` regel toe onderaan je module-level ```build.gradle```:

```gradle
apply plugin: 'com.android.application'

android {
  // ...
}

dependencies {
  // ...
  //Voeg hier de dependencies toe die je wilt gebruiken
  compile 'com.google.firebase:firebase-core:9.4.0'
}

// VOEG DIT TOE ONDERAAN
apply plugin: 'com.google.gms.google-services'
```
Voor alle Firebase dependencies klik [hier](https://firebase.google.com/docs/android/setup#available_libraries).

### Done
Nu ben je klaar om Firebase producten te implementeren in je Android app.
Voor de volledige Firebase docs klik [hier](https://firebase.google.com/docs/).
