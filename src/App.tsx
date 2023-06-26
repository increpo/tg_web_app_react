import './App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import GetPage from './components/GetPage/GetPage';
import SpendPage from './components/SpendPage/SpendPage';
import SendPage from './components/SendPage/SendPage';
import ScanQRPage from './components/ScanQRPage/ScanQRPage';
import RequestDebitingPage from './components/RequestDebitingPage/RequestDebitingPage';
import CompletetPage from './components/CompletetPage/CompletetPage';

import QRScanner from './components/QRScanner/QRScanner.jsx';
import Authorization from './components/Authorization/Authorization.jsx';

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
        <Route path="/form" element={<QRScanner withCameraId='true' />}/>
        <Route path="/authorization" element={<Authorization />}/>
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
