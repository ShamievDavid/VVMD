import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Loader.scss';

export const Loader = () => {
  const countRef = useRef({ value: 0 });

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(countRef.current, {
      value: Math.floor(gsap.utils.random(0, 60)),
      duration: 0.5,
      onUpdate: () => {
        setCount(Math.round(countRef.current.value));
      },
      ease: 'power1.out',
    });

    tl.to(countRef.current, {
      value: Math.floor(gsap.utils.random(60, 92)),
      duration: 0.5,
      delay: 0.2,
      onUpdate: () => {
        setCount(Math.round(countRef.current.value));
      },
      ease: 'power1.out',
    });

    tl.to(countRef.current, {
      value: 100,
      duration: 0.5,
      delay: 0.1,
      onUpdate: () => {
        setCount(Math.round(countRef.current.value));
      },
      ease: 'power1.out',
    });
  }, []);

  const setCount = (value) => {
    document.querySelector('.loader').textContent = `${value}%`;
  };

  return (
    <div
      className="loader"
    ></div>
  );
};
