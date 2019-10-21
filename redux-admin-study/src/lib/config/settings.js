

export const mode = process.env.NODE_ENV;
export const devMode  = mode ==='development';
export const prodMode  = mode === 'production';
export const host = `127.0.0.1`;
export const port = `9999`;
export const apiAddress = `http://${host}:${port}`