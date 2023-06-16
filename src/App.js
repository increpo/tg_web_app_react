import './App.css';
import {useEffect} from 'react';
import {useTelegram} from 'src/hooks/useTelegram';
import Header from './Header/Header.jsx';

function App() {
    const {tg, user, onClose} = useTelegram();

    useEffect( () => {
        tg.ready();
    }, []);

    return (
        <div className="App">
            <button onClick={onToggleButton}>Toggle</button>
        </div>
    );
}

export default App;
