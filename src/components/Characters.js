//characters, so will look through all the characters and call the character component

import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

//dont need to hold state so function
//takes a list of characters from the rick and morty API
//since its just taking the character and presenting it, its considered a presentational component

export default function Characters({ characters }) {
  const charactersList = characters.map((character, i) => (
    <li key={i}>
      <Character character={character}/>
    </li>
  ));

  return (
    <ul>
      {charactersList}
    </ul>
  );
}

Characters.propTypes = {
  characters: PropTypes.array.isRequired
};

