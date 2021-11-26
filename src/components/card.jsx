import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { tw } from 'twind';
import { getPokemonData } from '../utils/getAPI';

export default function Card({ pokemon }) {
  const pokemonData = useQuery(`pokemonData-${pokemon.name}`, () =>
    getPokemonData(pokemon.url)
  );
  const { status, isError, data } = pokemonData;

  return (
    <div
      className={tw`bg-gray-200 overflow-hidden rounded-md p-8 text-gray-600`}
    >
      <Link to={`/pokemon/${pokemon.name}`}>
        <div>
          <div>
            <h3 className={tw`font-semibold text-xl text-gray-800 capitalize`}>
              {pokemon.name}
            </h3>
          </div>
          <div>
            {status === 'success' ? (
              <>
                {data.data.types.map((type, i) => {
                  return (
                    <div
                      key={pokemon.name + type.type.name}
                      className={tw`p-1 rounded-full bg-green-200 flex justify-center items-center mb-2`}
                    >
                      {type.type.name}
                    </div>
                  );
                })}
                <div>
                  <img
                    src={data.data.sprites.front_default}
                    alt={pokemon.name}
                  />
                </div>
              </>
            ) : status === 'loading' ? (
              <p>Loading</p>
            ) : (
              <p>Error getting data</p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
