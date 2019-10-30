
// 사용할 키들 넣어두기
export const keys = {
  user: `__$$user$$__`
}

//이메일 정규식
export function regEmail(value) {
  var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return (regExp.test(value)) ? true : false;
}

//숫자와 문자 포함 형태의 6~12자리 이내의 암호 정규식
export function regPassword(value) {
  var regExp = /^[A-Za-z0-9]{6,12}$/;
  return (regExp.test(value)) ? true : false;
}

export function regExp(type, value) {
  if (type === 'email') {
    return regEmail(value);
  }
  if (type === 'paaword') {
    return regPassword(value);
  }
}

export const storage = (() =>{
  class Storage {
    constructor() {
      this.st = typeof localStorage === 'object' ? localStorage : {};
    }
    set(key, value) {
      this.st[key] = JSON.stringify(value);
    }
    get(key) {
      if (!this.st[key]) return null;
      const value = this.st[key];
      try {
        const parsed = JSON.parse(value);
        return parsed;
      } catch (e) {
        return value;
      }
    }
    remove(key) {
      delete this.st[key];
    }
    clear() {
      return (this.st.clear) && this.st.clear();
    }
  }
  return new Storage()
})();


class Cookie {
  constructor() {

  }
  init(){

  }
  set(name, value, exp = 1) {
    // set(변수이름, 변수값, 기간);
    var date = new Date();
    date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';

  }
  get(name) {
    // get(변수이름)
    var x, y;
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      x = cookies[i].substr(0, cookies[i].indexOf('='));
      y = cookies[i].substr(cookies[i].indexOf('=') + 1);
      x = x.replace(/^\s+|\s+$/g, ''); // 앞과 뒤의 공백 제거하기
      if (x == name) {
        return unescape(y) // unescape로 디코딩 후 값 리턴
      }
    }
  }
  remove(name) {
    // deleteCookie(변수이름)
    document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
  }
  clear() {

  }
}
export const cookie = new Cookie()
// if faild login, do alert
export function alertLogin({result}){
  console.log('alert login in 0',result);
  const loginResponse ={
      ['1']:()=>{alert('Welcome.');},
      ['2']:()=>{alert('Please check your Email and Password.')},
      ['3']:()=>{alert('User not found Please register.')},
      ['4']:()=>{alert('Server error.')},
    };
    try{
      loginResponse[result]();
    }catch(e){
      alert('server Error')
    }
}


export function alertRegister({result}){
  console.log('alert register in ',result);
  const registerResponse ={
    ['1']:()=>{alert('Welcome.');},
    ['2']:()=>{alert('Please check your Email and Password.')},
    ['3']:()=>{alert('User not found Please register.')},
    ['4']:()=>{alert('Email is a duplicate Please check.')},
  };
  try{
    registerResponse[result]();
  }catch(e){
    alert('server Error')
  }
}