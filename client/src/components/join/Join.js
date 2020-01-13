import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuter">
      <div className="joinInner">
        <h1 className="header">Join a Chat</h1>
        <div>
          <input
            placeholder="Please type your name"
            className="joinInput"
            type="text"
            onChange={event => {
              setName(event.target.value);
            }}
          ></input>
        </div>
        <div>
          <input
            placeholder="Please type a chat room"
            className="joinInput mt-20"
            type="text"
            onChange={event => {
              setRoom(event.target.value);
            }}
          ></input>
        </div>
        <Link
          onClick={event =>
            !room || !name ? event.preventDefault() : undefined
          }
          to={`/chat?name=${name}&room=${room}`}
        >
          <button className="button mt-20" type="submit">
            <span>Sign In </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
