import React from 'react';

import Header from '../components/Header/Header';
import HeaderTopFiller from '../components/HeaderTopFiller';
import TrailerPreview from '../components/TrailerPreview/TrailerPreview';
import WhereToBuyButton from '../components/WhereToBuyButton';
import GameDescription from '../components/GameDescription/GameDescription';
import DeadCellsOnAndroid from '../components/DeadCellsOnAndroid/DeadCellsOnAndroid';
import BlogIntroduction from '../components/BlogIntroduction/BlogIntroduction';
import Footer from '../components/Footer/Footer';

const FrontPage = () => {
  return (
    <>
      <Header />
      <HeaderTopFiller />
      <TrailerPreview />
      <WhereToBuyButton />
      <GameDescription />
      <DeadCellsOnAndroid />
      <BlogIntroduction />
      <Footer />
    </>
  );
};

export default FrontPage;
