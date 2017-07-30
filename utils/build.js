const webpack = require("webpack");
const chalk = require("./chalk");

const env = process.env.NODE_ENV;
const config = require("../config/webpack.config")(env);

console.log(chalk.processing("Generating minified bundle. This will take a moment..."));

webpack(config).run((error, stats) => {
  if (error) {
    console.log(chalk.error(error));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map((err) => console.log(chalk.error(err)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.warning("Webpack generated the following warnings: "));
    jsonStats.warnings.map((warning) => console.log(chalk.warning(warning)));
  }

  console.log(`Webpack stats: ${stats}`);
  console.log(chalk.success("Your app is compiled in production mode in /dist."));

  return 0;
});
