import React, { useState } from 'react';
import { getPokemonDataAPI } from '../service/PokeAPI.service'
import {
  Layout,
  CardWrapper,
  ListDetailGroup,
  ListDetail,
  ListHeader,
  TextName,
  TextId
} from './Pokemon.style'

const Pokemon = props => {
  // const {} = props;
  const [onNoData, setOnNoData] = useState(true);
  const [onNeverSearch, setOnNeverSearch] = useState(true);
  const [pokemonKey, setPokemonKey] = useState();
  const [pokemonData, setPokemonData] = useState({
    name: '',
    id: '',
    types: '',
    stats: [],
    image: '',
  });

  const onChange = (e) => {
    const { value } = e.target
    setPokemonKey(value)
  };

  const onClickSearch = async () => {
    setOnNoData(true)
    if (pokemonKey) {
      const key = pokemonKey.toLowerCase()
      const pokeData = await getPokemonDataAPI(key)
      // console.log(`🚀 ~ onClickSearch ~ pokeData`, pokeData)
      if (pokeData) {
        setOnNoData(false)
        setPokemonData(pokeData)
      } else {
        setOnNoData(true)
        setPokemonData('')
      }
    } else {
      setOnNoData(true)
      setPokemonData('')
    }
    setOnNeverSearch(false)
  }

  return (
    <Layout>
      <html lang="en">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato"></link>
        <TextName> Kanto Pokemon Guide </TextName>
        <div style={{ position: 'center', padding: '5% 5% 5% 5%' }}>
          <div>
            <input class="inputSearch" type="text" onChange={onChange} placeholder="Enter Pokemon..." />

          </div>
          <div>
            <button class="w3-button w3-black w3-section " onClick={onClickSearch} >Search</button>

          </div>

        </div>
        {
          (onNeverSearch) && (
            <div>
              <br /><br />
              <TextId>
                Search the Pokemon data by their name or id
              </TextId>

            </div>
          )
        }
        {
          (onNoData) && (!onNeverSearch) && (
            <div>
              - <br /><br />
              <TextId>
                Pokemon not found<br />
                - Invalid Pokemon name or id<br />
                - Pokemon can not found in this region<br />
              </TextId>

            </div>
          )
        }
        {
          (!onNoData) && (
            <CardWrapper>
              <ListDetailGroup>
                <ListHeader>
                  <img src={pokemonData?.image} style={{ width: "50%" }} />
                  <TextName>{pokemonData?.name}</TextName>
                  <TextId>id:{pokemonData?.id}</TextId>
                </ListHeader>
                <ListDetail>
                  Type : {pokemonData?.types}
                </ListDetail>
                <ListDetail>
                  {
                    pokemonData?.stats?.map(stat => (
                      <div>
                        <div> {stat?.name} </div>
                        <div> {stat?.detail} </div>
                        <br />
                      </div>
                    ))
                  }
                </ListDetail>
              </ListDetailGroup>
            </CardWrapper>
          )
        }
      </html >
    </Layout >
  );
};

export default Pokemon;