import React from 'react';
import Widget from './Widget';

const YesNo = () => {
  const [input, setInput] = React.useState('');
  const [question, setQuestion] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState();

  const updateInput = (evt: any) => {
    setInput(evt.target.value);
  }

  const fetchImage = () => {
    fetch('https://yesno.wtf/api')
      .then(response => response.json())
      .then(json => setImageUrl(json.image));
  }

  const askQuestion = (evt: any) => {
    evt.preventDefault();

    fetchImage();
    setQuestion(input);
    setInput('');
  }

  React.useEffect(() => {
    // Oppgave 6.5: Fetch data etter første render.
  }, []);

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
