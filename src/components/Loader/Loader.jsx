import React, { useRef } from 'react';
import gsap from 'gsap';
import './Loader.scss';
import { useGSAP } from '@gsap/react';

export const Loader = () => {
  const countRef = useRef({ value: 0 });

  useGSAP(() => {
    const tl = gsap.timeline({
      duration: 0.5,
      onComplete: () => {
        gsap.set('.loader', {
          display: 'none',
        });
      },
    });

    const firstRandomNum = Math.floor(gsap.utils.random(0, 60));
    const secondRandomNum = Math.floor(gsap.utils.random(60, 92));

    tl.to(countRef.current, {
      value: firstRandomNum,
      onUpdate: () => {
        setCount(Math.round(countRef.current.value));
      },
      ease: 'power1.out',
    }).to(
      '.loader__bar',
      {
        width: `${firstRandomNum}%`,
      },
      '<'
    );

    tl.to(countRef.current, {
      value: secondRandomNum,
      delay: 0.2,
      onUpdate: () => {
        setCount(Math.round(countRef.current.value));
      },
      ease: 'power1.out',
    }).to(
      '.loader__bar',
      {
        width: `${secondRandomNum}%`,
        delay: 0.2,
      },
      '<'
    );

    tl.to(countRef.current, {
      value: 100,
      delay: 0.1,
      onUpdate: () => {
        setCount(Math.round(countRef.current.value));
      },
      ease: 'power1.out',
    }).to(
      '.loader__bar',
      {
        width: '100%',
        delay: 0.1,
      },
      '<'
    );
  }, []);

  const setCount = (value) => {
    document.querySelector('.loader__digits').textContent = `${value}%`;
  };

  return (
    <div className="loader">
      <div className="loader__digits" />
      <div className="loader__bar" />
    </div>
  );
};
