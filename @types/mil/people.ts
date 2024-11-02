import { StaticImageData } from "next/image";

export namespace People {
  export type IPeopleList = {
    [key: string]: IPerson;
  };

  export interface IPerson {
    image: StaticImageData;
    name: string;
    title: string;
    phone?: string;
    email: string;
    moreInfo: string;
    biography?: string;
    areasofExpertise?: string[];
    publicationsListLink?: string
    publicationsList?: string[] | string;
  }
}