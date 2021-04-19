import React from "react";
import { actors } from "../data";

import Movies from "./Movies";

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((a) => {
        return (
          <div>
            <h1>{a.name}</h1>
            <ul>
              {a.movies.map((movie) => {
                return <li>{movie}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Actors;
