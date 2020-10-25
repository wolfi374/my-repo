import './css/App.scss';
import SearchInput from './components/search-input';
import FiltersBlock from './components/filters-block';
// import RadioInput from './ui-kit/radio-input'
// import CheckboxInput from './ui-kit/checkbox-input';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <SearchInput />
        <FiltersBlock />

      </header>
      <main></main>
    </div>
  );
}

export default App;
