import React from "react";
import classes from "./facility.module.sass";
import { Facilities } from "@/@types/mil/facilities";

import { ImLab } from "react-icons/im";
import { MdPhotoLibrary } from "react-icons/md";

interface IProps {
  data: Facilities.IFacility;
}

const Facility = (props: IProps) => {
  const { data: facility } = props;

  return (
    <div className={classes.wrapper}>
      <div className={classes.blockHeader}>
        <div>
          <ImLab size={25} /> {facility.title}: Biomedical Imaging
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: facility.blurb }} />

      {facility.fcilitiesItem?.map((item) => (
        <div className={classes.item}>
          <div dangerouslySetInnerHTML={{ __html: item.blurb }} />

          <img src={item.img.src} />
        </div>
      ))}

      {facility.sampleImg && (
        <div className={classes.blockHeader}>
          <div>
            <MdPhotoLibrary size={25} /> Sample Image
          </div>
        </div>
      )}
      {facility.sampleImg?.map((sample) => (
        <div className={classes.item}>
          <div dangerouslySetInnerHTML={{ __html: sample.blurb }} />
          <img src={sample.img.src} />
        </div>
      ))}
    </div>
  );
};

export default Facility;