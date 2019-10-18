


export const mode_development = process.env.NODE_ENV === 'development';
export const mode_production = process.env.NODE_ENV === 'production'

let host ='127.0.0.1',port;
if(mode_development){
  port = '8082';
}else if (mode_production){
  port = '5501';
}

export const ScanAppSocketConfig = {port,host};

