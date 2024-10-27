const fs = require("fs");
const path = require("path");

const loadReplies = () => {
  const jsonPath = path.join(process.cwd(), "config", "replies.json");
  const rawData = fs.readFileSync(jsonPath);
  return JSON.parse(rawData);
};

module.exports = {
  loadReplies,
};
