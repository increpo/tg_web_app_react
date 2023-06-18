import {version, useEffect, useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {useTelegram} from './hooks/useTelegram.js';
import Header from './components/Header/Header.jsx';
import ProductList from './components/ProductList/ProductList.jsx';
import Form from './components/Form/Form.jsx';
import QRScanner from './components/QRScanner/QRScanner.jsx';
//import QRRead from './components/QRRead/QRRead.jsx';

function App() {
    const {tg, onToggleButton} = useTelegram();

    useEffect( () => {
        tg.ready();
    }, []);

    // const [scanResult, setScanResult] = useState(null);

    // const onNewScanResult = (decodedText, decodedResult) => {
    //     setScanResult(decodedText);
    //     // handle decoded results here
    //     // tg.sendData(decodedText);
    //     // console.log(decodedText);
    // };

    return (
        <div className="App">
            <Header />
            // <QRScanner
            //     fps={10}
            //     qrbox={250}
            //     disableFlip={false}
            // />
            <Routes>
                // <Route index element={<ProductList />}/>
                // <Route path={'form'} element={<Form />}/>
                <Route index element={<QRScanner />}/>
                <Route path={'form'} element={<QRScanner />}/>
            </Routes>
        </div>
    );
}

export default App;

