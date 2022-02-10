import express from "express";
import cloudinary from "../utils/cloudinary.js";
import upload from "../utils/multer.js";

export const uploadImage = async (req, res, next) => {
  try {
    const uploadedResponse = await cloudinary.uploader.upload(
      req.file.path,
      {
        upload_preset: "linclon",
      }
    );
    // console.log(uploadedResponse);
    res.status(200).json({
      status: true,
      message: "Upload image to cloudinary",
      data: uploadedResponse.url,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
