import React from 'react';

import Widget from './Widget';

import { subjects } from '../data';

const Assignments = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const updateActiveTab = (index: number) => {
    // Oppgave 5.1: Oppdater activeTab staten
    setActiveTab(index);
    console.log("Aktiv: ", index, subjects[index]);
  };

  const isSubjectApproved = () => {
    // Oppgave 5.5:
    // Implementer denne metoden som returnerer true eller
    // false avhengig om faget er bestått eller ikke
    const currentSubjects = subjects[activeTab];
    const antallGodkjenteOvinger = currentSubjects.assignments.filter(assignment => assignment.approved)
    return antallGodkjenteOvinger.length >= currentSubjects.mandatoryApprovals
  };

  return (
    <Widget title="Mine øvinger">
      <div className="tabs">
        {/* Oppgave 4.2: Map over subjekts og print ut en knapp for hvert fag */}
        {subjects.map((subject: any, index: number) => 
          <button key={index} onClick={() => updateActiveTab(index)} className={activeTab === index ? 'activeTab' : ''}>
            {subject.name}
          </button>
        )}
      </div>
      <div className="subjectStatus">
        {
            isSubjectApproved() ? 'Du er ferdig!' : 'Du er ikke helt i mål enda...'
        }
      </div>
      <ul>
        {/*
            Oppgave 4.3: Map over øvningene til det første faget og print ut et
            listepunkt for hvert assignment for et fag
          */}
        {subjects[activeTab].assignments.map((assignment: any, index: number) => (
          <li key={index} className={ assignment.approved ? 'approvedAssignment' : ''}>
            {assignment.name}
          </li>
          ))
        }
      </ul>
    </Widget>
  );
}

export default(Assignments);
