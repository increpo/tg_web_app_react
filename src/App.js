import './App.css';
const tg = window.Telegram.WebApp; //переменные с https://core.telegram.org/bots/webapps

function App() {
    // useEffect( () => {
    //     tg.ready();
    // }, []);

    const onClose = () => {
        tg.close();
    }

    return (
        <div className="App">
            it works
            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default App;
