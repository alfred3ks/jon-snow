import Layout from './components/Layout';
import Bio from './components/Bio';
import Header from './components/Header';
import Footer from './components/Footer';
import Occupation from './components/Occupation';
import History from './components/History';
import Battles from './components/Battles';

const App = () => {
  return (
    <Layout>
      <Header />
      <Bio />
      <Occupation />
      <History />
      <Battles />
      <Footer />
    </Layout>
  );
};

export default App;
