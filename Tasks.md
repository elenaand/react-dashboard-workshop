# Oppgaver

Start appen med `yarn start`.

Nedenfor ligger en beskrivelse av alle oppgavene vi skal gjennom for å lage vårt private dashboard. Hver oppgave er delt opp i flere deloppgaver, gjør så mange du rekker.

En enkel måte å debugge appen din på er ved bruk av `console.log` for å printe ut hvilken data man har tilgjengelig. (https://developer.mozilla.org/en-US/docs/Web/API/Console).

Om du står fast er det viktig at du spør om hjelp. Noen gang trenger man å diskutere med andre eller få et dytt i riktig retning for å finne løsningen. Vi er her for å hjelpe!

## Fellesoppgave

Åpne `App.tsx` og oppdater headingen på dashboardet med ditt eget navn.

## Oppgave 1

**Enkel rendering**

I første oppgave skal vi lage en liste over alle forelesningene man har.

### 1.1
Åpne ` Lectures.jsx` og fyll ut lista med dine forelesninger i JSX. Ser du at det dukker opp i appen?

### 1.2
Lista ble fort veldig lang. Flytt informasjonen ut i ei liste av strings og iterer over den for å lage ei ny liste med <li>-elementer, og vis frem denne.

## Oppgave 2: Komponenter og props
https://reactjs.org/docs/components-and-props.html

**Komponenter**

React gjør det enkelt å gjenbruke funksjonalitet og markup vi trenger å bruke flere steder, slik at vi slipper å skrive samme koden flere ganger. I React-verdenen kalles en slik samling for et komponent. Komponenter kan sees på som en byggekloss i applikasjonen din. `Lectures` som du så i oppgave 1 er et eksempel på et slikt React-komponent. Det er en funksjon som returnerer et React element som beskriver hvordan en del av brukergrensesnittet skal se ut og oppføre seg.

**Props**

Props (properties) er attributter som kan sendes med til et React-komponent. Det kan sees på som å sende med argumenter til en funksjon.

**Children**

Children er et slags spesialprop. Alt som er definert mellom åpne og lukketaggen til et React-komponent vil være tilgjengelige i komponentet via `props.children`.

### 2.1
Åpne `Widget.jsx`, og sammenlign den med Lectures-komponenten vi nettopp var i. Du ser kanskje at de er ganske like?

I `Lectures.jsx`, fjern de taggene som er like i filene og erstatt med `<Widget>`.

HINT? DET ER GJORT I `ASSIGNMENT.TSX`.

### 2.2
Nå får du kanskje opp at ingen tittel er definert?

Prøv å send med en `title`-prop til `Widget`, å se hva som skjer.

https://reactjs.org/docs/components-and-props.html#composing-components

### 2.3
Etterhvert kan man ha veldig mange props som sendes inn til et komponent. Et triks for å gjøre koden mer lesbar er å dekonstruere props. Les hvordan her [unpacking fields from objects passed as function parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Unpacking_fields_from_objects_passed_as_function_parameter) og prøv å dekonstruer propsene til `Widget`.

## Oppgave 3

**Intro til TypeScript**

Enn så lenger har vi jobbet med jsx. Nå skal vi prøve å gjøre om til å bruke typescript. [Denne linken kan være nyttig underveis, og introduserer noen vanlige typer](https://www.typescriptlang.org/docs/handbook/basic-types.html)

### 3.1
Vi starter med `Widget.jsx`. Prøv å endre filnavnet til `Widget.tsx`. Hvilke feilmeldinger får du? Rett opp i disse ved å definere typene.

Hint 1: Du må definere typen på selve komponenten for å definere typen somm props skal ha.

### 3.2
Fortsett med å endre `Lectures.jsx` til å bruke TypeScript. Om dere holder over arrayet ser dere kanskje at typen infereres? Prøv å legg til et tall i lista å se hva typen er nå. Prøv så å sette typen på lista, og se om det kommer noen feilmeldinger. Prøv også å legge ved type i selve map-funksjonen.

### Gjøre noe med data.ts?

## Oppgave 4: Iterere over en liste
I denne oppgaven skal vi iterere over en liste og legge til et listepunkt for
hvert element i listen. I React bruker vi en metode som heter `map` for å iterere over en liste med verdier. Hvordan du bruker `map` kan du se her: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

Du finner også et eksempel på hvordan du rendrer listepunkter i `CHEATSHEET.md`.

Når du bruker `map` for å rendre UI elementer er det viktig at du legger til en
attributt `key` på elementet som rendres. `Key` er en attributt som brukes av React til å avgjøre hvilke listeelementer som har blitt endret, lagt til eller
fjernet. Du kan lese mer om keys her: https://reactjs.org/docs/lists-and-keys.html#keys

### 4.1
Nå skal vi lage en ny komponent/Widget til dashboardet vårt, `Assignments.tsx`.

**Hint:** Gjøres i `App.tsx`.

### 4.2
Bruk `map` metoden for iterere over listen med fag og print ut en `<button>` for hvert fag.

### 4.3
Map over øvingene til det første faget og fyll ut lista.

**Hint:** Ligner veldig på oppgave 1.3 og forrige oppgave. Legg på `key={index}` som en prop på listeelementene.

## Oppgave 5
### 5.1
Kommenter inn state-hooken i toppen av Assignments-komponenten.

```javascript
const [activeTab, setActiveTab] = React.useState(0);
```

Legg til en `onClick`-handler på fagknappen som oppdaterer staten `activeTab` med riktig fagindeks når du trykker på knappen, slik at det er riktig tab som ligger i staten. Bruk console.log for å se at det er riktig tab som er satt, da det ikke er noe visuelt som blir endret i denne.

HINT: Fyll inn updateActiveTab-metoden
HINT: Hvordan kalle metoden når man klikker?

### 5.2
Nå er det vanskelig å se hvilken tab som er aktiv. Legg til en klasse `activeTab` på `<button>`-elementet om indeksen til taben er lik som `activeTab`-staten slik at det blir lettere å se.

### 5.3
Nå vises lista med oppgaver til det første faget hele tiden. Bruk `activeTab`-staten til å vise riktig fag. Ser du at listen over øvinger endrer seg når du endrer fag?

### 5.4
For å se hvilke øvninger som er godkjent kan du legge til klassen `approvedAssignment` for de fagene som godkjent.

### 5.5
Vi kan også legge til en statusmelding for om alle fagene er godkjent eller ikke. Implementer isSubjectApproved-metoden, og kommenter inn den relevante koden i return-metoden.

### Ekstra oppgave?
Legg til funksjonalitet for å markere øvinger som godkjent.

## Oppgave 6
En Reactapp er en frontendapplikasjon som typisk viser data hentet fra et API. For å hente data skal vi bruke Fetch APIet som er innebygget moderne browsere. Du kan lese mer om Fetch APIet og hvordan det brukes her: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

### 6.1
Legg widgeten `YesNo` til dashboardet ditt slik som du gjorde i oppgave 5.1.

### 6.2
Oppdater `updateQuestion`-metoden til å oppdatere `question`-staten når du skriver noe i input feltet. Om du heller har lyst til å fokusere på fetching av data kan du kopiere inn metoden fra løsningsforslaget og hoppe til oppgave
6.3.

### 6.3
Når skjemaet med inputfeltet blir sendt inn trigges metoden `askQuestion`. Oppdater `askQuestion`-metoden til å fetche data fra APIet https://yesno.wtf/api. Bruk responsen til å oppdatere staten for `imageUrl`, `lastAskedQuestion` og resette `question`-staten.

### 6.4
Noen ganger vil du at noe skal skje som følge av noe annet. F.eks. kan det hende vi ønsker å hente et
svar alt første gangen komponentet rendres så det ikke ser så tomt ut. I slike tilfeller kan vi bruke en metode som heter `useEffect`. Du kan lese mer om `useEffect` her: https://reactjs.org/docs/hooks-reference.html#useeffect

Legg inn et default spørsmål i `question`-staten og hent et svar når komponenten rendres første gangen ved hjelp av `useEffect`.

### 6.5
Oppdater `askQuestion`-metoden til å kun oppdatere `input`- og `question` staten når skjemaet sendes inn.
Oppdater useEffecten din til å avhenge av `question`-staten og fetch et nytt svar hver gang `question` har endret seg.

## Ekstraoppgaver

### Lag en ny widget helt fra bunnen av
Her finner du en liste over åpne APIer: https://dev.to/mkrl/apis-you-didnt-know-you-needed-38c. Vi har brukt det øverste til oppgave 6, kan du bruke et av de andre til å lage en ny widget til dashboardet ditt?

### Endre stil
I index.css ligger stilene for dashboardet. Hvis du ikke er fornøyd med hvordan dashboardet ditt ser ut kan du endre farger eller lignende her.

### Legg ut sida på GitHub Pages
Hvis du ønsker å ha dashboardet ditt på internett så er GitHub pages en enkel løsning for å til dette. Opprett et eget repository og push koden din til dette, for så å legge det ut via GitHub Pages.
