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
  static setUserId(user_id) {
    localStorage.setItem('user-id', user_id);
  }
  static getUserId() {
    return localStorage.getItem('user-id');
  }
}

export default State;
