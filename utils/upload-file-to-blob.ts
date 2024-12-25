import { BlobServiceClient } from "@azure/storage-blob";

const createBlobInContainer = async (username: string, project: string, file: File, idx: number) => {

  const sasToken = process.env.NEXT_PUBLIC_AZURE_STORAGE_SAS_TOKEN;
  
  const uploadUrl = `https://pathoradi.blob.core.windows.net/?${sasToken}`;

  const blobService = new BlobServiceClient(uploadUrl);

  const containerClient = blobService.getContainerClient(`uploaded/${username}/${project}/imagebatch-${idx}`);

  const blobClient = containerClient.getBlockBlobClient(file.name);

  const options = { blobHTTPHeaders: { blobContentType: file.type } };

  await blobClient.uploadData(file, options);
};


const uploadFileToBlob = async (username: string, project: string, files: File[], idx: number) => {
  if (!files) return;

  // Use map to create an array of promises
  const uploadPromises = files.map(async (file) => {
    // upload file
    await createBlobInContainer(username, project, file, idx);
  });

  // Wait for all promises to resolve
  await Promise.all(uploadPromises);
};

export default uploadFileToBlob;