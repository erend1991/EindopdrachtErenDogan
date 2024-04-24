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

## Installatie

1. Clone het project naar je computer:
   https://github.com/erend1991/EindopdrachtErenDogan/
2. Installeer npm in de terminal:
`   npm install`
3. voer de start commmando in de terminal:
`   npm run dev`
4. de api key vind je in het .env bestand
5. Je kan aan de slag!





## Gebruikshandleiding

Met deze applicatie kan je recepten ophalen van de edamam api. De api key en ID vind je in het .env bestand. Deze hoef je dus niet meer in te vullen. Op de homepagina kom je 
gelijk al op de belangrijkste pagina. Hier kan je op zoek gaan naar recepten. De search inputfield is er om je ingredienten te kunnen invullen. Om een nog beter resultaat
te krijgen raad ik het u aan om de ingredienten in het engels op te zoeken. Dit kunnen er meerdere zijn!. Vervolgens kan je maaltijdtype en een gezondheidscatagorie selecteren.
Je kan ook 1 van de 3 opties invullen. Als je de gewenste opties hebt ingevuld kun je op het zoekbutton drukken en krijg je de resultaten te zien.

De resultaten krijg je te zien op dezelfde pagina. Als je een recept ziet wat je leuk vindt kan je op deze Card drukken wat je vervolgens doorverwijst naar de volgende 
pagina. Hier heb je een wat grotere afbeelding van het product en de igredienten. Ook is er een favorieten button die je kan gebruiken om het producten toe te voegen of
te verwijderen van je favorieten. Om producten op te slaan in je favorieten moet je wel ingelogd zijn. Hier voor heb je wel een account nodig. 


Als je eenmaal recepten hebt toegevoegd aan je favorieten kun je klikken op de favorieten link in de navigatiebar. Dan krijg je een overzicht van al je favorieten. Als je 
een recept hebt die je niet meer in je favorieten wilt hebben kan je op de button drukken en wordt deze verwijderd uit je favorieten.



