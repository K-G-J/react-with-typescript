import React from 'react';
import { IState as ListProps} from '../App'

export const List: React.FC<ListProps> = ({ people }) => {

  const renderList = (): JSX.Element[] => {
    return people.map((person, i) => {
      return (
        <li className="List" key={i}>
          <div className="List-header">
            <img className="List-img" src={person.url} alt="person" />
            <h2>{person.name}</h2>
          </div>
          <p>{person.age} years old</p>
          <p className="List-note">{person.note}</p>
        </li>
      );
    });
  };
  return (
    <ul>
      {renderList()}
    </ul>
  )
};
