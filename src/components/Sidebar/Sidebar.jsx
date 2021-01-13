import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";

const Sidebar = () => {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          className="sidebar__img"
          src="https://images.unsplash.com/photo-1570005616859-784c0e1644c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
          alt="cover"
        />
        <Avatar className="sidebar__avatar" />
        <h2 className="sidebar__name">Mauro Avellaneda</h2>
        <h4 className="sidebar__email">mauroeavellaneda@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed your profile</p>
          <p className="sidebar__statNumber">86</p>
        </div>
        <div className="sidebar__stat">
          <p>Views of your post</p>
          <p className="sidebar__statNumber">362</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p className="sidebar__recent">Recent</p>
        {recentItem("reactjs")}
        {recentItem("frontend")}
        {recentItem("developer")}
        {recentItem("javascript")}
        {recentItem("nodejs")}
      </div>
    </div>
  );
};

export default Sidebar;
