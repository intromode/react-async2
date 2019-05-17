import React from 'react';
import PropTypes from 'prop-types';

//no state, therefore function. 
//not manipulating data, just displaying the data, so presentational component

//creating just the single character display. 

export default function Character({ character }) {
  const {
    name, 
    status,
    species,
    image
  } = character;

  
  return (
    <section>
      <img src={image}/>
      <p>{name}</p>
      <p>{status}</p>
      <p>{species}</p>
    </section>
  );
}

Character.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired
};
