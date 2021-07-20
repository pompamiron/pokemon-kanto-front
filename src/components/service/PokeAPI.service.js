import axios from 'axios';

export const getPokemonDataAPI = async (key) => {
  try {
    const res = await axios.get(`http://localhost:3001/pokemon/${key}`)
    const data = res.data
    // console.log(`🚀 ~ getPokemonDataAPI ~ data`, data)
    // console.log(`🚀 ~ getPokemonDataAPI ~ res.status`, res.status)
    if (res.status !== 200) return false
    const PokemonData = {
      name: data?.name,
      id: data?.id,
      types: data?.types,
      stats: data?.stats,
      image: data?.image,
    }
    // console.log(`🚀 ~ getPokemonDataAPI ~ PokemonData`, PokemonData)
    return PokemonData;
  } catch (error) {
    console.log(error);
  }
};
