"use client"
import React, { useState } from "react";
import { CldImage, CldUploadWidget } from "next-cloudinary";
interface CloudinaryResult{
     public_id :string
}
export default function UploadPage() {
   let [publicId,setPublicId] = useState('')
  return (
    <>
      <CldUploadWidget uploadPreset="co2hejhp"
      onUpload={(result,widget)=>{
          const info = result.info as CloudinaryResult
          setPublicId(info.public_id)
      }}
      >
        {({ open }) => {
          return <button className=" btn btn-primary" onClick={() => open()}>Upload an Image</button>;
        }}
      </CldUploadWidget>
      <CldImage src={publicId} width={260} height={190} alt="photo"/>
    </>
  );
}
