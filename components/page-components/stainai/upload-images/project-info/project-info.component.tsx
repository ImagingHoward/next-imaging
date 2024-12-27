import React from "react";
import classes from "./project-info.module.sass";

import { FaUserCog, FaProjectDiagram } from "react-icons/fa";
import { Upload } from "@/@types/stainai/upload-images";

interface IProps {
  batches: Upload.IBatches;
  setBatches: (batches: Upload.IBatches) => void;
};

const ProjectInfo = (props: IProps) => {
  return (
    <div className={classes.projectInfo}>
      <div className={classes.section}>
        <div>
          <FaUserCog />
        </div>
        <div>Use Name: {props.batches.username}</div>
        <div>Email: {props.batches.email}</div>
      </div>
      <div className={classes.section}>
        <div>
          <FaProjectDiagram />
        </div>
        <div>
          <label>*Project</label>
          <input
            name="Project"
            type="text"
            id="Project"
            defaultValue={props.batches.project}
            onChange={(e) => {
              props.setBatches(
                {
                  ...props.batches,
                  project: e.target.value
                })
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;