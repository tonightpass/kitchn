/* eslint-disable @typescript-eslint/no-var-requires */
const spawn = require("cross-spawn");
const merge = require("merge-stream");

const env = { ...process.env, FORCE_COLOR: true };

const devPackages = spawn("pnpm", ["dev:packages"], {
  stdio: "pipe",
  env,
});

const devApps = () => spawn("pnpm", ["dev:apps"], { stdio: "pipe", env });

const waitForSuccess = (stream) => {
  return new Promise((resolve) => {
    stream.on("data", (data) => {
      const output = data.toString();
      console.log(output);
      if (
        output.includes("info") &&
        output.includes("waiting for changes...")
      ) {
        stream.removeAllListeners("data");
        resolve();
      }
    });
  });
};

devPackages.stderr.on("data", (data) => {
  console.error(data.toString());
});

devPackages.on("exit", (code) => {
  console.log(`dev:packages exited with code ${code}`);
});

waitForSuccess(devPackages.stdout).then(() => {
  const devAppsProcess = devApps();
  const mergedOutput = merge(devPackages.stdout, devAppsProcess.stdout);
  mergedOutput.on("data", (data) => {
    console.log(data.toString());
  });
  const mergedError = merge(devPackages.stderr, devAppsProcess.stderr);
  mergedError.on("data", (data) => {
    console.error(data.toString());
  });
});
