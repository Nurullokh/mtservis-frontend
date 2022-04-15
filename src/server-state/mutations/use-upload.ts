/* eslint-disable camelcase */
import { useMutation } from "react-query";
import { useState } from "react";
import { request } from "../api";
import { showNotification } from "@mantine/notifications";

interface UploadRequest {
  file: Blob | File;
}

interface UploadResponse {
  id: number;
  file: string;
  thumbnail_150: any;
}
export const useUpload = () => {
  const [progress, setProgress] = useState<number>(0);
  const mutationObject = useMutation(
    (data: UploadRequest) => {
      const fd = new FormData();
      fd.append("images", data.file);
      return request.public
        .post<UploadResponse[]>("/document/upload-images/", fd, {
          headers: {
            "Content-Type": data.file.type,
            // "object-type": data.type,
          },
          onUploadProgress: (progressEvent: {
            loaded: number;
            total: number;
          }) => {
            const progressAmount = Math.floor(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(progressAmount);
          },
        })
        .then((res) => res.data[0]);
    },
    {
      onSuccess() {
        showNotification({
          title: "Notification",
          message: "Uploaded succesfully!",
          color: "green",
        });
      },
      onError() {
        showNotification({
          title: "Notification",
          message: "Please try later!",
          color: "red",
        });
      },
      retry: false,
    }
  );
  return { progress, ...mutationObject };
};
