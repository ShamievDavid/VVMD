import React, { useEffect, useState } from 'react';

export const Player = () => {
  const [hacks, setHacks] = useState();

  console.log('m', hacks.data);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:1337/api/hackhatons');
      const data = await response.json();

      setHacks(data);
    };

    fetchData();
  }, []);

  return (
    <>
      {hacks?.data.map((i) => (
        <div>{i.attributes.title}</div>
      ))}
    </>
  );
};
