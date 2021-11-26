import * as React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from 'react-query';
import Card from '../components/card';
import { tw } from 'twind';
import { get100Pokemon } from '../utils/getAPI';

export default function Home() {
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();
  const query = useQuery('get100Pokemon', get100Pokemon);
  const { status, isError, data } = query;

  return (
    <div>
      {status === 'loading' ? (
        <p>Loading</p>
      ) : status === 'error' ? (
        <p>Error loading Pokemon data</p>
      ) : (
        <div className={tw`flex gap-10 flex-wrap justify-center p-10`}>
          {data.data.results.map((pokemon) => {
            return <Card pokemon={pokemon} />;
          })}
        </div>
      )}
    </div>
  );
}
