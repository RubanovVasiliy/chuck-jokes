import axios from 'axios';
import { IJoke } from '../models/IJoke';

export default class JokesService {
  static fetchJoke() {
    return axios.get<IJoke>(`https://api.chucknorris.io/jokes/random`);
  }
}
