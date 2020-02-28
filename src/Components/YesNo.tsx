import React from 'react';
import Widget from './Widget';

const YesNo = () => {
  const [input, setInput] = React.useState('');
  const [question, setQuestion] = React.useState('Spørsmål?');
  const [imageUrl, setImageUrl] = React.useState();

  const updateInput = (evt: any) => {
    // Oppgave 6.2: Oppdater input staten med det som
    // blir skrevet inn i input feltet.
    setInput(evt.target.value);

  }

  const fetchImage = () => {
    // Oppgave 6.3: Fetch data fra APIet
    // https://yesno.wtf/api og oppdater imageUrl-staten.
    fetch('https://yesno.wtf/api')
      .then(response => response.json())
      .then(json => setImageUrl(json.image));
  }

  const askQuestion = (evt: any) => {
    evt.preventDefault();

    // Oppgave 6.3: Kall på fetchImage-metoden for å hente data
    // og oppdater question- og input-staten.

    setQuestion(input);
    setInput('');
  }

  React.useEffect(() => {
    // Oppgave 6.5: Fetch data etter første render.
    fetchImage()
  }, [question]);

  return (
    <Widget title={question}>
      {
        imageUrl &&
        <img alt={'yes or no gif'} src={imageUrl} />
      }
      <form
        className="yesOrNoForm"
        onSubmit={askQuestion}
      >
        <label
          htmlFor="yesOrNoQuestionInput"
        >
          Still nytt spørsmål:
        </label>
        <input
          id="yesOrNoQuestionInput"
          value={input}
          onChange={updateInput}
        />
      </form>
    </Widget>
  );
}

export default YesNo;
