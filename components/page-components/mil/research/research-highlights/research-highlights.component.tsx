import React from "react";
import classes from "./research-highlights.module.sass";

import ResearchHighlightsList from "@/constants/mil/highlight-list";

const ResearchHighlightsLists = () => {
  return (
    <>
      {Object.values(ResearchHighlightsList).map((research, index) => (<div key={index} className={classes.researchHightlights}>
          <img src={research.researchImg.src} alt={research.title} />
          <div>
            <div>
              <h2 className={classes.title}>
                <a href={`research/${research.highlight}`}>{research.title}</a>
              </h2>
              <div className={classes.author}>{research.author}</div>
              <div>{research.description}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ResearchHighlightsLists;