import React from 'react';
import Widget from './Widget';

const forelesninger: string[] = (
  [ 
    "07:37-07:55 - Ta tbanen",
    "07:55-08:00 - Gå til jobb",
    "08:00-10:45 - Jobbe på",
    "10:45-10:50 - Stand up",
    "10:50-11:20 - Lønsj",
    "11:20-16:00 - Jobbe på 2"
  ]
)

const forelesninger2 = forelesninger.map(item => item.split("-"))

const Lectures = () => (
 <Widget title="Min timeplan">
    <ul>
      {forelesninger2.map(forelesning => 
        <li key={forelesning[0]}>
          <b>
            <span role="img" aria-label="calendar">📆 </span>
            {forelesning[0]} - {forelesning[1]}
          </b> {' '}
          <span role="img" aria-label="hand pointing right">👉🏼</span>
          {forelesning[2]}
        </li>)}
    </ul>
  </Widget>
);

export default Lectures;
