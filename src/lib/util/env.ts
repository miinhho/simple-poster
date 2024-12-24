interface EnvVariables {
  NODE_ENV: 'development' | 'production' | 'test';
  MONGODB_URI: string;
}

const getEnvVar = (key: keyof EnvVariables) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} is not set.`);
  }
  return value;
};

// Environment variables
export const env: EnvVariables = {
  NODE_ENV: getEnvVar('NODE_ENV') as 'development' | 'production' | 'test',
  MONGODB_URI: getEnvVar('MONGODB_URI'),
} as const;