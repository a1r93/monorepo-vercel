import tseslint from "typescript-eslint";
import baseConfig from "../../eslint.config.js";

export default tseslint.config({
  extends: [baseConfig],
});
