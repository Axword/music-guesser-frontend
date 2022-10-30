import router from '@/router';
import State from './state';
import Http from './http';
import { v4 as uuidv4 } from 'uuid';

const LOGIN_URL = 'login/';


class Auth {
  static async login(username=null, gamecode=null, join=false) {
    const http = new Http();
    try {
      const uuid = uuidv4()
      const response = await http.fetch('post', LOGIN_URL, { username, gamecode, join, 'user_id': uuid });
      State.setRoomId(response.data.code)
      State.setUserId(uuid)
      router.push("/lobby").catch(() => {});
      return response;
    } catch (err) {
      State.setRoomId(null)
      State.setUserId(null)
      throw err.response.data;
    }
  }

  static async logout() {
    State.setAccessToken('');
    State.setPermissions(null);
    router.push({ name: 'Logowanie' }).catch(() => {});
  }
}

export default Auth;
