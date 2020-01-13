import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";

import "./TextContainer.css";

const getInitials = name => {
  name = name.trim();
  const names = name.indexOf(" ") > -1 ? name.split(" ") : name.split("");
  return (
    `${names[0].charAt(0).toUpperCase()}` +
    `${names[1] ? names[1].charAt(0).toUpperCase() : ""}`
  );
};

const TextContainer = ({ users, room }) => (
  <div className="textContainer">
    <div>
      <h1>
        Realtime group Chat Application{" "}
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h1>
      <h2>
        Created with React, Express, Node and Socket.IO{" "}
        <span role="img" aria-label="emoji">
          ❤️
        </span>
      </h2>
    </div>
    {users ? (
      <div>
        <h1>
          People's Online in room
          <span style={{ color: "lime" }}> [{room}]</span>:
        </h1>
        <div className="activeContainer">
          <h4>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                <p user-initial={getInitials(name)}></p>
                {name}
                <img alt="Online Icon" src={onlineIcon} />
              </div>
            ))}
          </h4>
        </div>
      </div>
    ) : null}
  </div>
);

export default TextContainer;
