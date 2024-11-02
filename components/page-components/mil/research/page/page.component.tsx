import React from "react";
import classes from "./page.module.sass";

import { IoMdPaper, IoMdPeople } from "react-icons/io";
import { GoMegaphone } from "react-icons/go";
import { HiArrowRight } from "react-icons/hi";

import { ResearchHighlightsLists, SupportedResearchProjects, SelectedPublications } from "@/components/page-components/mil/research";

const Research = () => {
  return (
    <>
      <div className={classes.wrapper}>
        {/* <div className={classes.breadscrumbs}>
          HOME » <strong>RESEARCH</strong>
        </div> */}
        <div className={classes.researchContent}>
          <div className={classes.header}>
            The <strong>M</strong>olecular <strong>I</strong>maging
            <strong>L</strong>aboratory provides state-of-the-art
            instrumentation and intellectual resources to support preclinical
            imaging research.
          </div>
          <div className={classes.blockHeader}>
            <div>
              <GoMegaphone size={28} /> Research Highlights
            </div>
          </div>
          <div className={classes.textBlock}>
            <ResearchHighlightsLists />
          </div>
          <div className={classes.blockHeader}>
            <div>
              <IoMdPeople size={30} /> Supported Research Projects
            </div>
          </div>
          <div className={classes.textBlock}>
            <SupportedResearchProjects />
          </div>
          <div className={classes.blockHeader}>
            <div>
              <IoMdPaper size={30} /> Selected Publications
            </div>
            <div className={classes.more}>
              <a href="/research/full-publications">
                <div className={classes.flex}>
                  View Full Publications
                  <div className={classes.narrow}>
                    <HiArrowRight size={18} />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className={classes.textBlock}>
            <SelectedPublications />
          </div>
        </div>
      </div>
    </>
  );
};

export default Research;
