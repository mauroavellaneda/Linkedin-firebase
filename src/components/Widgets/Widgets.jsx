import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Coronavirus", "The vaccine is here!")}
      {newsArticle("Coronavirus", "The vaccine is here!")}
      {newsArticle("Coronavirus", "The vaccine is here!")}
      {newsArticle("Coronavirus", "The vaccine is here!")}
      {newsArticle("Coronavirus", "The vaccine is here!")}
      {newsArticle("Coronavirus", "The vaccine is here!")}
      {newsArticle("Coronavirus", "The vaccine is here!")}
      {newsArticle("Coronavirus", "The vaccine is here!")}
    </div>
  );
};

export default Widgets;
