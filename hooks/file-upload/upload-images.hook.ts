import React, { useEffect, useState } from "react";
import { Upload } from "@/@types/stainai/upload-images";
import { useUserContext } from "@/hooks/auth";
import uploadFileToBlob from "@/utils/upload-file-to-blob";

const defaultBatch: Upload.Batch = {
  species: "rat",
  strain: "",
  treatment: "",
  organ: "brain",
  slice: "",
  pixel: "",
  region: "Cerebral Cortex",
  structure: "",
  images: [],
  rawImages: [],
};

export const useUploadImages = () => {
  const user = useUserContext();
  const [batches, setBatches] = useState<Upload.IBatches>({
    loading: false,
    username: "",
    email: "",
    project: `STAIN.AI-${new Date().getMonth() + 1
  }${new Date().getDate()}${new Date().getFullYear()}-${Math.floor(Math.random() * 10000)}`,
    uploadInfo: [defaultBatch],
    message: "",
  });

  useEffect(() => {
    setBatches({
      ...batches,
      username: `${user?.info?.firstname} ${user?.info?.lastname}`,
      email: user?.info?.email || "",
    });
  }, [user]);

  const handleField = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>, idx: number, field: string) => {
    const { value } = e.target;
    setBatches((prevBatches) => {
      const updatedUploadInfo = [...prevBatches.uploadInfo];
      updatedUploadInfo[idx] = {
        ...updatedUploadInfo[idx],
        [field]: value
      };

      return {
        ...prevBatches,
        uploadInfo: updatedUploadInfo,
      };
    });

    const organElement = document.getElementById(`organ_${idx}`) as HTMLSelectElement;
    const otherOrganElement = document.getElementById(`otherOrgan_${idx}`);

    if (organElement && otherOrganElement) {
      otherOrganElement.style.display = organElement.value === 'other' ? 'block' : 'none';
    }
  };

  const addNewBatch = (e: React.FormEvent) => {
    e.preventDefault();
    setBatches((prevBatches) => ({
      ...prevBatches,
      uploadInfo: [...prevBatches.uploadInfo, defaultBatch]
    }));
  };

  const updateUploadedFiles = (files: File[], idx: number) => {
    setBatches((prevBatches) => {
      const updatedUploadInfo = [...prevBatches.uploadInfo];
      updatedUploadInfo[idx] = {
        ...updatedUploadInfo[idx],
        images: files.map((file) => file.name),
        rawImages: files,
      };

      return {
        ...prevBatches,
        uploadInfo: updatedUploadInfo,
      };
    });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBatches((prevBatches) => ({
      ...prevBatches,
      loading: true,
    }));

    try {
      // Use map to create an array of promises for uploadFileToBlob
      const uploadPromises = batches.uploadInfo.map(
        async (batch, idx) => {
          await uploadFileToBlob(
            batches.username,
            batches.project,
            batch.rawImages,
            idx
          );
        }
      );

      // Wait for all uploadFileToBlob promises to resolve
      await Promise.all(uploadPromises);

      // Send the uploaded images Info to the Database
      const response = await fetch('/api/upload-images', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...batches,
          username: `${user?.info?.firstname} ${user?.info?.lastname}`,
          userid: user?.info?.userid,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('response.ok');
        setBatches((prevBatches) => ({
          ...prevBatches,
          loading: false,
          message: `<p>Thank you for submitting your images to STAIN.AI!</p> <p>Your process id is ${batches.project}. </p> <p>We will notify you once the process is completed.</p>`,
        }));
      }
    } catch (error) {
      setBatches((prevBatches) => ({
        ...prevBatches,
        loading: false,
        message: `An error occurred - ${error}. Please try again later.`,
      }));
    }
  };

  return {
    batches,
    setBatches,
    handleField,
    addNewBatch,
    updateUploadedFiles,
    onSubmit,
  };
};