# HTML Basic Tags

```
<h?> heading </h?>	Heading (h1 for largest to h6 for smallest)
<p> paragraph </p>	Paragraph of Text
<a href="url"> link name </a>	Create a link to another page or website
<div> ... </div>	Division or Section of Page Content
<span> ... </span>	Section of text within other content
<p> ... </p>	Paragraph of Text
<img src="url" alt="text">	Basic Image
<ol> ... </ol>	Ordered List
<ul> ... </ul>	Un-ordered List
<li> ... </li>	List Item (within ordered or unordered)
```

# Oppgave 1

## Vise JS i JSX
```javascript
// Man kan vise js i jsx ved å legge js inni krøllparenteser.
const js = "This is javascript"
const jsx = <div> This is Html and {js} </div>
```

## Iterasjon
```javascript
// En for-løkke er kanskje det dere er mest vant til, og det kan gjøres slik i JS:
var array = [1, 2, 3, 4];
var arrayPlus1 = [];
for(var i = 0; i < array.length; i++) {
  arrayPlus1.push(array[i]+1)
}
// arrayPlus1 = [2,3,4,5]

// Mer vanlig er det å bruke map-metoden
const array = [1, 2, 3, 4];
const arrayPlus1 = array.map(value => value+1)
// arrayPlus1 = [2,3,4,5]
```


# Oppgave 2

## Sende med props til et component

```javascript
// React komponent
const MyComponent = (props) => (
  <div>
    <p>{props.text}</p>
    {props.children}
  </div>
);

// Bruk av komponentet
<MyComponent
  // Text er et prop som blir sendt som en attributt til komponentet
  // MyComponent. I MyComponent kan du få tilgang til verdien i text via
  // props objectet som MyComponent mottar som et argument.
  text='Dette er litt tekst'
>
  {/* Alt som kommer mellom åpne- og lukketaggene til MyComponent vil bli samlet i et prop som heter children. Du får tilgang til proppet children på samme måte som andre props du sender til MyComponent. */}
  <p>Her er noe mer som skal rendres av MyComponent</p>
</MyComponent>
```

## Destrukturering av props

```javascript
const MyComponent = ({ text, children }) => (
  <div>
    <p>{text}</p>
    {children}
  </div>
);
```
# Oppgave 3

## Typer
```
React.FC<> - React Functional Component
number - tall
string - tekst
string[] - array av typen string


```

# Oppgave 4

## Map over listepunkter
```javascript
  const list = [
    'item 1',
    'item 2',
    'item 3'
  ];

  <ul>
    {
      list.map((item, index) =>
        <li key={index}>{item}</li>
      )
    }
  </ul>
```

# Oppgave 5

## Filter
```javascript
const array = [1, 2, 3, 4];
const higherThan2 = array.filter(number => number > 2);
// Her er listen filtrert slik at man kun beholder verdier over 2, og man ender opp med følgende liste:
// higherThan2 = [3,4]
```

## State håndtering

```javascript
import React, { useState } from 'react';
function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

# Oppgave 6

## Fetch
```javascript
fetch('https://api_url.com')
  .then(response => response.json())
  .then(json => {
    // Gjør noe med json responsen ved f.eks å legge den til å state
    // og rendre informasjonen.
  });
```

## useEffect
```javascript
// Denne useEffekten har ingen dependency array og vil
// kjøres hver gang komponentet har rendret.
React.useEffect(() => {
  // Gjør noe hver gang komponentet har rendret.
});
```

```javascript
// Denne useEffekten har en tom dependency array og vil
// kun kjøres første gangen komponentet har rendret.
React.useEffect(() => {
  // Gjør noe første gangen komponentet har rendret.
}, []);
```

```javascript
const [question, setQuestion] = React.useState('');

// Denne useEffekten avhenger av question-staten og vil kun kjøres
// om question har endret seg siden sist render.
React.useEffect(() => {
  // Gjør noe når question har endret seg.
  // f.eks. ved å fetche et nytt svar fra apiet.
}, [question]);

<form onSubmit={() => setQuestion('Er jeg kul?')}>
```
