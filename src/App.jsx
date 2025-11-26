import Layout from './components/Layout';
import Bio from './components/Bio';
import Occupation from './components/Occupation';
import History from './components/History';
import Battles from './components/Battles';

const App = () => {
  return (
    <Layout>
      <Bio />
      <Occupation />
      <History />
      <Battles />
    </Layout>
  );
};

export default App;
