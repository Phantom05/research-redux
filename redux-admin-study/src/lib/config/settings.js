

export const mode = process.env.NODE_ENV;
export const DevMode  = mode ==='development';
export const ProdMode  = mode === 'production';
export const host = DevMode?`127.0.0.1`:'127.0.0.1';
export const port = DevMode?`9999`:'9999';
export const apiAddress = `http://${host}:${port}`;
export const wsAddress = `ws://${host}:${port}`;