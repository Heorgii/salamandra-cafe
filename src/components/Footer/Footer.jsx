import React from 'react';
import { BrandMaze, Footer } from './Footer.styled';

export const FooterComp = () => {
  return (
    <Footer>
      <BrandMaze
        href="https://brand-maze-production.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Дизайн і розробка Brand Maze
      </BrandMaze>
    </Footer>
  );
};
