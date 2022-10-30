

import Http from './http';
import store from '@/store';


class AuthHttp extends Http {
  constructor() {
    super();
    this.http.interceptors.response.use(response => response, this.$handleError.bind(this));
  }

  $handleError(error) {
    let msg = [];

    function flatten(target, opts) {
      opts = opts || {};

      let delimiter = opts.delimiter || '.';

      function step(object, prev) {
        Object.keys(object).forEach(function(key) {
          let value = object[key];
          let isArray = Array.isArray(value);
          let type = Object.prototype.toString.call(value);
          let isObject = type === '[object Object]';

          let newKey = prev
            ? prev + delimiter + key
            : key;

          if (!isArray && isObject && Object.keys(value).length) {
            return step(value, newKey);
          }

          if (isArray) {
            Array.prototype.push.apply(msg, value);
          } else {
            msg.push(value);
          }
        });
      }

      step(target);
    }
    if (!(error.response === 'undefinied' && error.response.data ==='undefinied')) {
      if (error.response.status === 400 || error.response.status === 404 || error.response.status === 403) {
        flatten(error.response.data);
      } else if (error.response.status === 401) {
        msg.push('Zostałeś wylogowany po okresie bezczynności.');
      }
    }

    if (!msg.length) {
      msg.push('Wystąpił nieoczekiwany błąd.');
    }

    store.commit('showMessage', { message: msg.join('\n'), color: 'error' });

    throw error;
  }

  getConfig() {
    return {
      headers: {
        'Content-Type': 'application/json'
      },
      baseURL: process.env.VUE_APP_API_URL,
    };
  }
}

export default AuthHttp;
