import './css/App.scss';
import SearchInput from './components/search-input';
import FiltersBlock from './components/filters-block';
import CardsBlock from './components/cards-block';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <SearchInput />
        <FiltersBlock />
      </header>
      <main>
        <CardsBlock />
      </main>
    </div>
  );
}

export default App;
