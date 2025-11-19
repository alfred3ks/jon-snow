import Layout from './components/Layout';
import Bio from './components/Bio';
import Header from './components/Header';
import Footer from './components/Footer';
import Occupation from './components/Occupation';
import History from './components/History';

const App = () => {
  return (
    <Layout>
      <Header />
      <Bio />
      <Occupation />
      <History />
      <Footer />
    </Layout>
  );
};

export default App;
