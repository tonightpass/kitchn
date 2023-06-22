/* eslint-disable @typescript-eslint/no-var-requires */
const withPreconstruct = require("@preconstruct/next");
const { withKitchenConfig } = require("@tonightpass/kitchen/next");

module.exports = withPreconstruct(withKitchenConfig());
