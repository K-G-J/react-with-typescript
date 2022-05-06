import React, { FC, useState } from 'react';
import './App.css';
import { AddToList } from './components/AddToList';
import { List } from './components/List';

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

const App: FC = () => {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Rick Sanchez',
      age: 10000,
      url: 'https://avatarfiles.alphacoders.com/160/thumb-160369.jpg'
    }
  ]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
};

export default App;
