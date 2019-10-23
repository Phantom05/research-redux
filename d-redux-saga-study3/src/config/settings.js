

export const NODE_ENV = process.env.NODE_ENV;
export const DevMode = NODE_ENV === 'development';
export const ProdMode = NODE_ENV === 'production';

export const apiHost = DevMode ? '127.0.0.1' : '127.0.0.1';
export const apiPort = DevMode ? 9999 : 80;
export const wsHost = DevMode ? '127.0.0.1' : '127.0.0.1';
export const wsPort = DevMode ? 8082 : 5501;

export const apiAddress = `http://${apiHost}:${apiPort}`;
export const wsAddress = `ws://${wsHost}:${wsPort}`;