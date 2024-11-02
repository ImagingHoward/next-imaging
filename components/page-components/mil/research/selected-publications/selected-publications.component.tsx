import React from "react";
import classes from "./selected-publications.module.sass";

import SelectedPublicationsList from "@/constants/mil/research/selected-publicationsL-list";

const SelectedPublications = () => {
  return (
    <div className={classes.wrapper}>
      <ul>
        {SelectedPublicationsList.map((research,index) => (
            <li key={`selected-publications_${index}`}>
              <span>{research.author} </span>
              <span className={classes.title}>{research.title} </span>
              <span>{research.info} </span>
              {research.publish.map((publish, index) => (
                <a
                  key={index}
                  href={publish.publishLink} 
                  target="_blank" rel="noreferrer"
                >
                  {publish.publish}
                </a>
              ))}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedPublications;