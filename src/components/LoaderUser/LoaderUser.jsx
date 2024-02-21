import { Loader } from 'components/Loader';
import React, { useState } from 'react';

export const LoaderUser = () => {
  const [loaderKey, setLoaderKey] = useState(0);

  const restartLoader = () => {
    setLoaderKey((prevKey) => prevKey + 1);
  };

  return (
    <div>
      <Loader key={loaderKey} />
      <button onClick={restartLoader}>↺</button>
    </div>
  );
};