import React from 'react';
// eslint-disable-next-line no-unused-vars
import Animals from '../Animals/Animals';
// eslint-disable-next-line no-unused-vars
import Species from '../Species/Species';
import './Zoo.module.css';

export default function Zoo() {
   /* Escribe acá tu código */
   const [zoo, setZoo] = React.useState({
      zooName: "",
      animals: [],
      species: [],
      allAnimals: [],
   });

   React.useEffect(()=>{
      fetch('http://localhost:3001/zoo')
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
   },[]);

   // const handleSpecies = (evento) => {

   //    switch (evento.target.value){

   //       case 'Mamíferos' : 
   //          const filtroMamifero=zoo.animals.filter(
   //             (mamifero) => mamifero.specie==="Mamíferos"
   //          );
   //          setZoo({...zoo,animals:filtroMamifero});
   //          break;
         
   //       case 'Reptiles' : 
   //          const filtroReptil=zoo.animals.filter(
   //             (reptiles) => reptiles.specie==="Reptiles"
   //          );
   //          setZoo({...zoo,animals:filtroReptil});
   //          break;

   //       case 'Aves' : 
   //          const filtroAve=zoo.animals.filter(
   //             (aves) => aves.specie==="Aves"
   //          );
   //          setZoo({...zoo,animals:filtroAve});
   //          break;
   //    }
   // }
   
//como se hizo en clase:
   function handleInputChange (evento) {
      setZoo({...zoo, zooName: evento.target.value});
   }

   function handleSpecies (evento) {
      setZoo(
         {...zoo, 
            animals: zoo.allAnimals.filter(
               animal => animal.specie === evento.target.value
            ),
         });
   }

   function handleAllSpecies () {
      setZoo({
         ...zoo,
         animals: zoo.allAnimals,
      });
   }
         // como se hizo en clase:
      
         return (
            <div>
                  <label htmlFor='nameInput'>Zoo Name:</label>
                  <input 
                     type= "text"
                     name= "nameInput"
                     onChange={handleInputChange} 
                     value={zoo.zooName} 
                  />
                  <h1>{zoo.zooName}</h1> 
      
                  <Species
                     species={zoo.species}
                     handleAllSpecies={handleAllSpecies}
                     handleSpecies={handleSpecies}
                  />
      
                  <Animals 
                     animals={zoo.animals}
                  />
            </div>
         );
   }


   // return (
   //    <div>
   //       <label>Zoo Name:</label>
   //       <input onChange={handleInputChange} value={zoo.zooName} ></input>
   //       <h1>{zoo.zooName}</h1>

   //       <Species
   //          species={zoo.species}
   //          handleAllSpecies={handleAllSpecies}
   //          handleSpecies={handleSpecies}
   //       />
   //       <Animals 
   //          animals={zoo.animals}
   //       />
   //    </div>
   // );







