"use strict";
module.exports = function getPublicURL(filename) {
  return `https://storage.googleapis.com/api-01-ht.appspot.com/${encodeURIComponent(
    filename
  )}`;
};
