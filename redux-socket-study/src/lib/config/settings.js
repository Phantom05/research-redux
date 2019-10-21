

export const NODE_ENV = process.env.NODE_ENV;
export const modeDev = NODE_ENV ==='development';
export const modeProd = NODE_ENV === 'production';
export const scanPort = (modeDev)?5501 : 8801;
export const scanHost = (modeDev)?'127.0.0.1' : 'test';