import logo from './logo.svg';
import './css/App.scss';
import SearchInput from './components/search-input';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <SearchInput />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main></main>
    </div>
  );
}

export default App;
