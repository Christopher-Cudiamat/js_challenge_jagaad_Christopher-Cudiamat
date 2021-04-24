/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
export default (on, config) => {
  require("@cypress/code-coverage/task")(on, config);
  return config;
};
