const withTM = require("next-transpile-modules")(["debugbar"]);

module.exports = withTM({
  reactStrictMode: true,
});
