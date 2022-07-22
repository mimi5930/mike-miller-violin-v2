import './App.css';
import 'antd/dist/antd.min.css';
import { Layout } from 'antd';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Layout>
        <Navbar />
      </Layout>
    </div>
  );
}

export default App;
