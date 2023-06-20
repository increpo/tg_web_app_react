import './App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import GetPage from './components/GetPage/GetPage';
import SpendPage from './components/SpendPage/SpendPage';
import SendPage from './components/SendPage/SendPage';
import ScanQRPage from './components/ScanQRPage/ScanQRPage';
import RequestDebitingPage from './components/RequestDebitingPage/RequestDebitingPage';
import CompletetPage from './components/CompletetPage/CompletetPage';

// const tg = Window.Telegram.WebApp;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/getpage" element={<GetPage/>} />
        <Route path="/spendpage" element={<SpendPage/>} />
        <Route path="/sendpage" element={<SendPage/>} />
        <Route path="/spendpage/scanqr" element={<ScanQRPage/>} />
        <Route path="/spendpage/requestdebiting" element={<RequestDebitingPage/>} />
        <Route path="/complete" element={<CompletetPage/>} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
