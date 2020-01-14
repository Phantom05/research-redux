


/**
 * actions 프리셋 제작
 * @param {string} actionName  Saga를 위한 액션 이름을 넣어줌.
 */
export function makeAsyncActions(actionName) {
  const prefix = actionName;
  return {
    INDEX : prefix,
    REQUEST : prefix + '_REQUEST',
    PENDING : prefix + '_PENDING',
    SUCCESS : prefix + '_SUCCESS',
    FAILURE : prefix + '_FAILURE',
  }
}


export function rmmbrace(value){
  // var regExp = /[\{\}']+/g;
  return value.replace(/[\{\}']+/g,'')
}

/**
 * 비밀번호 유효성 검사
 * @param {*} value string
 */
export function regPassword(value){
  var regExp = /^[A-Za-z0-9]{6,12}$/;
  return regExp.test(value) 
}

/**
 * 이메일 유효성 검사
 * @param {string} value 
 */
export function regEmail(value){
  var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return regExp.test(value)
}

/**
 * 글자 제한
 * @param {number} len 제한할 글자 길이
 * @param {string} value 텍스트
 * @param {boolean} bool 마지막 boolean으로 1번째부터인지 0번째부터인지?
 */
export function regLength(len,value,bool){
  try{
    value = value.toString().trim();
  }catch(e){
    console.log(e,'error');
  }
  var regExp = bool ? new RegExp(`^.{${len},${len}}$`) : new RegExp(`^.{1,${len}}$`);
    return regExp.test(value)
}


const st = typeof localStorage === 'object' ? localStorage : {};
export const keys = {
  user: '__$$_dof__',
  token:'__$$_dof_$$__token'
};

export const storage= {
  set(key, value) {
    st[key] = JSON.stringify(value);
  },
  get(key) {
    if (!st[key]) return null;
    const value = st[key];
    try {
      const parsed = JSON.parse(value);
      return parsed;
    } catch (e) {
      return value;
    }
  },
  remove(key) {
    delete st[key];
  },
  clear() {
    if (st.clear) {
      st.clear();
    }
  },
};

class Cookie {
  set(name, value, exp = 1) {
    // set(변수이름, 변수값, 기간(일수));
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
      if (x === name) {
        return unescape(y) // unescape로 디코딩 후 값 리턴
      }
    }
  }
  remove(name) {
    // deleteCookie(변수이름)
    document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
  }
  clear() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  }
}




export const cookie = new Cookie()

export function disableDragSelect(target){
  try{
    if(target){
      target.setAttribute('onselectstart','return false')
      target.setAttribute('oncontextmenu','return false');
      target.setAttribute('ondragstart','return false');
    }
  }catch(e){
    console.log(e);
  }
}

export const getScrollTop = () => {
  if (!document.body) return 0;
  const scrollTop = document.documentElement
    ? document.documentElement.scrollTop || document.body.scrollTop
    : document.body.scrollTop;
  return scrollTop;
};

export const getScrollBottom = () => {
  if (!document.body) return 0;
  const { scrollHeight } = document.body;
  const { innerHeight } = window;
  const scrollTop = getScrollTop();
  return scrollHeight - innerHeight - scrollTop;
};

export const preventStickBottom = () => {
  const scrollBottom = getScrollBottom();
  if (scrollBottom !== 0) return;
  if (document.documentElement) {
    document.documentElement.scrollTop -= 1;
  } else {
    if (!document.body) return;
    document.body.scrollTop -= 1;
  }
};

export function numRangeMap(start,end){
  return function(num){
    return (num >= start && num <= end)
  }
}

