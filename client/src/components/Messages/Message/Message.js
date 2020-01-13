import React from "react";

import "./Message.css";

import ReactEmoji from "react-emoji";
import classNames from "classnames";

const getInitials = name => {
  name = name.trim();
  const names = name.indexOf(" ") > -1 ? name.split(" ") : name.split("");
  return (
    `${names[0].charAt(0).toUpperCase()}` +
    `${names[1] ? names[1].charAt(0).toUpperCase() : ""}`
  );
};

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  let isAdmin = false;
  if (user.indexOf("admin") > -1) isAdmin = true;

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText" user-initial={getInitials(trimmedName)}></p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div
        className={classNames({
          messageBox: true,
          backgroundLight: !isAdmin,
          adminBackground: isAdmin
        })}
      >
        <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
      </div>
      {isAdmin ? (
        <p
          className={classNames({
            sentText: true,
            "is-admin": isAdmin
          })}
          admin-initial={getInitials(user)}
        />
      ) : (
        <p
          className={classNames({
            sentText: true,
            "is-admin": isAdmin
          })}
          user-initial={getInitials(user)}
        />
      )}
    </div>
  );
};

export default Message;
