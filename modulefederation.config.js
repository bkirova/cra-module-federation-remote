const deps = require("./package.json").dependencies;

module.exports = {
  name: "DreamAutoplay",
  filename: "remoteEntry.js",
  exposes: {
    "./app": "./src/index.tsx",
  },
  shared: {
    react: {
      requiredVersion: deps.react,
      import: "react", // the "react" package will be used a provided and fallback module
      shareKey: "react", // under this name the shared module will be placed in the share scope
      shareScope: "default", // share scope with this name will be used
      singleton: true, // only a single version of the shared module is allowed
    },
    "react-dom": {
      requiredVersion: deps["react-dom"],
      singleton: true, // only a single version of the shared module is allowed
    },
    "react-i18next": {
      requiredVersion: deps["react-i18next"],
      singleton: true, // only a single version of the shared module is allowed
    },
    "react-redux": {
      requiredVersion: deps["react-redux"],
      singleton: true, // only a single version of the shared module is allowed
    },
    "redux-thunk": {
      requiredVersion: deps["redux-thunk"],
      singleton: true, // only a single version of the shared module is allowed
    },
    "@reduxjs/toolkit": {
      requiredVersion: deps["@reduxjs/toolkit"],
      singleton: true, // only a single version of the shared module is allowed
    },
    "@dreamshot/utils": {
      requiredVersion: deps["@dreamshot/utils"],
      singleton: true, // only a single version of the shared module is allowed
    },
  },
};
