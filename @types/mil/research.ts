import { StaticImageData } from "next/image";

export namespace Research {

  export type IHighlightList = {
    [key in HighlightType]: IHighlight[];
  };

  export interface IHighlight {
    hightlightImg?: IHiighlightImg[];
    title: string;
    highlight: string;
    author: string;
    description: string;
    references: string[];
  }

  export interface IHiighlightImg {
    img: StaticImageData;
    blurb: string;
  }

  export enum HighlightType {
    PETATLAS = 'petatlas',
    TBI = 'tbi',
    CHD = 'chd',
    MRS = 'mrs', 
  }
}