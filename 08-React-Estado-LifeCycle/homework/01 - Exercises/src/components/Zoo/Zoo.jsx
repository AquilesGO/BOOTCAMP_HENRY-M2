import React from 'react';
// eslint-disable-next-line no-unused-vars
import Animals from '../Animals/Animals';
// eslint-disable-next-line no-unused-vars
import Species from '../Species/Species';
import './Zoo.module.css';

export default function Zoo() {
<<<<<<< HEAD
  /* Escribe acá tu código */
  const [zoo, setZoo] = React.useState({
    zooName: "",
    animals: [],
    species: [],
    allAnimals: [],
  });

  React.useEffect(
    () => {
      fetch("http://localhost:3001/zoo")
        .then((res) => res.json())
        .then((data) =>
          setZoo({
            ...zoo,
            animals: data.animals,
            species: data.species,
            allAnimals: data.animals,
          })
        )
        .catch((error) => console.log(error));
    },
    // eslint-disable-next-line
    []
  );

  function handleInputChange(e) {
    setZoo({
      ...zoo,
      zooName: e.target.value,
    });
  }

  const handleSpecies = (e) => {
    setZoo({
      ...zoo,
      animals: zoo.allAnimals.filter(
        (a) => a.specie.toLowerCase() === e.target.value.toLowerCase()
      ),
    });
  };

  const handleAllSpecies = () => {
    setZoo({
      ...zoo,
      animals: zoo.allAnimals,
    });
  };
  return (
    <div>
      <label>Zoo Name:</label>
      <input value={zoo.zooName} onChange={handleInputChange} />
      <h1>{zoo.zooName}</h1>
      <div>
        <Species
          species={zoo.species}
          handleSpecies={handleSpecies}
          handleAllSpecies={handleAllSpecies}
        />
        <Animals animals={zoo.animals} />
      </div>
    </div>
  );
}
=======
   /* Escribe acá tu código */
   return (
      <div>
         <h1>-</h1>
      </div>
   );
}
>>>>>>> 7060f3d5b9b3920f216bd1745e8d9e5d6c986382
