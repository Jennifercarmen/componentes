import React from 'react';
const hobbies = ['cantar', 'Escuchar musica'];

const Sectionhobbies = () => (
  <div className="header">
    <ul>
      {hobbies.map(hobbie =>
        <li key={hobbie}>{hobbie}</li>)
        }
    </ul>
  </div>
)


export default Sectionhobbies