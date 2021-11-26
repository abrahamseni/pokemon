import React from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonData } from '../utils/getAPI';
import { useQuery } from 'react-query';
import PokemonAbout from '../components/Pokemon/PokemonAbout';
import PokemonBaseStat from '../components/Pokemon/PokemonBaseStat';
import PokemonEvolution from '../components/Pokemon/PokemonEvolution';
import PokemonMove from '../components/Pokemon/PokemonMove';
import { tw } from 'twind';

export default function PokemonDetail(props) {
  const [tab, setTab] = React.useState('');
  const { pokemonName } = useParams();
  const pokemonData = useQuery(`pokemonDetail-${pokemonName}`, () =>
    getPokemonData('pokemon/' + pokemonName)
  );
  const { status, data } = pokemonData;

  const renderTab = (activeTab) => {
    if (activeTab === 'about') {
      return <PokemonAbout />;
    }
    if (activeTab === 'baseStat') {
      return <PokemonBaseStat />;
    }
    if (activeTab === 'evolution') {
      return <PokemonEvolution />;
    }
    if (activeTab === 'Moves') {
      return <PokemonMove />;
    }
  };

  return (
    <>
      {status === 'loading' ? (
        <p>Loading</p>
      ) : status === 'error' ? (
        <p>Error getting data</p>
      ) : (
        <div className={tw` flex flex-col`}>
          <h3>{data.data.name}</h3>
          <div>
            {data.data.types.map((type) => (
              <div key={pokemonName + type.type.name}>{type.type.name}</div>
            ))}
          </div>
          <div>
            <div>
              <img src={data.data.sprites.front_default} alt={pokemonName} />
            </div>
          </div>
          <div
            className={tw`bg-gray-200 text-gray-700 rounded-t-full overflow-hidden h-full p-4`}
          >
            <ul className={`flex justify-between px-8`}>
              <li onClick={() => setTab('about')}>About</li>
              <li onClick={() => setTab('baseStat')}>Base Stat</li>
              <li onClick={() => setTab('evolution')}>Evolution</li>
              <li onClick={() => setTab('moves')}>Moves</li>
            </ul>
            <div>{renderTab(tab)}</div>
          </div>
        </div>
      )}
    </>
  );
}
