


let host ='127.0.0.1',port ;
if(process.env.NODE_ENV === 'development'){
  port = '8082';
}else if (process.env.NODE_ENV === 'production'){
  port = '5501';
}

export const ScanAppSocketConfig = {port,host};