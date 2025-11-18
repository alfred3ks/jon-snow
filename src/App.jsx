import Layout from './components/Layout';
import Bio from './components/Bio';
import Header from './components/Header';
import Footer from './components/Footer';
import Occupation from './components/Occupation';

const App = () => {
  return (
    <Layout>
      <Header />
      <Bio />
      <Occupation />
      <Footer />
    </Layout>
  );
};

export default App;
