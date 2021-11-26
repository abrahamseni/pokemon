import Axios from '../axios';

export async function get100Pokemon() {
  const data = await Axios.get('pokemon?limit=100');
  return data;
}

export async function getPokemonData(url) {
  const data = await Axios.get(url);
  return data;
}
