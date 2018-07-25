"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

let deleteFromCDN = (() => {
  var _ref = _asyncToGenerator(function* (public_id, resource_type) {
    try {
      const options = { invalidate: true };
      if (resource_type) options.resource_type = resource_type;

      let promise = new Promise(function (resolve) {
        cloudinary.v2.uploader.destroy(public_id, options, function (error) {
          if (error) throw new Error(error);
          resolve();
        });
      });
      yield promise;
    } catch (error) {
      throw new Error("deleteFromCDN: " + error.message);
    }
  });

  return function deleteFromCDN(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const cloudinary = require("cloudinary");

const cloudinaryKey = require("../../../../cloudinary-api-key.json");

cloudinary.config(cloudinaryKey);

exports.deleteFromCDN = deleteFromCDN;