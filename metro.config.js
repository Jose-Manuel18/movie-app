const { getDefaultConfig } = require("@expo/metro-config");
module.exports = {
  transformer: {
    getTransformOptions: function () {
      return {
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      };
    },
  },
};
