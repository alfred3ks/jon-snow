import Layout from './components/Layout';
import Bio from './components/Bio';
import Occupation from './components/Occupation';
import History from './components/History';
import Battles from './components/Battles';
import Contact from './components/Contact';
import SnowEffect from './components/SnowEffect';

const App = () => {
  return (
    <>
      <SnowEffect />
      <Layout>
        <Bio />
        <Occupation />
        <History />
        <Battles />
        <Contact />
      </Layout>
    </>
  );
};

export default App;
