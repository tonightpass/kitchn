/* eslint-disable @typescript-eslint/no-var-requires */
const packageJson = require("kitchn/package.json");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: packageJson.homepage,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
