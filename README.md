# Installatiehandleiding.

Dit is mijn food api waarmee je recepten kan opzoeken op basis van ingredienten, maaltijdtype en gezondheidscatagorieen.
![homepage.jpg](src%2Fassets%2Fhomepage.jpg)


## Inhoudsopgave

- inleding
- vereisten
- installatie
- gebruikshandleiding


## Inleiding.

Met de applicatie die ik gemaakt heb hoef je nooit meer naar recepten te zoeken. Je vult in welke ingredienten je wilt gebruiken en je krijgt de resultaten die overeen 
komen te zien. Ook heb je de mogelijkheid te kiezen om wat voor maaltijd type het gaat en of je allergenen/producten wat je niet erin wilt hebben er uit filtert. 
Zoekopdrachten kan je middels een button ook aan je favorieten toevoegen. Dit is wel alleen mogelijk voor ingelogde gebruikers! 

## Vereisten
Om de Api te kunnen gebruiken heb je de volgende software nodig:

- Node.js
- npm (Node Package Manager)
- Een API-key en een API-ID van Edamam (registreer op de Edamam-website om deze te verkrijgen)

## Installatie

1. Clone het project naar je computer:
   https://github.com/erend1991/EindopdrachtErenDogan/
2. Installeer npm in de terminal:
`   npm install`
3. maak een .env bestand aan in het project
`   .env`
4. Vul het .env bestand met jouw Edamam API-sleutel en ID:
  ` API_KEY=JOUW_API_KEY_HIER
    API_ID=JOUW_API_ID_HIER`
5. voer de start commmando in de terminal:
`   npm run dev`
6. Je kan aan de slag!





## Gebruikshandleiding

Met deze applicatie kan je recepten ophalen van de edamam api. De api key en ID vind je in het .env bestand. Deze hoef je dus niet meer in te vullen.

**Homepagina**

Op de homepagina kom je gelijk al op de belangrijkste pagina. Hier kan je op zoek gaan naar recepten. 
* De inputfield is er om je ingredienten in te kunnen invullen. Om een nog beter resultaat
te krijgen raad ik het u aan om de ingredienten in het engels op te zoeken. Dit kunnen er meerdere zijn!. 
* Selecteer eventueel maaltijdtype en een gezondheidscatagorie.
* Klik op de zoekknop
 

**resultaten** 

De resultaten krijg je te zien op dezelfde pagina.
*  selecteer een maaltijd om de ingredienten te zien

Vervolgens kom je op de recipcard terecht. Hier heb je een lijst met indredienten en een favorieten button

**Favorieten**
* Druk op de favorieten button om op te slaan in favorieten(je moet wel ingelogd zijn)

**Inloggen/registreren**

* Registreren:
Ga naar de registreren pagina.
Vul de benodigde gegevens in om een account aan te maken.

* Inloggen:
Na registratie kun je inloggen met je gebruikersnaam en wachtwoord.
Zodra je bent ingelogd, kun je recepten toevoegen aan je favorieten.





