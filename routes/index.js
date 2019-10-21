const bootcamps = require("./bootcamps");

module.exports = app => {
  const api_url = "/api/v1";

  app.use(`${api_url}/bootcamps`, bootcamps);
};
