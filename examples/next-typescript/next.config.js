/* eslint-disable @typescript-eslint/no-var-requires */
const withPreconstruct = require("@preconstruct/next");
const { withKitchen } = require("@tonightpass/kitchen");

module.exports = withPreconstruct(withKitchen());
