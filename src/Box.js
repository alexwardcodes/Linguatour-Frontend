import "./App.css";
import React from 'react';
import { useState } from "react";
import Draggable from "react-draggable";

export default function Box(props) {


  const eventHandler = (e, data) => {
    console.log("Event Type", e.type);
    console.log({ e, data });
  };

  let vocab = props.vocab;
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked((current) => !current);
  };
  console.log(vocab);

  return (
    <>
    <p></p>
    <p> Match the following words </p>

      {Object.entries(vocab).map((word, index) => {
        return (
          // <div key={index}>

          <div className="main" key = {index}>
            <Draggable onDrag={eventHandler}>
              <div
                className="box"
                style={{
                  backgroundColor: clicked ? "salmon" : "",
                  color: clicked ? "white" : "",
                }}
                onClick={handleClick}
              >
                {word[0]}
              </div>
            </Draggable>
                <div className="box"></div>
            <Draggable onDrag={eventHandler}>
              <div
                className="box"
                style={{
                  backgroundColor: clicked ? "salmon" : "",
                  color: clicked ? "white" : "",
                }}
                onClick={handleClick}
              >
                {word[1]}
                {/* </div> */}
              </div>
            </Draggable>
          </div>
        );
      })}
    </>
  );
}
