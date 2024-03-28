"use client"
import React from "react";
import { CldUploadWidget } from "next-cloudinary";
export default function UploadPage() {
  return (
    <>
      <CldUploadWidget uploadPreset="co2hejhp">
        {({ open }) => {
          return <button className=" btn btn-primary" onClick={() => open()}>Upload an Image</button>;
        }}
      </CldUploadWidget>
    </>
  );
}
