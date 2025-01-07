import { Routes, Route } from 'react-router-dom';
import './App.css';
// import CountdownPage from './pages/CountdownPage';
import BirthdayPage from './pages/BirthdayPage';
// import WhoAreYou from './pages/WhoAreYou';

function App() {
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route index element={<BirthdayPage />} />
      </Routes>
    </>
  );
}

export default App;
