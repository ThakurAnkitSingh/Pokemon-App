import React from 'react'

function MoviesCards({single}) {
    const {height, weight, name} = single;
    // console.log(single, "cardssssssss")
    // console.log(height, "heightssssssss")
    // console.log(weight, "weightssssssss")
    // console.log(name, "namessssssss")
    // // console.log(types[0].type.name, "typessssssss")
    return (
        <div className="card">
          <div className="card-info">
            <h2>{name}</h2>
            <p>Weight: {weight}</p>
            <p>Height: {height}</p>
            
          </div>
        </div>
      );
}

export default MoviesCards