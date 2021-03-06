"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_functions_1 = require("firebase-functions");
const cloudinary = require("cloudinary");
cloudinary.config(firebase_functions_1.config().cloudinary);
async function uploadImageFromURL(imageURL, public_id) {
    try {
        const options = { public_id: public_id };
        const promise = new Promise(resolve => {
            cloudinary.v2.uploader.upload(imageURL, options, function (error, result) {
                if (error)
                    throw new Error(error);
                resolve(result);
            });
        });
        await promise;
        return promise;
    }
    catch (error) {
        throw new Error("uploadImageFromURL: " + error.message);
    }
}
exports.uploadImageFromURL = uploadImageFromURL;
//# sourceMappingURL=uploadImageFromURL.js.map