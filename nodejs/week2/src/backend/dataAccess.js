const path = require("path");
const fs = require("fs");

exports.getDataFromJson = function (jsonPath) {
  const filePath = path.join(__dirname, jsonPath);
  let rawData = fs.readFileSync(filePath);
  let jsonFile = JSON.parse(rawData);
  return jsonFile;
};

//module.exports = dataAccess;
