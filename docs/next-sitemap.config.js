/* eslint-disable @typescript-eslint/no-var-requires */
const packageJson = require("kitchn/package.json");
const { env } = require("process");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: packageJson.homepage,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies:
      env.NODE_ENV === "production"
        ? [{ userAgent: "*", allow: "/" }]
        : [{ userAgent: "*", disallow: "/" }],
  },
};
