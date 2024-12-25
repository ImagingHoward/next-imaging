export namespace Upload {
  export interface IBatches {
    loading: boolean;
    username: string;
    email: string;
    project: string;
    uploadInfo: Batch[];
    message: string;
  }

  export interface Batch {
    species: string;
    strain: string;
    treatment: string;
    organ: string;
    slice: string;
    pixel: string;
    region: string;
    structure: string;
    images: string[];
    rawImages: File[];
  }
}