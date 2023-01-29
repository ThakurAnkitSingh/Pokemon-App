import React from "react";

const MovieCard = ({ myData }) => {
  const {name} = myData;
  // const { title, body, id } = myData;
  return (
    <div className="card">
      <div className="card-info">
        <h2>{name}</h2>
        
      </div>
    </div>
  );
};

export default MovieCard;
