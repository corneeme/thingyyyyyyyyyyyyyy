import './App.css';

import Header from './components/Header/Header';
import HeaderTopFiller from './components/HeaderTopFiller';
import TrailerPreview from './components/TrailerPreview/TrailerPreview';
import WhereToBuyButton from './components/WhereToBuyButton';
import GameDescription from './components/GameDescription/GameDescription';
import DeadCellsOnAndroid from './components/DeadCellsOnAndroid/DeadCellsOnAndroid';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <HeaderTopFiller />
      <TrailerPreview />
      <WhereToBuyButton />
      <GameDescription />
      <DeadCellsOnAndroid />
    </div>
  );
}

export default App;
