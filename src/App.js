import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Shared/Header/Header';
import ImgCarousel from './Pages/Home/Carousel/Carousel';

function App() {
    return (
        <div className="App" >
            <Header></Header>
            <ImgCarousel />
            < header className="App-header" >
                <img src={logo}
                    className="App-logo"
                    alt="logo" />
                <p> sob vuli gesi ei koydine </p>
                <a className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer" >
                    Learn React </a>
            </header>
            < header className="App-header" >
                <img src={logo}
                    className="App-logo"
                    alt="logo" />
                <p> sob vuli gesi ei koydine </p>
                <a className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer" >
                    Learn React </a>
            </header>
        </div>

    );
}

export default App;