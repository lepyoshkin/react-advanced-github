import React from 'react';
import {useAppSelector} from '../hooks/redux';

export const FavouritiesPage = () => {
  const {favourities} = useAppSelector((state) => state.github);

  if (favourities.length === 0) return <p className="text-center">Mo items</p>;

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {' '}
      <ul className="list-none">
        {favourities.map((f) => (
          <li key={f}>
            <a href={f} target="blank">
              {f}
            </a>{' '}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavouritiesPage;
