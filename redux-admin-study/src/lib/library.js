
export const keys = {
  user: `__$$user$$__`
}

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
export const storage = new Storage();

export const pressedEnter = (fn = () => { }) => (e) => {
  if (e.key === 'Enter') {
    fn();
  }
  return null;
};


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





// const st = typeof localStorage === 'object' ? localStorage : {};
// export const storage = {
//   set(key, value) {
//     st[key] = JSON.stringify(value);
//   },
//   get(key) {
//     if (!st[key]) return null;
//     const value = st[key];
//     try {
//       const parsed = JSON.parse(value);
//       return parsed;
//     } catch (e) {
//       return value;
//     }
//   },
//   remove(key) {
//     delete st[key];
//   },
//   clear() {
//     if (st.clear) {
//       st.clear();
//     }
//   },
// };

