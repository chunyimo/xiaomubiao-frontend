export const isEnvDevelopment = () => {
  return process.env.NODE_ENV === 'development';
};
export const isEnvProduction = () => {
  return process.env.NODE_ENV === 'production';
};