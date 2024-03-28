import React from 'react';
import './Menu.scss';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { navLinks } from 'data';

export const Menu = () => {
  const splitTitleIntoSpans = (title) => {
    return title.split('').map((letter) => (
      <span
        key={letter}
        className="menu__letter"
      >
        {letter}
      </span>
    ));
  };

  useGSAP(() => {
    const animateLetters = (target, yPercent, duration, staggerFrom) => {
      gsap.to(target.querySelectorAll('.menu__letter'), {
        yPercent,
        duration,
        stagger: { each: 0.03, from: staggerFrom },
        overwrite: 'auto',
      });
    };

    const links = gsap.utils.toArray('.menu__link');

    links.forEach((link) => {
      link.addEventListener('mouseenter', () => {
        animateLetters(link, 100, 0.5, 'start');
      });

      link.addEventListener('mouseleave', () => {
        animateLetters(link, 0, 0.3, 'end');
      });
    });
  });

  return (
    <nav className="menu">
      {navLinks.map(({ id, title, href }) => (
        <div className="menu__link">
          <a
            key={id}
            href={href}
          >
            {splitTitleIntoSpans(title)}
          </a>

          <a
            key={id}
            href={href}
            className="menu__second-layer"
          >
            {splitTitleIntoSpans(title)}
          </a>
        </div>
      ))}
      <footer className="menu__footer">footer</footer>
    </nav>
  );
};
