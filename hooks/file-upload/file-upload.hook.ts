import { useState, useCallback } from "react";

const KILO_BYTES_PER_BYTE = 1000;
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 1000000000000;

const convertBytesToKB = (bytes: number) => Math.round(bytes / KILO_BYTES_PER_BYTE);

interface FileUploadHookProps {
  maxFileSizeInBytes?: number;
  multiple?: boolean;
  updateFilesCb: (files: File[], idx: number) => void;
  idx: number;
  initialFiles?: File[];
}

export const useFileUpload = ({
  maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
  multiple = false,
  updateFilesCb,
  idx,
  initialFiles = [],
}: FileUploadHookProps) => {
  const [files, setFiles] = useState<File[]>(initialFiles);

  // Function to add new files, with size validation
  const addNewFiles = useCallback((newFiles: FileList) => {
    const validFiles = Array.from(newFiles).filter((file) => file.size <= maxFileSizeInBytes);

    if (!multiple && validFiles.length > 0) {
      return [validFiles[0]]; // If not multiple, only keep the first file
    }

    return [...files, ...validFiles]; // Add valid files to the current file list
  }, [files]);

  // Handler for file upload
  const handleNewFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const updatedFiles = addNewFiles(e.target.files);
      setFiles(updatedFiles);
      updateFilesCb(updatedFiles, idx);
    }
  };

  // Function to remove a file
  const removeFile = useCallback((fileName: string) => {
    const updatedFiles = files.filter((file) => file.name !== fileName);
    setFiles(updatedFiles);
    updateFilesCb(updatedFiles, idx);
  }, [files]);

  return {
    files,
    handleNewFileUpload,
    removeFile,
    convertBytesToKB,
  };
};
