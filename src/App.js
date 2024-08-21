import './App.css';

import Header from './components/Header/Header';
import HeaderTopFiller from './components/HeaderTopFiller';
import Footer from './components/Footer/Footer';
import TrailerPreview from './components/TrailerPreview/TrailerPreview';
import WhereToBuyButton from './components/WhereToBuyButton';
import GameDescription from './components/GameDescription/GameDescription';

function App() {
  return (
    <div>
      <Header />
      <HeaderTopFiller />
      <TrailerPreview />
      <WhereToBuyButton />
      <GameDescription />
    </div>
  );
}

export default App;
