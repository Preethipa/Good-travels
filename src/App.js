import React from "react";
import "./styles.css";
import { useState } from "react";

const travelPL = {
  Country: [
    { name: "Paris", rating: "4/5" },
    { name: "Switzerland", rating: "4.5/5" }
  ],

  India: [
    { name: "Agra", rating: "3.5/5" },
    { name: "Shimla", rating: "4.2/5" }
  ],

  Tamilnadu: [
    { name: "Ooty", rating: "4/5" },
    { name: "Kolli Hills", rating: "4.5/5" }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Tamilnadu");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> GoodTravels </h1>

      <p style={{ color: "#365314" }}>
        Check my favourite places.Select a genre to get started around these
        places.{" "}
      </p>

      <div>
        {Object.keys(travelPL).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#a3e635",
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
              border: "1px solid gray",
              margin: "0.5rem 1.5rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInLineStart: "0" }}>
          {travelPL[selectedGenre].map((travel) => (
            <li
              key={travel.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                paddingTop: "0.5rem",
                border: "1px solid gray",
                borderRadius: "0.5rem",
                margin: "1.5rem 0rem",
                width: "50%",
                backgroundColor: "#ecfccb"
              }}
            >
              {" "}
              <div style={({ fontsize: "large" }, { color: "#3f6212" })}>
                {" "}
                {travel.name}
              </div>
              <div style={({ fontsize: "smaller" }, { color: "#65a30d" })}>
                {" "}
                {travel.rating}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
