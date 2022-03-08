import React from "react";

export default function Pet({ id, name, age, location, selected, adoptPet, image }) {
  return (
    <div className={`pet ${selected ? "pet-selected" : ""}`}>
      <h3>Hi my name is {name}</h3>
      <p>I'm {age} years old</p>
      <p>I live in {location}</p>
      <div>
        <img src={image} alt="pet"></img>
      </div>
      <button onClick={() => adoptPet(id)}>Adopt Me 🐶</button>
    </div>
  );
}
