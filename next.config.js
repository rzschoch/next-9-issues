const withCSS = require("@zeit/next-css");
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const { PATHS } = require("./src/modules/paths");
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");

const mapPaths = () => {
  const mapping = {};

  PATHS.forEach(path => {
    mapping[path] = { page: path, query: { language: "de" } };
    mapping["/en" + path] = { page: path, query: { language: "en" } };
  });
  return mapping;
};

const css = (config, { isDev }) => {
  return withCSS(
    Object.assign(config, {
      cssModules: true,
      cssLoaderOptions: {
        //friendlier naming for development, short hash for prod
        localIdentName: isDev ? "[name]-[local]" : "[hash:base64:6]"
      }
    })
  );
};

const bundleAnalyzer = config => {
  return withBundleAnalyzer(
    Object.assign(config, {
      analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
      analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
      bundleAnalyzerConfig: {
        server: {
          analyzerMode: "static",
          reportFilename: "../../../bundles/server.html"
        },
        browser: {
          analyzerMode: "static",
          reportFilename: "../../bundles/client.html"
        }
      }
    })
  );
};

module.exports = phase => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  const exportPathMap = async function() {
    const pathMap = mapPaths();
    return pathMap;
  };

  let config = {
    exportPathMap
  };

  config = css(config, { isDev });
  config = bundleAnalyzer(config);

  return config;
};
