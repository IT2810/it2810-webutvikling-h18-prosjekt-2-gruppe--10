# IT2810 Webutvikling H2018 Prosjekt-2 Gruppe 10
Krav til funksjon

* * *


**Design/Layout**

* Vi valgte å gå for en layout som ligner veldig på den foreslåtte, dette fordi den virket som et greit alternativ som ikke skulle være alt for komplisert å implementere. I widescreen tenkte vi det var best å vise utstillingen på en rad, siden man på den måten får mest innhold uten å måtte scrolle. På nettbrett og mobil gjør derimot vertikale skjermer at det gir mer mening å legge innholdet nedover, slik at scrolling er nødvendig. Dette for å kunne beholde en viss størrelse på mediene for brukeren.

* Når det gjelder startsiden mente vi det så best ut å åpne med en ferdig generert utstilling, som gjør at brukeren får et innhold med en gang han åpner siden.

* Med mer tid til finpuss hadde vi lagt inn placeholder mens bildet lastet, kanskje en animasjon eller noe lignende som formidler handling.

**Valg av innhold**

* Bilder, tekst og lyd er hentet helt uavhengig av hverandre. Vi er tre personer som jobber på dette prosjektet, derfor ble det et naturlig valg at en person hentet bilder, en annen hentet tekst og den siste hentet lyd. Alle mediene ble lagt inn egne mapper i filstrukturen for å lettest hente de ut etter ønsket kategori. Dette samt å sette opp en standard react-app, var det første som ble gjort. Disse mediefilene er hentet fra ulike gratis-nettsider med tanke på at siden til tider kan være åpen.

Krav til teknologi

* * *


**React:**

Vi brukte create-react-app. Funker fint og man kommer veldig raskt i gang. Måten vi strukturerte appen på var å holde staten i klassen App for så å bruke *stateless function components* til de fleste elementene, dette gjorde vi fordi det er en relativt enkel side uten mye state. Og siden komponentene ikke trengte state eller lifecycle-funksjoner ga det mer mening å skrive dem som dette og sende inn nødvendig data som props. Om appen skulle hatt mer funksjonalitet, eller om vi hadde laget siden på nytt, hadde vi gitt komponentene egen state samt flyttet tilhørende funksjoner inn.

**ES6:**

Vi skrev alle våre funksjoner som "public class field" i ES6-notasjon, altså som felter inn i App-klassen, dette gjør at scopet er mye lettere å holde styr på og man slipper å binde funksjonene. Grunnen til at man slipper å binde disse arrow-funksjonene er at de ikke har egen *this *og siden de er skrevet inne i klassen så refererer *this* til den. 

**Ajax:**

Til å utføre Ajax-kall brukte vi Fetch-apiet siden det er innebygget og har god støtte hos alle de store nettleserne. Dette funket fint for å hente teksten siden den var lagret i JSON, noe APIet kan tolke. Men for SVG-ene i XML-kode måtte vi tolke det som klartekst for så å "dangerouslySetInnerHTML", som er måten man setter innerHTML i React. Grunnen til at det heter dangerously er at det kan åpne brukerne for XSS-angrep, kort forklart et av de aller vanligste angrepene nettbrukere er utsatt for.

**Responsive web design:**

* Viewport ble automatisk lagt til i index.html når vi opprettet prosjektet med create-react-app. Utover dette har vi ikke endret noe på viewport da vi så på dens initielle verdier som gode.

* Media-queries er brukt til å endre utseende ved skalering av siden, samt bruk på mobil og nettbrett. Vi har blant annet en side-bar som endrer plassering og form ved skalering. Videre så endres også grid-utformingen på siden ved hjelp av media-queries. 

* Bilder som skalerer: Bildene har fått tildelt en egen celle i grid-utformingen. Dette gjør at bildene også skalerer ettersom størrelsen på siden endres. 

* Flytende/fleksibel layout: Vi har brukt grid til å tilordne layout på siden. Både kolonnene og radene har fått flytende størrelse, dvs. at en kolonne kan ha f.eks bredde 1fr som da vil gjøre at den endrer størrelse basert på bredden på vinduet. Dette gjør at vi får mye av responsiviteten gratis og at vi kun ved spesifikke skjermstørrelser trenger å endre litt på layout for å sikre at den utnytter vindusstørrelsen på en god måte.

**Samarbeid, bruk av Git, koding, leveranse**

* Medlemmene i gruppa har ulik erfaring og kunnskapsnivå, dette har vist seg å heller være en god ting enn en dårlig. Dette har gjort at en kan spørre og lære av hverandre. Har det oppstått noe ingen på gruppa kan eller noe annet relevant en lurer på, har vi hatt mulighet til å spørre studass eller piazza. Alle medlemmene har ganske åpne timeplaner, dermed har vi hatt mulighet til å møtes for å arbeide på prosjektet på relativt kort varsel. 

* Vi startet med å brainstorme hva vi trengte til siden og hvilke oppgaver som måtte gjøres for å få det vi trengte. Dette resulterte i issues som ble brukt på Github for å fordele arbeid. Ettersom det dukket opp nye elementer eller oppgaver som måtte gjøres la vi til flere issues. Gruppemedlemmene har tildelt seg selv de ulike issuene ut i fra kunnskap og ønske. Noen av issuene har flere av medlemmene sammerbeidet om og det er dermed flere tildelt.

* Alle medlemmene har erfaring med prosjektarbeid som innebærer bruk av git og programmeringsspråk, dermed har det ikke vært noe problem med navngiving på komponenter og kommentering av kode. 

* Det meste av funksjonaliteten er kodet i app.js. Noe er likevel laget i eksterne filer for så og bli importert som komponent til app.js, som blant annet side-baren som har fått navn "CategoryMenu.js". Dette har vi gjort med tanke på ryddighet i koden. 

**Testing**

* Det har vært et holdepunkt underveis i denne utviklerprosessen at nettsiden skal være responsiv, dermed har vi jevnlig testet for skalering på andre enheter med ulik skjermstørrelse ved hjelp av "device toolbar" i inspiser-vindu i nettleseren(chrome). Dette har gjort at vi har hatt kontroll på hvordan ønsket oppførsel skulle være for de ulike enhetene/skjermstørrelse. Den største variasjonen i oppførsel er at sidemenyen formes til en “hamburger menu” ved nedskalering til mobil-størrelse. 

* Etter at vi fikk tildelt server, kunne vi også teste på faktiske mobiler og nettbrett. Vi fant ut at det fungerte like bra her som testene vi gjorde i nettleseren. 

* Vi har også testet i forskjellige nettlesere for å se at nettsiden oppfører seg likt.

* Testet for mobiler med tregt nett hvor bildene tar lenger tid for å lastes inn, ved å teste dette fant vi ut at når bildet skal fetches kommer ikke dette opp ved treg 3G med det første. Hvis det hadde vært mer relevant for denne oppgaven ville vi valgt å gjøre endringer for å gi bruker best opplevelse mens man venter.

Kilder

* * *


SVG:

[https://lovesvg.com/free-svg-cut-files/](https://lovesvg.com/free-svg-cut-files/) 

Tekst:

[https://www.goodreads.com/quotes/](https://www.goodreads.com/quotes/)

Lyd:

[https://freesound.org](https://freesound.org)

Dokumentasjon.md
Viser Dokumentasjon.md.
