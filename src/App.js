import './App.css';
import 'antd/dist/antd.min.css';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import Events from './pages/Events';
import EventInfo from './pages/EventInfo';
import Home from './pages/Home';
import Listen from './pages/Listen';
import See from './pages/See';
import Lessons from './pages/Lessons';
import { Routes, Route } from 'react-router-dom';
import store from './app/store';
import { Provider } from 'react-redux';
import Bio from './pages/Bio';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Layout>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="bio" element={<Bio />} />
            <Route path="listen" element={<Listen />} />
            <Route path="see" element={<See />} />
            <Route path="lessons" element={<Lessons />} />
            <Route path="events" element={<Events />} />
            <Route path="events/:eventId" element={<EventInfo />} />
          </Routes>
        </Layout>
      </div>
    </Provider>
  );
}

export default App;
