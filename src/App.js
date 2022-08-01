import './App.css';
import 'antd/dist/antd.min.css';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import Events from './pages/Events';
import EventInfo from './pages/EventInfo';
import { Routes, Route } from 'react-router-dom';
import store from './app/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Layout>
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<Events></Events>}></Route> */}
            <Route path="events" element={<Events />} />
            <Route path="events/:eventId" element={<EventInfo />} />
          </Routes>
        </Layout>
      </div>
    </Provider>
  );
}

export default App;
