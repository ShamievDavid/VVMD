import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Loader.scss';

export const Loader = () => {
  const countRef = useRef({ value: 0 });

  useEffect(() => {
    const tl = gsap.timeline();
    const tlBar = gsap.timeline();

    const firstRandomNum = Math.floor(gsap.utils.random(0, 60));
    const secondRandomNum = Math.floor(gsap.utils.random(60, 92));

    tlBar.to('.loader__bar', {
      width: `${firstRandomNum}%`,
      duration: 0.5,
    });

    tl.to(countRef.current, {
      value: firstRandomNum,
      duration: 0.5,
      onUpdate: () => {
        setCount(Math.round(countRef.current.value));
      },
      ease: 'power1.out',
    });

    tl.to(countRef.current, {
      value: secondRandomNum,
      duration: 0.5,
      delay: 0.2,
      onUpdate: () => {
        setCount(Math.round(countRef.current.value));
      },
      ease: 'power1.out',
    });

    tlBar.to('.loader__bar', {
      width: `${secondRandomNum}%`,
      duration: 0.5,
      delay: 0.2,
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

    tlBar.to('.loader__bar', {
      width: '100%',
      duration: 0.5,
      delay: 0.1,
    });
  }, []);

  const setCount = (value) => {
    document.querySelector('.loader__digits').textContent = `${value}%`;
  };

  return (
    <div className="loader">
      <div className="loader__digits" />
      <div className="loader__bar">1</div>
    </div>
  );
};
