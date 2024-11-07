import React from "react";
import classes from "./facilities.module.sass";

import { ImLab } from "react-icons/im";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import Bruker from "@/assets/mil/images/facilities/imaging-Facilities-Bruker.jpg";
import PET from "@/assets/mil/images/facilities/imaging-facilities-BrukerPET.jpg";
import IVISSpectrum2 from "@/assets/mil/images/facilities/imaging-facilities-IVISSpectrum2.jpg";

const Facilities = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.blockHeader}>
        <div>
          <ImLab size={25} /> Facilities: Biomedical Imaging
        </div>
      </div>
      <div className={classes.faclities}>
        Optical Imaging, Positron Emission Tomography, Molecular Biology, and
        Radiochemistry research support facilities and a mechanical and
        electronic shop for constructing RF probes
      </div>

      <div className={classes.featuredInner}>
        <img src={Bruker.src} />
        <div>
          <h2>MRI and MRS</h2>
          The laboratory has two state-of-the-art NMR machines: A Bruker
          Avance III 7.0 Tesla (300 MHz), 21 cm horizontal bore MRI/MRS system
          and a Bruker Avance 9.4 Tesla (400 MHz), 89 mm vertical bore MRI/MRS
          system.
          <div className={classes.viewMore}>
            {" "}
            <a href="/facilities/mri">
              View More <BsFillArrowRightCircleFill size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className={classes.featuredInner}>
        <div>
          <h2> Fluorescent and Bioluminescent Optical Imaging</h2>
          The laboratory has a PerkinElmer IVIS Spectrum imaging system which
          has brought physics and biology together for the practice of
          real-time in vivo imaging.
          <div className={classes.viewMore}>
            {" "}
            <a href="/facilities/optical">
              View More <BsFillArrowRightCircleFill size={20} />
            </a>
          </div>
        </div>
        <img src={IVISSpectrum2.src} />
      </div>
      <div className={classes.featuredInner}>
        <img src={PET.src} />
        <div>
          <h2>PET/SPECT/CT</h2>
          The laboratory has a Bruker Albira PET/SPECT/CT machine currently
          undergoing installation and testing.
          <div className={classes.viewMore}>
            {" "}
            <a href="/facilities/pet">
              View More <BsFillArrowRightCircleFill size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className={classes.featuredInner}>
        <div className={classes.featuredInner__other}>
          <h2> Other Facilities</h2>
          <div className={classes.container}>
            <div>
              <h3>MECHANICAL AND ELECTRONIC SHOP</h3>
              The mechanical and electronic shop is designed for constructing
              RF probes for various imaging purposes and various sizes of
              animals.
            </div>
            <div>
              <h3>MOLECULAR BIOLOGY</h3>
              The laboratory has a facility for Molecular Biology featuring
              equipment for cell culture, molecular analysis, and molecular
              probe synthesis and in vitro characterization.
            </div>
            <div>
              <h3>RADIOCHEMISTRY</h3>
              The laboratory has a facility for radiochemistry, featuring
              equipment for preparation of radionucleotides for PET imaging as
              well as preparation of other chemical agents.
            </div>
          </div>
        </div>
      </div>

      <div className={classes.faclities}>
        <h2>Usage Fees</h2>
        <table
          summary="Usage Fees"
          className={classes.feeTable}
        >
          <tbody>
            <tr>
              <th>Facility/Service</th>
              <th>Hourly Rate</th>
              <th>Daily Rate</th>
            </tr>
            <tr>
              <td>Bruker 9.4T MRI/MRS</td>
              <td>$250</td>
              <td>$1,200</td>
            </tr>
            <tr>
              <td>Bruker 7T MRI/MRS</td>
              <td>$250</td>
              <td>$1,200</td>
            </tr>
            <tr>
              <td>GE 3T Clinical MRI/MRS</td>
              <td>$600</td>
              <td>$1,500</td>
            </tr>
            <tr>
              <td>PerkinElmer IVIS Spectrum</td>
              <td>$150</td>
              <td>$600</td>
            </tr>
            <tr>
              <td>Bruker Albira PET/SPECT/CT</td>
              <td>$150</td>
              <td>$600</td>
            </tr>
            <tr>
              <td>Imaging Service and Data Analysis</td>
              <td>$70</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={classes.faclities}>
        <h2>Scheduling: </h2>
        <div>
          For new projects, please contact Dr. Paul Wang (
          <a href="mailto:pwang@howard.edu">pwang@howard.edu</a>) to schedule
          an initial meeting to discuss feasibility and project timeline.
        </div>
        <div>
          For scheduling established projects: Please use{" "}
          <b>
            <a href="http://secure3.ideaelan.com/Howard/Public/AppLogin.aspx">
              Idea Elan
            </a>
          </b>{" "}
          or contact Stephen Lin (
          <a href="mailto:pwang@howard.edu">stephen.lin@howard.edu</a>)
        </div>
      </div>
    </div>
  );
};

export default Facilities;
