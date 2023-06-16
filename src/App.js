import './App.css';
import {useEffect} from 'react';
import {useTelegram} from './components/hooks/useTelegram.js';

function App() {
    const {tg, onToggleButton} = useTelegram();

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
