import React, { useState } from "react";
import classes from "./profolio.module.sass";

import { RiArrowDownSFill } from "react-icons/ri";
import { RiArrowDropUpFill } from "react-icons/ri";

import morphotype_Icon from "@/assets/stainai/images/learn-more/morphotype_Icon.png";
import morphotype_Icon_section from "@/assets/stainai/images/learn-more/morphotype_Icon_section.png";
import morphotype_Icon_fig from "@/assets/stainai/images/learn-more/morphotype_Icon_fig.png";


import morphometry_Icon from "@/assets/stainai/images/learn-more/morphometry_Icon.png";
import morphometry_fig from "@/assets/stainai/images/learn-more/morphometry_fig.png";
import morphometry_rainbow from "@/assets/stainai/images/learn-more/morphometry_rainbow.png";

import whole_brain_Icon from "@/assets/stainai/images/learn-more/whole_brain_Icon.png";
import whole_brain_fig from "@/assets/stainai/images/learn-more/whole_brain_fig.png";

const Profolio = () => {
  const [morphotypeExpand, setMorphotypeExpand] = useState(false);
  const [morphometryExpand, setMorphometryExpand] = useState(false);
  const [wholeBrainExpand, setWholeBrainExpand] = useState(false);
  return (
    <div className={classes.profolio}>
      <p className={classes.productProfolio}>PRODUCT PROFOLIO</p>

      <div className={classes.profolioSection}>
        <div className={classes.profolioSectionHeader}>
          <div className={classes.title}>
            <img src={morphotype_Icon.src} />
            Morphotype mapping
          </div>
          <div className={classes.show} onClick={() => setMorphometryExpand(!morphometryExpand)}>
            {morphometryExpand ? "Show less" : "Show more"}
            {morphometryExpand ? <RiArrowDropUpFill size={45} /> : <RiArrowDownSFill size={35} />}
          </div>
        </div>

        {
          morphometryExpand &&
          <div className={classes.expand}>
            <div className={classes.subtitle}>
              <i>Allow ROI analysis for region-specific comparison.</i>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', padding: '0 10%', position: "relative" }}>
              <div >
                <p>
                  In cardiac arrest, microglia activation is prominent associated with regional vulnerability.
                </p>
                <p>
                  Label every cell with morphotype ID. Convert Iba1 images to color-coded quantitative maps. Simplify cell quantifications by drawing ROIs.
                </p>
              </div>
              <div>
                <img src={morphotype_Icon_section.src} style={{ width: '450px' }} />
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={morphotype_Icon_fig.src} style={{ width: '900px' }} />
            </div>
          </div>
        }
      </div>


      <div className={classes.profolioSection}>
        <div className={classes.profolioSectionHeader}>
          <div className={classes.title}>
            <img src={morphometry_Icon.src} />
            Morphometry mapping
          </div>
          <div className={classes.show} onClick={() => setMorphotypeExpand(!morphotypeExpand)}>
            {morphotypeExpand ? "Show less" : "Show more"}
            {morphotypeExpand ? <RiArrowDropUpFill size={45} /> : <RiArrowDownSFill size={35} />}
          </div>
        </div>

        {
          morphotypeExpand &&
          <div className={classes.expand}>
            <div className={classes.subtitle}>
              <i>More insights into hetergeneous microglial morphology.</i>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', padding: '0 10%', position: "relative" }}>
              <div >
                <p>
                  StainAI derives more than 28 morphometric metrics for microglia providing parameters such as cell and soma area, perimeter, shape, skletonization, intracellular distances etc.
                </p>
                <img src={morphometry_fig.src} style={{ width: '600px' }} />
              </div>
              <div>
                <img src={morphometry_rainbow.src} style={{ width: '700px' }} />
              </div>
            </div>
          </div>
        }
      </div>

      <div className={classes.profolioSection}>
        <div className={classes.profolioSectionHeader}>
          <div className={classes.title}>
            <img src={whole_brain_Icon.src} />
            Whole brain distributiong
          </div>
          <div className={classes.show} onClick={() => setWholeBrainExpand(!wholeBrainExpand)}>
            {wholeBrainExpand ? "Show less" : "Show more"}
            {wholeBrainExpand ? <RiArrowDropUpFill size={45} /> : <RiArrowDownSFill size={35} />}
          </div>
        </div>

        {
          wholeBrainExpand &&
          <div className={classes.expand}>
            <div className={classes.subtitle}>
              <i>Reveals microglial activation pattern throughout the entire brain.</i>
            </div>
            <div style={{ display: 'flex', padding: '3% 10%', position: "relative" }}>
              <div >
                <p>
                  3D distribution of microglial morphotype and morphometrics.
                </p>
              </div>
              <div>
                <img src={whole_brain_fig.src} style={{ width: '650px' }} />
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Profolio;