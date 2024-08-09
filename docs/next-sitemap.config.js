/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require("child_process");
const fs = require("fs");
const packageJson = require("kitchn/package.json");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: packageJson.homepage,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
  transform: async (config, path) => {
    let filePath = `pages${path}.md`;
    let exist = fs.existsSync(filePath);

    if (!exist) {
      filePath += "x";
      exist = fs.existsSync(filePath);
    }

    let lastmod = config.autoLastmod ? new Date().toISOString() : undefined;

    if (exist) {
      try {
        const cmd = `git log -1 --format=%ct ${filePath}`;
        const result = execSync(cmd).toString().trim();

        if (result) {
          lastmod = new Date(+result * 1000).toISOString();
        }
      } catch (error) {
        console.error(
          `Error executing git command for file ${filePath}:`,
          error.message,
        );
      }
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
