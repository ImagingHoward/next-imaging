import { StaticImageData } from "next/image";

export namespace Facilities {
  export type IFacilityList = {
    [key in FacilityType]: IFacility[];
  };

  export interface IFacility {
    title: string;
    blurbImg?: StaticImageData;
    blurb: string;
    fcilitiesItem?: IFacilityImg[];
    sampleImg?: IFacilityImg[];
  }

  export interface IFacilityImg {
    img: StaticImageData;
    blurb: string;
  }

  export enum FacilityType {
    MRI = 'mri',
    OPTICAL = 'optical',
    PET = 'pet',
  }
}