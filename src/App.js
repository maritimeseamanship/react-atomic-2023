import React from 'react';
import Character from './components/character/Character';
import './App.css';
const App = () => {
  return (
    <div className={'mortyChar'}>
       <Character id={1} name={'Rick Sanchez'} status={'Alive'} species={'Human'} gender={'male'} image={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}/>
      <Character id={2} name={'Morty Smith '} status={'Alive'} species={'Human'} gender={'Male'} image={'https://rickandmortyapi.com/api/character/avatar/2.jpeg}'}/>
      <Character id={3} name={'Summer Smith'} status={'Alive'} species={'Human'} gender={'Female'} image={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}/>
      <Character id={4} name={'Beth Smith'} status={'Alive'} species={'Human'} gender={'Female'} image={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}/>
      <Character id={5} name={'Jerry Smith'} status={'Alive'} species={'Human'} gender={'Male'} image={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}/>
      <Character id={6} name={'Abadango Cluster Princess'} status={'Alive'} species={'Alien'} gender={'Female'} image={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}/>
    </div>
  );
};

export default App;


