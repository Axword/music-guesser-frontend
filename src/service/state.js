const AUTO_LOGOUT_TIME = process.env.VUE_AUTO_LOGOUT_TIME ? parseInt(process.env.VUE_AUTO_LOGOUT_TIME): 15 * 60;


class State {
  static setAccessToken(token) {
    localStorage.setItem('authTimeStamp', token ? Date.now().toString() : '0');
    localStorage.setItem('access-token', token);
  }

  static getAccessToken() {
    return localStorage.getItem('access-token');
  }

  static setRoomId(room_id) {
    localStorage.setItem('room-id', room_id);
  }

  static getRoomId() {
    return localStorage.getItem('room-id');
  }

  static authTimeStamp() {
    return parseInt(localStorage.getItem('authTimeStamp') || '0');
  }

  static loginTimeDelta() {
    return (Date.now() - this.authTimeStamp());
  }

  static isAuth() {
    return this.loginTimeDelta() / 1000 <= AUTO_LOGOUT_TIME;
  }

  static idleCountdown() {
    return this.isAuth() ? AUTO_LOGOUT_TIME - this.loginTimeDelta() / 1000 : 0;
  }

  static setPermissions(permissions) {
    localStorage.setItem('permissions', permissions);
  }

  static getPermissions() {
    return localStorage.getItem('permissions');
  }

  static getUserType() {
    return localStorage.getItem('user-type');
  }

  static isUser() {
    return localStorage.getItem('user-type') === 'user';
  }
}

export default State;
