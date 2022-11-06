import React from 'react'

export default function Species (props) {
  // return (
  //   <div>
  //     <h2>Species</h2>
  //     {
  //       props.species.map(especie => 
  //       <button key={especie} onClick={props.handleSpecies} value={especie} >{especie}
  //       </button>)
  //     }
  //     <button onClick={props.handleAllSpecies}>All Animals</button>
  //   </div>
  // )

//como se hizo en clase:
 return (
    <div>
      <h2>Species</h2>
      {props.species.map((especie, idx) => ( 
        <button key={idx} onClick={props.handleSpecies} value={especie}>
            {especie}
        </button>
        ))}
      <button onClick={props.handleAllSpecies}>All Animals</button>
    </div>
  )
}


