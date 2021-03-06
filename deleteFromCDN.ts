"use strict";
import {config} from "firebase-functions";
const cloudinary = require("cloudinary");

cloudinary.config(config().cloudinary);

async function deleteFromCDN(public_id, resource_type) {
  try {
    const options: any = { invalidate: true };
    if (resource_type) options.resource_type = resource_type;

    const promise = new Promise(resolve => {
      cloudinary.v2.uploader.destroy(public_id, options, function(error) {
        if (error) throw new Error(error);
        resolve();
      });
    });
    await promise;
  } catch (error) {
    throw new Error("deleteFromCDN: " + error.message);
  }
}

export { deleteFromCDN };
