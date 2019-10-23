
export const NODE_ENV = process.env.NODE_ENV;
export const DevMode = NODE_ENV === 'development';
export const ProdMode = NODE_ENV === 'production';
export const apiAddress = (DevMode) 
? 'http://127.0.0.1:9999' 
: (ProdMode) 
? 'http://127.0.0.1:5501'
: null;

export const socketAddress =  (DevMode) 
? 'ws://127.0.0.1:8082' 
: (ProdMode) 
? 'ws://127.0.0.1:5501'
: null;

export const setValueOf =() =>{
  // const getId = (id) => document.getElementById(id)
  // getId('ff').setAttribute('data-valueOf','dof')
}
 