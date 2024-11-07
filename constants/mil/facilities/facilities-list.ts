
import facility_mri_1 from "@/assets/mil/images/facilities/imaging-facilities-bruker7t.jpg";
import facility_mri_2 from "@/assets/mil/images/facilities/imaging-facilities-bruker94t.jpg";
import mri_sample_1 from "@/assets/mil/images/facilities/imaging-home-MRI-Sample-1536x1012.jpg";
import mri_sample_2 from "@/assets/mil/images/facilities/imaging-facilities-mri-tumor.jpg";
import mri_sample_3 from "@/assets/mil/images/facilities/imaging-facilities-mri-brain.jpg";

import facility_optical_1 from "@/assets/mil/images/facilities/imaging-facilities-IVISSpectrum2.jpg";
import optical_sample_1 from "@/assets/mil/images/facilities/imaging-home-Optical-Fluorescence.jpg";
import optical_sample_2 from "@/assets/mil/images/facilities/imaging-home-Optical-Cancer.jpg";
import optical_sample_3 from "@/assets/mil/images/facilities/imaging-facilities-optical-highthroughput-1536x627.jpg";

import facility_pet_1 from "@/assets/mil/images/facilities/imaging-facilities-BrukerPET.jpg";

const FacilitiesList = {
    mri: {
      title: `MRI Facilities`,
      blurb: `The laboratory has two state-of-the-art NMR machines: a Bruker Avance III 7 Tesla (300 MHz), 21cm horizontal bore MRI/MRS system and a Bruker Avance 9.4 Tesla (400 MHz), 89 mm vertical bore MRI/MRS system. Both MRI/MRS systems are capable of performing MRI as well as spectroscopy studies. The NMR laboratory has acquisition workstations, a storage server and several workstations for spectroscopy data and image processing.`,
      fcilitiesItem: [
        {
          img: facility_mri_1,
          blurb: `
        <h2>Bruker 7T MRI</h2>
        <ul>
          <li>Bruker 7 Tesla (300MHz) MRI/MRS </li>
          <li>210mm horizontal bore Magnex magnet, 112mm clear space </li>
          <li>RF Coils: Volume, surface, and custom-made coils </li>
          <li>AVANCE III Console, Paravision 6 (PV6) software </li>
          <li>Detectable nuclei: 1H
        </ul>
        `,
        },
        {
          img: facility_mri_2,
          blurb: `
        <h2>Bruker 9.4T MRI</h2>
        <ul>
          <li>Bruker 9.4 Tesla (400MHz) MRI/MRS </li>
          <li>89mm vetical bore Oxford magnet </li>
          <li>RF Coils: Volume, surface, and custom-made coils </li>
          <li>AVANCE 400 Console, Paravision 5.1 (PV5) software </li>
          <li>Detectable nuclei: 1H, 19F, 13C, 31P </li>
        </ul>
        `,
        },
      ],
      sampleImg: [
        {
          img: mri_sample_1,
          blurb: `
        Example MRI studies for animal models of cardiac, renal, gastroenterological and musculoskeletal diseases and biology.
        `,
        },
        {
          img: mri_sample_2,
          blurb: `
        A mouse tumor (MDA-MB-231 solid tumor xenograft marked with arrow) visualized using Dynamic Contrast Enhanced MRI with Magnevist (upper row) and a targeted (Transferrin-Liposome-Magnevist) nanocomplex (lower row). The targeted nanocomplex exhibited a stronger and heterogeneous signal enhancement.
        `,
        },
        {
          img: mri_sample_3,
          blurb: `
        In vivo (upper row) and ex vivo (lower row) normal mouse brain images visualized using a high resolution T2 weighted fast spin-echo MRI sequence. This sequence is designed to detect Alzheimer's pathology (amyloid plaques) in the brains and spinal cords of transgenic mice, which become detectable by MRI at 6-8 months of disease progression.
        `,
        },
      ],
    },
    optical: {
      title: `Optical Imaging`,
      blurbImg: facility_optical_1,
      blurb: `The laboratory has a PerkinElmer IVIS® Spectrum imaging system which has brought physics and biology together for the practice of real-time in vivo imaging. It is one of the most versatile and advanced in vivo imaging system available on the market today. This IVIS Imaging System includes a sensitive CCD camera, a dark imaging chamber to minimize incident light, and specialized software to quantify and analyze the results.
      <br /><br />
      Stylized photo showing two researchers talking in front of optical imaging machineFor advanced fluorescence imaging, the IVIS Spectrum has the capability to use either trans-illumination (from the bottom) or epi-illumination (from the top) to illuminate in vivo fluorescent sources. 3D diffuse fluorescence tomography can be performed to determine source localization and concentration using the combination of structured light and trans illumination fluorescent images. The instrument is equipped with 10 narrow band excitation filters (30nm bandwidth) and 18 narrow band emission filters (20nm bandwidth) that assist in significantly reducing autofluorescence by the spectral scanning of filters and the use of spectral unmixing algorithms. In addition, the spectral unmixing tools allow the researcher to separate signals from multiple fluorescent reporters within the same animal.
      <br /><br />
      The IVIS Imaging Systems are currently being used for genomics, biotechnology, and pharmaceutical product research and development. Data gathered from animal models based on the real-time in vivo imaging technology allow researchers to better understand the mechanisms of diseases and drug effects.`,
      fcilitiesItem: [
        {
          img: facility_optical_1,
          blurb: `
        <h2>PerkinElmer IVIS Spectrum</h2>
        <ul>
          <li>High-sensitivity in vivo imaging of fluorescence and bioluminescence </li>
          <li>High throughput imaging – 23cm FOV, up to 5 mice simultaneously </li>
          <li>High resolution – up to 20micron when using 3.9cm FOV </li>
          <li>28 high efficiency filters (10 excitation, 18 emission) – 430-850nm </li>
        </ul>
        `,
        },
      ],
      sampleImg: [
        {
          img: optical_sample_1,
          blurb: `
        A preferential accumulation of fluorescent signal in breast cancer xenografts after intravenous injection of Transferrin labeled with near-infrared dye. The fluorescence signal in the tumor was detectable as early as 10 min, reached a maximum around 2 h and then decreased gradually.
        `,
        },
        {
          img: optical_sample_2,
          blurb: `
        Bio-luminescence images of breast cancer metastasis in the lungs (a) initial inoculation of <103 cancer cells, (b) a week later.
        `,
        },
        {
          img: optical_sample_3,
          blurb: `
        <b>Image-based Real-time Evaluation of Molecular Events.</b>
        <br/>
        HC11 mammary epithelial cells transfected with a luciferase construct of the beta-casein gene promoter (p-344/-1betac-Lux). The promoter activity was imaged optically in real time following lactogenic induction. The imaging signal intensity was closely correlated with that measured using a luminometer following protein extraction and consistent with the messenger RNA (mRNA) level of the endogenous beta -casein gene.
        `,
        },
      ],
    },
    pet: {
      title: `PET/SPECT/CT`,
      blurb: `The laboratory is currently in the process of installing and testing a Bruker Albira PET/SPECT/CT machine. The PET component consists of a two-ring PET system containing 8 LYSO crystal detectors in each ring. The CT system has a 10-50 kVp microfocus X-ray source and a 2400×2400 digital detector. This PET/CT machine has an MRI compatible animal management system.`,
      fcilitiesItem: [
        {
          img: facility_pet_1,
          blurb: `
          <h2>Bruker Albira PET/SPECT/CT Machine</h2>
          <ul>
            <li>PET: 8 LYSO crystal detector </li>
            <li>SPECT: 2 rotating gamma cameras </li>
            <li>CT: 10-50 kVp X-ray </li>
            <li>105mm bore size </li>
          </ul>
          <div>
            <a href="https://www.bruker.com/content/bruker/int/en/products-and-solutions/preclinical-imaging/nuclear-molecular-imaging/albirasi.html"> More Information </a>
          </div>
        `,
        },
      ],
    },
  };

export default FacilitiesList;