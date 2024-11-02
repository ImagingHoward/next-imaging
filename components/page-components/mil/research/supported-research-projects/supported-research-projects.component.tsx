import React from "react";
import classes from "./supported-research-projects.module.sass";

import SupportedResearchProjectList from "@/constants/mil/research/supporte-research-project-list";

const SupportedResearchProjects = () => {
  return (
    <div className={classes.wrapper}>
      <ul>
        {SupportedResearchProjectList.map((research, index) => (
          <React.Fragment key={`supported_${index}`}>
            <li>
              <span>{research.title}</span>
            </li>
            <div className={classes.supported}>{research.supoorted}</div>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default SupportedResearchProjects;