import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";

const HeaderOption = ({ Icon, title, avatar, onClick }) => {
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
};

export default HeaderOption;
