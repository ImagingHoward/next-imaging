import React, { useState } from "react";
import classes from "./image-batch-info.module.sass";
import classnames from "classnames";
import FileUpload from "./file-upload/file-upload.component";

interface ImageBatchInfoProps {
  idx: number;
  handleField: (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>, idx: number, field: string) => void;
  updateUploadedFiles: (files: File[], idx: number) => void;
}

const ImageBatchInfo: React.FC<ImageBatchInfoProps> = ({ idx, handleField, updateUploadedFiles }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.imageBatchNum}>
        <div className={classes.lightgrey}>Image Batch</div>
        <div>{idx + 1}</div>
      </div>
      <div className={classes.imageBatchInfo}>
        <div className={classnames(classes.col, classes.lightpurple)}>
          <div className={classes.imageBatchHeader}>TISSUE</div>
          <div className={classes.row}>
            <div className={classes.col}>
              <label>*Species</label>
              <select
                name={`species_${idx}`}
                id={`species_${idx}`}
                onChange={(e) => handleField(e, idx, "species")}
              >
                <option value="rat">rat</option>
                <option value="mouse">mouse</option>
                <option value="primate">primate</option>
                <option value="bovine">bovine</option>
                <option value="pig">pig</option>
                <option value="other">other</option>
              </select>
            </div>
            <div className={classes.col}>
              <label>Strain</label>
              <input
                name={`strain_${idx}`}
                type="text"
                id={`strain_${idx}`}
                onChange={(e) => handleField(e, idx, "strain")}
              />
            </div>
            <div className={classes.col}>
              <label>Animal Treatment</label>
              <input
                name={`treatment_${idx}`}
                type="text"
                id={`treatment_${idx}`}
                onChange={(e) => handleField(e, idx, "treatment")}
              />
            </div>
            <div className={classes.col}>
              <label>*Organ</label>
              <select
                name={`organ_${idx}`}
                id={`organ_${idx}`}
                onChange={(e) => handleField(e, idx, "organ")}
              >
                <option value="brain">brain</option>
                <option value="spinal cord">spinal cord</option>
                <option value="retina">retina</option>
                <option value="other">other</option>
              </select>
              <input
                type="text"
                name={`otherOrgan_${idx}`}
                id={`otherOrgan_${idx}`}
                onChange={(e) => handleField(e, idx, "organ")}
                style={{ marginLeft: "10px", marginTop: "5px", display: "none" }}
              />
            </div>
          </div>
        </div>

        <div className={classnames(classes.col, classes.lightyellow)}>
          <div className={classes.imageBatchHeader}>IMAGE METADATA</div>
          <div className={classes.row}>
            <div className={classes.col}>
              <label>*Slice Thickness(um)</label>
              <input
                name={`slice_${idx}`}
                type="text"
                id={`slice_${idx}`}
                onChange={(e) => handleField(e, idx, "slice")}
              />
            </div>
            <div className={classes.col}>
              <label>*Pixel Size(um)</label>
              <input
                name={`pixel_${idx}`}
                type="text"
                id={`pixel_${idx}`}
                onChange={(e) => handleField(e, idx, "pixel")}
              />
            </div>
            <div className={classes.col}>
              <label>*Anatomical Region</label>
              <select
                name={`region_${idx}`}
                id={`region_${idx}`}
                onChange={(e) => handleField(e, idx, "region")}
              >
                <option value="Cerebral Cortex">Cerebral Cortex</option>
                <option value="Hippocampus">Hippocampus</option>
                <option value="Striatum">Striatum</option>
                <option value="Amygdala">Amygdala</option>
                <option value="Thalamus">Thalamus</option>
                <option value="Hypothalamus">Hypothalamus</option>
                <option value="Midbrain">Midbrain</option>
                <option value="Cerebellum">Cerebellum</option>
                <option value="Medulla Oblongata">Medulla Oblongata</option>
                <option value="Pons">Pons</option>
                <option value="Olfactory Bulb">Olfactory Bulb</option>
                <option value="Nucleus Accumben">Nucleus Accumben</option>
                <option value="Periaqueductal Gray">Periaqueductal Gray</option>
                <option value="Superior Colliculus">Superior Colliculus</option>
                <option value="Inferior Colliculus">Inferior Colliculus</option>
              </select>
            </div>
            <div className={classes.col}>
              <label>Structure Detail</label>
              <input
                name={`structure_${idx}`}
                type="text"
                id={`structure_${idx}`}
                onChange={(e) => handleField(e, idx, "structure")}
              />
            </div>
          </div>
        </div>

        <div className={classnames(classes.col, classes.lightblue)}>
          <div style={{ width: "100%" }}>
            <FileUpload
              accept=".jpg,.png,.jpeg, .tif"
              multiple
              updateFilesCb={updateUploadedFiles}
              idx={idx}
            />
          </div>
        </div>
      </div>
    </div>
  );
};


export default ImageBatchInfo;