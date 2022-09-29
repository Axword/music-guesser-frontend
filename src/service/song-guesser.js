import RestObject from './rest-object';

class SongGuesser extends RestObject {
  constructor({ id, ...rest }) {
    super();
    this.id = id;
    Object.assign(this, rest);
  }
}

SongGuesser.URL = 'guesser/';

export default SongGuesser;