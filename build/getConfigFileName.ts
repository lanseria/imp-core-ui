/**
 * Get the configuration file variable name
 * @param env
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getConfigFileName = (env: Record<string, any>) => {
  return `__PRODUCTION__${env.VITE_GLOB_APP_SHORT_NAME || "__APP"}__CONF__`
    .toUpperCase()
    .replace(/\s/g, "");
};
