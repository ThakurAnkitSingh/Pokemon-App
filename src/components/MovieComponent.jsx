import React from "react";
import MovieCard from "./MovieCard";
import MoviesCards from "./MoviesCards";

const MovieComponent = ({ movieInfo, search, single }) => {

  return (
    <div className="wrapper">
      <div className="container">
        <h1>List of cards</h1>
        <div className="grid grid-three-column">

        {search==true && <MoviesCards single={single}/>}


          {movieInfo.map((curVal, id) => {
            return <MovieCard key={id} myData={curVal} />;
          })}
        </div>



      </div>
    </div>
  );
};

export default MovieComponent;
